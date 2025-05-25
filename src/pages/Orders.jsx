import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Orders() {
  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#222" }}>
          Manage Orders
        </h1>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 64,
            marginTop: 32,
            textAlign: "center",
            boxShadow: "0 2px 8px #e5e7eb44",
          }}
        >
          <div style={{ fontSize: 64, color: "#22c55e", marginBottom: 24 }}>
            <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
              <rect
                x="4"
                y="7"
                width="16"
                height="13"
                rx="2"
                stroke="#22c55e"
                strokeWidth="2"
              />
              <path d="M2 7h20" stroke="#22c55e" strokeWidth="2" />
              <path d="M9 7V5a3 3 0 0 1 6 0v2" stroke="#22c55e" strokeWidth="2" />
              <circle cx="17" cy="14" r="2" stroke="#22c55e" strokeWidth="2" />
              <path d="M17 16v2" stroke="#22c55e" strokeWidth="2" />
            </svg>
          </div>
          <div style={{ fontSize: 32, fontWeight: "bold", marginBottom: 12 }}>
            Your Orders
          </div>
          <div style={{ fontSize: 18, color: "#555", marginBottom: 16 }}>
            Track and manage all your product orders here.
          </div>
          <div style={{ color: "#888" }}>
            This page is under construction. Check back soon for updates!
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}