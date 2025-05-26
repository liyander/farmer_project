import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    seller: "",
    contact: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.name || !form.price || !form.category) {
      setError("Please fill in all required fields.");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) setError(data.error || "Error adding product");
      else {
        setSuccess("Product listed successfully!");
        setForm({
          name: "",
          description: "",
          price: "",
          category: "",
          image: "",
          seller: "",
          contact: ""
        });
      }
    } catch {
      setError("Server error");
    }
  };

  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#222" }}>List New Product</h1>
        <div style={{ background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 8px #e5e7eb44" }}>
          <h2 style={{ fontWeight: "bold" }}>Add Your Product</h2>
          <div style={{ color: "#555", marginBottom: 24 }}>
            Fill in the details below to list your agricultural product on AgriConnect.
          </div>
          <form onSubmit={handleSubmit}>
            <label>Product Name</label>
            <input
              name="name"
              type="text"
              placeholder="e.g., Fresh Organic Apples"
              style={inputStyle}
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Detailed description of your product..."
              style={inputStyle}
              rows={4}
              value={form.description}
              onChange={handleChange}
            />
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ flex: 1 }}>
                <label>Price (per unit, e.g., kg, liter, item)</label>
                <input
                  name="price"
                  type="number"
                  placeholder="0"
                  style={inputStyle}
                  value={form.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Category</label>
                <select
                  name="category"
                  style={inputStyle}
                  value={form.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Dairy">Dairy</option>
                </select>
              </div>
            </div>
            <label>Image URL (Optional)</label>
            <input
              name="image"
              type="text"
              placeholder="https://example.com/product-image.png"
              style={inputStyle}
              value={form.image}
              onChange={handleChange}
            />
            <div style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
              A clear image helps sell your product. Use a placeholder if none available.
            </div>
            <label>Seller/Farm Name</label>
            <input
              name="seller"
              type="text"
              placeholder="Current User Farm"
              style={inputStyle}
              value={form.seller}
              onChange={handleChange}
            />
            <label>Contact Information (Phone/Email)</label>
            <input
              name="contact"
              type="text"
              placeholder="user@example.com"
              style={inputStyle}
              value={form.contact}
              onChange={handleChange}
            />
            {error && <div style={{ color: "#e11d48", marginBottom: 12 }}>{error}</div>}
            {success && <div style={{ color: "#15803d", marginBottom: 12 }}>{success}</div>}
            <button style={buttonStyle} type="submit">List Product</button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  background: "#f2faef",
  marginTop: 4,
  marginBottom: 16,
  fontSize: 16
};

const buttonStyle = {
  background: "#22c55e",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "12px 32px",
  fontWeight: "bold",
  marginTop: 8,
  cursor: "pointer"
};