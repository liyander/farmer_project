import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Schemes() {
  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#222" }}>
          AI Government Scheme Recommendations
        </h1>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 2px 8px #e5e7eb44",
          }}
        >
          <h2 style={{ color: "#22c55e", fontWeight: "bold" }}>
            Discover Relevant Schemes
          </h2>
          <div style={{ color: "#555", marginBottom: 24 }}>
            Our AI tool helps you find government schemes tailored to your farmer
            profile. Provide some details about your farm, and we'll generate a
            summarized list of potentially beneficial schemes.
          </div>
          <label>Farmer Profile Description</label>
          <textarea
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              background: "#f2faef",
              marginTop: 4,
              marginBottom: 16,
              fontSize: 16,
              minHeight: 120,
            }}
            placeholder="Describe your farm: e.g., farm size (10 acres), location (XYZ district, ABC state), primary crops/livestock (rice, wheat, dairy cattle), years of experience, specific challenges (water scarcity, market access), or goals (e.g., interested in organic farming, mechanization, export)."
          />
          <div
            style={{
              fontSize: 13,
              color: "#888",
              marginBottom: 16,
            }}
          >
            Provide as much detail as possible for a more accurate recommendation.
            Minimum 50 characters.
          </div>
          <button
            style={{
              background: "#22c55e",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 32px",
              fontWeight: "bold",
              marginTop: 8,
              cursor: "pointer",
            }}
          >
            Get Scheme Recommendations
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}