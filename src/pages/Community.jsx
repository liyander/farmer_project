import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Community() {
  const [tab, setTab] = useState("messages");
  const [messages, setMessages] = useState([]);
  const [schemes, setSchemes] = useState([]);
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState("Farmer" + Math.floor(Math.random() * 1000)); // simple user simulation
  const [error, setError] = useState("");

  // Fetch all community data on mount
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [msgRes, schRes, prodRes] = await Promise.all([
        fetch("http://localhost:5000/api/community/messages"),
        fetch("http://localhost:5000/api/community/schemes"),
        fetch("http://localhost:5000/api/community/products"),
      ]);
      setMessages(await msgRes.json());
      setSchemes(await schRes.json());
      setProducts(await prodRes.json());
    } catch (err) {
      setError("Failed to load community data.");
    }
  }

  async function handleShare(e) {
    e.preventDefault();
    setError("");
    if (!input.trim()) return;
    let endpoint = "";
    let body = {};
    if (tab === "messages") {
      endpoint = "http://localhost:5000/api/community/messages";
      body = { user, text: input };
    } else if (tab === "schemes") {
      endpoint = "http://localhost:5000/api/community/schemes";
      body = { user, scheme: input };
    } else if (tab === "products") {
      endpoint = "http://localhost:5000/api/community/products";
      body = { user, product: input };
    }
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to share");
      setInput("");
      fetchData();
    } catch (err) {
      setError("Failed to share. Try again.");
    }
  }

  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#222" }}>Community</h1>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 32,
            marginTop: 32,
            boxShadow: "0 2px 8px #e5e7eb44",
          }}
        >
          <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
            <button
              onClick={() => setTab("messages")}
              style={{
                padding: "8px 24px",
                borderRadius: 8,
                border: "none",
                background: tab === "messages" ? "#22c55e" : "#f2faef",
                color: tab === "messages" ? "#fff" : "#222",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Messages
            </button>
            <button
              onClick={() => setTab("schemes")}
              style={{
                padding: "8px 24px",
                borderRadius: 8,
                border: "none",
                background: tab === "schemes" ? "#22c55e" : "#f2faef",
                color: tab === "schemes" ? "#fff" : "#222",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Share Schemes
            </button>
            <button
              onClick={() => setTab("products")}
              style={{
                padding: "8px 24px",
                borderRadius: 8,
                border: "none",
                background: tab === "products" ? "#22c55e" : "#f2faef",
                color: tab === "products" ? "#fff" : "#222",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Share Products
            </button>
          </div>
          <form onSubmit={handleShare} style={{ marginBottom: 24 }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={
                tab === "messages"
                  ? "Share a message with the community"
                  : tab === "schemes"
                  ? "Share a scheme (name or info)"
                  : "Share a product (name or info)"
              }
              style={{
                width: "70%",
                padding: "12px",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                marginRight: 12,
                fontSize: 16,
              }}
            />
            <button
              type="submit"
              style={{
                background: "#22c55e",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 24px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Share
            </button>
          </form>
          {error && (
            <div style={{ color: "red", marginBottom: 16 }}>{error}</div>
          )}
          <div>
            {tab === "messages" && (
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: 12 }}>Community Messages</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {messages.map((msg, idx) => (
                    <li key={idx} style={{ marginBottom: 10 }}>
                      <strong>{msg.user}:</strong> {msg.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tab === "schemes" && (
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: 12 }}>Shared Schemes</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {schemes.map((sch, idx) => (
                    <li key={idx} style={{ marginBottom: 10 }}>
                      <strong>{sch.user}:</strong> {sch.scheme}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tab === "products" && (
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: 12 }}>Shared Products</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {products.map((prod, idx) => (
                    <li key={idx} style={{ marginBottom: 10 }}>
                      <strong>{prod.user}:</strong> {prod.product}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}