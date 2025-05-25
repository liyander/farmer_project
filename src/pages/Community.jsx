import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Community() {
  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#222" }}>Community</h1>
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: 64,
          marginTop: 32,
          textAlign: "center",
          boxShadow: "0 2px 8px #e5e7eb44"
        }}>
          <div style={{ fontSize: 64, color: "#22c55e", marginBottom: 24 }}>
            <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
              <circle cx="8" cy="8" r="4" stroke="#22c55e" strokeWidth="2"/>
              <circle cx="16" cy="8" r="4" stroke="#22c55e" strokeWidth="2"/>
              <path d="M2 20c0-3.3137 3.134-6 7-6s7 2.6863 7 6" stroke="#22c55e" strokeWidth="2"/>
              <path d="M10 20c0-2.2091 2.6863-4 6-4s6 1.7909 6 4" stroke="#22c55e" strokeWidth="2"/>
            </svg>
          </div>
          <div style={{ fontSize: 32, fontWeight: "bold", marginBottom: 12 }}>Community Hub</div>
          <div style={{ fontSize: 18, color: "#555", marginBottom: 16 }}>
            Connect with fellow farmers, share knowledge, and grow together.
          </div>
          <div style={{ color: "#888" }}>
            This page is under construction. Check back soon for updates!
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}