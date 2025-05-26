const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Models
const User = require('./models/User');
const Product = require('./models/Product');
const Scheme = require('./models/Scheme');
const Order = require('./models/Order');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'nandhadaleodas';

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());

// === MongoDB Connection ===
mongoose.connect(
  "mongodb+srv://thiru23:reallynigga@cluster0.mynr0wh.mongodb.net/farmconnect?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(async () => {
  console.log('✅ MongoDB connected');
  await importSchemesFromJSON(); // Import on startup
}).catch(err => console.error('❌ MongoDB connection error:', err));

// === Helper: Import Schemes ===
async function importSchemesFromJSON() {
  try {
    const filePath = path.join(__dirname, 'tnau_paddy_schemes.json');
    if (!fs.existsSync(filePath)) {
      console.warn('⚠️ tnau_paddy_schemes.json not found, skipping import');
      return;
    }
    const rawData = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
    let schemes = JSON.parse(rawData);

    schemes = schemes.map(s => {
      if (s._id) delete s._id;
      return s;
    });

    await Scheme.deleteMany(); // optional clear
    const result = await Scheme.insertMany(schemes);
    console.log(`✅ Imported ${result.length} schemes from JSON`);
  } catch (err) {
    console.error('❌ Failed to import schemes:', err.message);
  }
}

// === User Routes ===

// Register
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ error: 'All fields required' });

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ error: 'Email already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashed });
  await user.save();
  res.json({ message: 'Registered successfully' });
});

// Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
});

// Profile (protected)
app.get('/api/profile', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });

  try {
    const decoded = jwt.verify(auth.split(' ')[1], JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    res.json(user);
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// === Products ===
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// === Schemes ===

// Add single scheme
app.post('/api/schemes', async (req, res) => {
  try {
    const scheme = new Scheme(req.body);
    await scheme.save();
    res.json(scheme);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all schemes
app.get('/api/schemes', async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Import schemes from JSON manually
app.post('/api/schemes/import', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'tnau_paddy_schemes.json');
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'JSON file not found' });
    }

    const rawData = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
    let schemes = JSON.parse(rawData);

    schemes = schemes.map(s => {
      if (s._id) delete s._id;
      return s;
    });

    await Scheme.deleteMany();
    const result = await Scheme.insertMany(schemes);
    res.json({ message: 'Schemes imported', count: result.length });
  } catch (err) {
    console.error('❌ Failed to import schemes:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// === Orders ===
app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('product')
      .populate('buyer', 'name email');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// === Community ===
const communityMessages = [];
const communitySchemes = [];
const communityProducts = [];

// Community: Messages
app.get('/api/community/messages', (req, res) => {
  res.json(communityMessages);
});
app.post('/api/community/messages', (req, res) => {
  const { user, text } = req.body;
  if (!user || !text) return res.status(400).json({ error: "Missing fields" });
  communityMessages.push({ user, text });
  res.json({ success: true });
});

// Community: Schemes
app.get('/api/community/schemes', (req, res) => {
  res.json(communitySchemes);
});
app.post('/api/community/schemes', (req, res) => {
  const { user, scheme } = req.body;
  if (!user || !scheme) return res.status(400).json({ error: "Missing fields" });
  communitySchemes.push({ user, scheme });
  res.json({ success: true });
});

// Community: Products
app.get('/api/community/products', (req, res) => {
  res.json(communityProducts);
});
app.post('/api/community/products', (req, res) => {
  const { user, product } = req.body;
  if (!user || !product) return res.status(400).json({ error: "Missing fields" });
  communityProducts.push({ user, product });
  res.json({ success: true });
});

// === Server Start ===
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
