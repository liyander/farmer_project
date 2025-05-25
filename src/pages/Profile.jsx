import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#222" }}>Manage Profile</h1>
        <div style={{ background: "#fff", borderRadius: 16, padding: 32, marginBottom: 32, boxShadow: "0 2px 8px #e5e7eb44" }}>
          <form>
            <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <label>Farm Name</label>
                <input type="text" value="Green Acres Farm" style={inputStyle} readOnly />
              </div>
            </div>
            <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <label>Farm Size (Optional)</label>
                <input type="text" value="25 acres" style={inputStyle} readOnly />
              </div>
              <div style={{ flex: 1 }}>
                <label>Location (Optional)</label>
                <input type="text" value="Ruralville, ST" style={inputStyle} readOnly />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label>Crops Grown (Optional)</label>
              <textarea style={inputStyle} rows={2} value="Corn, Soybeans, Wheat" readOnly />
              <div style={{ fontSize: 13, color: "#888" }}>List the main crops you cultivate, separated by commas.</div>
            </div>
            <button style={buttonStyle}>Save Changes</button>
          </form>
        </div>
        <div style={{ background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 8px #e5e7eb44" }}>
          <h2 style={{ fontWeight: "bold" }}>My Product Listings</h2>
          <div style={{ color: "#555" }}>
            You haven't listed any products yet. <a href="/add-product" style={{ color: "#22c55e" }}>List a product now.</a>
          </div>
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
  marginBottom: 8,
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