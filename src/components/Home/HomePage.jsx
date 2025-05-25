import React from "react";
import DashboardLayout from "../DashboardLayout";

function HomePage() {
  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <header style={{ borderBottom: "1px solid #e5e7eb", marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: "bold", margin: 0, color: "#222" }}>Dashboard</h1>
        </header>
        <section>
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: 32,
            marginBottom: 32,
            boxShadow: "0 2px 8px #e5e7eb44"
          }}>
            <h2 style={{ color: "#22c55e", fontWeight: "bold", fontSize: 28, margin: 0 }}>Welcome to FarmConnect!</h2>
            <div style={{ fontSize: 18, margin: "12px 0 0 0" }}>
              Your central hub for managing your agricultural activities and connecting with the community.
              <br /><br />
              Here you can find the latest updates, manage your products, and explore resources to help your farm thrive.
            </div>
          </div>
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: 32,
            marginBottom: 32,
            boxShadow: "0 2px 8px #e5e7eb44"
          }}>
            <h2 style={{ color: "#22c55e", fontWeight: "bold", fontSize: 24, margin: 0 }}>Weather Update</h2>
            <div style={{ marginTop: 12, fontSize: 18 }}>
              <b>22°C</b> Heavy Rain & Thunder<br />
              <span style={{ color: "#555" }}>Humidity: 90% | Wind: 30 km/h</span>
            </div>
          </div>
          <div>
            <h2 style={{ color: "#22c55e", fontWeight: "bold", fontSize: 24 }}>Quick Actions</h2>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 16 }}>
              <ActionCard title="Manage Profile" desc="Update your personal and farm details." btn="Go to Profile" />
              <ActionCard title="List a New Product" desc="Add a new product to your catalog." btn="Go to New Product" />
              <ActionCard title="View Products" desc="Browse all available products." btn="Go to Products" />
              <ActionCard title="Explore Schemes" desc="Find relevant government schemes." btn="Go to Schemes" />
            </div>
          </div>
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: 32,
            marginTop: 32,
            boxShadow: "0 2px 8px #e5e7eb44"
          }}>
            <h2 style={{ color: "#22c55e", fontWeight: "bold", fontSize: 24 }}>Latest Updates</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                <div style={{
                  width: 80, height: 80, background: "#e5e7eb", borderRadius: 8, marginRight: 24
                }} />
                <div>
                  <div style={{ fontWeight: "bold", fontSize: 18 }}>New Feature: AI Scheme Recommendations</div>
                  <div>Discover government schemes tailored to your profile with our new AI tool. <a href="/schemes" style={{ color: "#22c55e" }}>Try it now!</a></div>
                </div>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                  width: 80, height: 80, background: "#e5e7eb", borderRadius: 8, marginRight: 24
                }} />
                <div>
                  <div style={{ fontWeight: "bold", fontSize: 18 }}>Community Spotlight: Farmer's Market Next Week</div>
                  <div>Join us for the local farmer's market. A great opportunity to showcase your products.</div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

function ActionCard({ title, desc, btn }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #22c55e",
      borderRadius: 12,
      width: 260,
      minHeight: 120,
      padding: 24,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <div>
        <div style={{ fontWeight: "bold", fontSize: 20 }}>{title}</div>
        <div style={{ color: "#555", margin: "8px 0 16px 0" }}>{desc}</div>
      </div>
      <button style={{
        background: "#fff",
        color: "#22c55e",
        border: "2px solid #22c55e",
        borderRadius: 8,
        padding: "8px 0",
        fontWeight: "bold",
        cursor: "pointer"
      }}>{btn}</button>
    </div>
  );
}

export default HomePage;