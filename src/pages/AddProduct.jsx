import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function AddProduct() {
  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#222" }}>List New Product</h1>
        <div style={{ background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 8px #e5e7eb44" }}>
          <h2 style={{ fontWeight: "bold" }}>Add Your Product</h2>
          <div style={{ color: "#555", marginBottom: 24 }}>
            Fill in the details below to list your agricultural product on AgriConnect.
          </div>
          <form>
            <label>Product Name</label>
            <input type="text" placeholder="e.g., Fresh Organic Apples" style={inputStyle} />
            <label>Description</label>
            <textarea placeholder="Detailed description of your product..." style={inputStyle} rows={4} />
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ flex: 1 }}>
                <label>Price (per unit, e.g., kg, liter, item)</label>
                <input type="number" placeholder="0" style={inputStyle} />
              </div>
              <div style={{ flex: 1 }}>
                <label>Category</label>
                <select style={inputStyle}>
                  <option>Select a category</option>
                  <option>Fruits</option>
                  <option>Vegetables</option>
                  <option>Dairy</option>
                </select>
              </div>
            </div>
            <label>Image URL (Optional)</label>
            <input type="text" placeholder="https://example.com/product-image.png" style={inputStyle} />
            <div style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
              A clear image helps sell your product. Use a placeholder if none available.
            </div>
            <label>Seller/Farm Name</label>
            <input type="text" placeholder="Current User Farm" style={inputStyle} />
            <label>Contact Information (Phone/Email)</label>
            <input type="text" placeholder="user@example.com" style={inputStyle} />
            <button style={buttonStyle}>List Product</button>
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