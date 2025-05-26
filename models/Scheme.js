const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema(
  {
    schemeName: String,
    department: String,
    description: String,
    eligibility: String,
    benefits: String,
    applicationProcedure: String,
  },
  { strict: false }
);

module.exports = mongoose.model('Scheme', schemeSchema);
