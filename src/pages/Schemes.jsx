import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Schemes() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);

  useEffect(() => {
    async function fetchSchemes() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("http://localhost:5000/api/schemes");
        if (!res.ok) throw new Error("Failed to fetch schemes");
        const data = await res.json();
        setSchemes(data);
        setFilteredSchemes(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchSchemes();
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFilteredSchemes(
      schemes.filter((scheme) =>
        Object.values(scheme).join(" ").toLowerCase().includes(lower)
      )
    );
  }, [search, schemes]);

  const getSchemeName = (scheme) => {
    return (
      scheme["schemeName"] ||
      scheme["Name of theScheme"] ||
      scheme["Component"] ||
      scheme["Name of Machinery"] ||
      scheme["Commodity"] ||
      scheme.name ||
      "Untitled Scheme"
    );
  };

  // Try to extract all relevant keys dynamically
  const displayFields = [
    "details",
    "objective",
    "benefit",
    "subsidy",
    "Hire Charges( Rs\tper hour- With Diesel)",
    "Minimum support price(2010-11)"
  ];

  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#222" }}>
          Government Scheme Search
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
            Search and explore government schemes relevant to farmers.
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search schemes by name, benefit, eligibility, etc."
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              background: "#f2faef",
              marginBottom: 16,
              fontSize: 16,
            }}
          />

          {error && (
            <div
              style={{
                color: "red",
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              {error}
            </div>
          )}

          {loading ? (
            <div style={{ marginTop: 32, color: "#888" }}>Loading...</div>
          ) : (
            <div style={{ marginTop: 32 }}>
              {filteredSchemes.length > 0 ? (
                <>
                  <h3 style={{ fontWeight: "bold", marginBottom: 16 }}>
                    Schemes
                  </h3>
                  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                    {filteredSchemes.map((scheme, idx) => (
                      <li
                        key={scheme._id || idx}
                        style={{
                          border: "1px solid #e5e7eb",
                          borderRadius: 12,
                          padding: 16,
                          marginBottom: 16,
                          background: "#f9fff9",
                        }}
                      >
                        <h4 style={{ margin: "0 0 8px" }}>
                          {getSchemeName(scheme)}
                        </h4>
                        <div style={{ color: "#555" }}>
                          {displayFields.map(
                            (field) =>
                              scheme[field] && (
                                <div key={field}>
                                  <strong>{field.split("(")[0].trim()}:</strong>{" "}
                                  {scheme[field]}
                                </div>
                              )
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div style={{ color: "#888" }}>No schemes found.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
