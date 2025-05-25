import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Products() {
  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#222" }}>
          Product Showcase
        </h1>
        <div style={{ display: "flex", gap: 24, margin: "32px 0" }}>
          <input placeholder="Search products..." style={searchStyle} />
          <select style={searchStyle}>
            <option>Filter by category</option>
          </select>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          <ProductCard
            name="Organic Honey"
            category="Dairy"
            desc="Pure, raw honey from local wildflowers."
            price="$12.99"
            seller="Bee Happy Farms"
            contact="contact@beehappy.com"
          />
          <ProductCard
            name="Fresh Strawberries"
            category="Fruits"
            desc="Sweet and juicy strawberries, picked daily."
            price="$5.50"
            seller="Berry Best Gardens"
            contact="555-1234"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

function ProductCard({ name, category, desc, price, seller, contact }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        width: 340,
        boxShadow: "0 2px 8px #e5e7eb44",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "#e5e7eb",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 32,
          color: "#aaa",
        }}
      >
        600 × 400
      </div>
      <div style={{ padding: 24 }}>
        <div style={{ fontWeight: "bold", fontSize: 22 }}>{name}</div>
        <span
          style={{
            background: "#e5f7e9",
            color: "#22c55e",
            borderRadius: 8,
            padding: "2px 12px",
            fontSize: 14,
            margin: "8px 0",
            display: "inline-block",
          }}
        >
          {category}
        </span>
        <div style={{ color: "#555", margin: "8px 0" }}>{desc}</div>
        <div
          style={{
            color: "#22c55e",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {price}
        </div>
        <div style={{ marginTop: 16, color: "#222" }}>
          <div>👤 {seller}</div>
          <div>📞 {contact}</div>
        </div>
        <button
          style={{
            background: "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "12px 0",
            fontWeight: "bold",
            width: "100%",
            marginTop: 16,
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

const searchStyle = {
  padding: "12px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  background: "#f2faef",
  fontSize: 16,
  minWidth: 220,
};