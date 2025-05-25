import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";

const API_KEY = "3d526aaa720846eab7a180615252505"; // WeatherAPI.com API key
const CITY = "Coimbatore"; // Change to your city

export default function Dashboard() {
  const navigate = useNavigate();
  const [weatherTab, setWeatherTab] = useState("current");
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);

  // Fetch weather data from WeatherAPI.com
  useEffect(() => {
    async function fetchWeather() {
      // Current weather
      const currentRes = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`
      );
      const currentData = await currentRes.json();

      // Forecast (hourly and daily)
      const forecastRes = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITY}&days=5&aqi=no&alerts=no`
      );
      const forecastData = await forecastRes.json();

      setWeather(currentData.current);
      setHourly(forecastData.forecast.forecastday[0].hour); // 24 hours
      setDaily(forecastData.forecast.forecastday); // 5 days
    }
    fetchWeather();
  }, []);

  return (
    <DashboardLayout>
      <div style={{ padding: "32px 40px" }}>
        <h1 style={{ fontSize: 40, fontWeight: "bold", color: "#222", marginBottom: 24 }}>Dashboard</h1>

        {/* Welcome Section */}
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            padding: 32,
            marginBottom: 32,
            boxShadow: "0 2px 8px #e5e7eb44",
          }}
        >
          <h2 style={{ color: "#22c55e", fontWeight: "bold", fontSize: 32, marginBottom: 12 }}>
            Welcome to FarmConnect!
          </h2>
          <div style={{ fontSize: 20, color: "#222" }}>
            Your central hub for managing your agricultural activities and connecting with the community.
            <br />
            <br />
            Here you can find the latest updates, manage your products, and explore resources to help your farm thrive.
          </div>
        </div>

        {/* Weather Update Section with Tabs */}
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            padding: 32,
            marginBottom: 32,
            boxShadow: "0 2px 8px #e5e7eb44",
          }}
        >
          <h2 style={{ color: "#22c55e", fontWeight: "bold", fontSize: 28, marginBottom: 16 }}>
            Weather Update
          </h2>
          <div style={{ display: "flex", gap: 32, alignItems: "center", marginBottom: 24 }}>
            <WeatherTabBtn active={weatherTab === "current"} onClick={() => setWeatherTab("current")}>
              Current
            </WeatherTabBtn>
            <WeatherTabBtn active={weatherTab === "hourly"} onClick={() => setWeatherTab("hourly")}>
              Hourly
            </WeatherTabBtn>
            <WeatherTabBtn active={weatherTab === "daily"} onClick={() => setWeatherTab("daily")}>
              Daily
            </WeatherTabBtn>
          </div>
          <div>
            {weatherTab === "current" && (
              weather ? (
                <div>
                  <div style={{ fontSize: 24, fontWeight: "bold", marginBottom: 4 }}>
                    {Math.round(weather.temp_c)}°C{" "}
                    <span style={{ fontWeight: "normal" }}>{weather.condition.text}</span>
                  </div>
                  <div style={{ fontSize: 18, color: "#222", marginBottom: 4 }}>
                    {weather.condition.text}
                  </div>
                  <div style={{ fontSize: 18, color: "#555" }}>
                    Humidity: {weather.humidity}% | Wind: {Math.round(weather.wind_kph)} km/h
                  </div>
                </div>
              ) : (
                <div style={{ color: "#888", fontSize: 20 }}>Loading weather data...</div>
              )
            )}
            {weatherTab === "hourly" && (
              hourly.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    gap: 28,
                    overflowX: "auto",
                    paddingBottom: 8,
                    marginBottom: 8,
                    scrollbarWidth: "thin",
                    maxWidth: "100%",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {hourly.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        maxWidth: 10,
                        textAlign: "center",
                        flex: "0 0 auto",
                        padding: "8px 4px",
                        background: "#f8f9fa",
                        borderRadius: 8,
                      }}
                    >
                      <div style={{ fontWeight: "600", fontSize: 14, marginBottom: 2 }}>
                        {h.time.split(" ")[1]}
                      </div>
                      <div style={{ fontWeight: "bold", fontSize: 16, marginBottom: 2 }}>
                        {Math.round(h.temp_c)}°C
                      </div>
                      <div style={{ fontSize: 12, color: "#666" }}>
                        {h.condition.text.split(" ")[0]}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ color: "#888", fontSize: 20 }}>Loading weather data...</div>
              )
            )}
            {weatherTab === "daily" && (
              daily.length > 0 ? (
                <div style={{ display: "flex", gap: 24, overflowX: "auto" }}>
                  {daily.map((d, i) => (
                    <div key={i} style={{ minWidth: 140, textAlign: "center" }}>
                      <div style={{ fontWeight: "bold" }}>
                        {new Date(d.date).toLocaleDateString(undefined, { weekday: "short" })}
                      </div>
                      <div>
                        {Math.round(d.day.mintemp_c)}°C / {Math.round(d.day.maxtemp_c)}°C
                      </div>
                      <div style={{ fontSize: 14 }}>{d.day.condition.text}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ color: "#888", fontSize: 20 }}>Loading weather data...</div>
              )
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <h2 style={{ color: "#22c55e", fontWeight: "bold", fontSize: 28, marginBottom: 24 }}>
          Quick Actions
        </h2>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginBottom: 40 }}>
          <ActionCard
            title="Manage Profile"
            desc="Update your personal and farm details."
            btn="Go to Profile"
            onClick={() => navigate("/profile")}
          />
          <ActionCard
            title="List a New Product"
            desc="Add a new product to your catalog."
            btn="Go to New Product"
            onClick={() => navigate("/add-product")}
          />
          <ActionCard
            title="View Products"
            desc="Browse all available products."
            btn="Go to Products"
            onClick={() => navigate("/products")}
          />
          <ActionCard
            title="Explore Schemes"
            desc="Find relevant government schemes."
            btn="Go to Schemes"
            onClick={() => navigate("/schemes")}
          />
        </div>

        {/* Latest Updates */}
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            padding: 32,
            marginBottom: 32,
            boxShadow: "0 2px 8px #e5e7eb44",
          }}
        >
          <h2 style={{ color: "#22c55e", fontWeight: "bold", fontSize: 28, marginBottom: 24 }}>
            Latest Updates
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ display: "flex", alignItems: "center", marginBottom: 28 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: "#e5e7eb",
                  borderRadius: 8,
                  marginRight: 24,
                }}
              />
              <div>
                <div style={{ fontWeight: "bold", fontSize: 20 }}>
                  New Feature: AI Scheme Recommendations
                </div>
                <div style={{ fontSize: 17 }}>
                  Discover government schemes tailored to your profile with our new AI tool.{" "}
                  <a href="/schemes" style={{ color: "#22c55e", fontWeight: "bold" }}>
                    Try it now!
                  </a>
                </div>
              </div>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: "#e5e7eb",
                  borderRadius: 8,
                  marginRight: 24,
                }}
              />
              <div>
                <div style={{ fontWeight: "bold", fontSize: 20 }}>
                  Community Spotlight: Farmer's Market Next Week
                </div>
                <div style={{ fontSize: 17 }}>
                  Join us for the local farmer's market. A great opportunity to showcase your products.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}

function ActionCard({ title, desc, btn, onClick }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "2px solid #22c55e",
        borderRadius: 16,
        width: 320,
        minHeight: 200,
        padding: 32,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 24,
      }}
    >
      <div>
        <div style={{ fontWeight: "bold", fontSize: 24, marginBottom: 8 }}>{title}</div>
        <div style={{ color: "#222", fontSize: 18, marginBottom: 24 }}>{desc}</div>
      </div>
      <button
        onClick={onClick}
        style={{
          background: "#fff",
          color: "#22c55e",
          border: "2px solid #22c55e",
          borderRadius: 8,
          padding: "12px 0",
          fontWeight: "bold",
          fontSize: 18,
          cursor: "pointer",
          width: "100%",
          marginTop: "auto",
        }}
      >
        {btn}
      </button>
    </div>
  );
}

function WeatherTabBtn({ active, children, ...props }) {
  return (
    <button
      {...props}
      style={{
        background: "#fff",
        color: "#22c55e",
        border: "2px solid #22c55e",
        borderRadius: 12,
        padding: "16px 40px",
        fontWeight: "bold",
        fontSize: 24,
        cursor: "pointer",
        outline: "none",
        boxShadow: active ? "0 0 0 2px #22c55e" : "none",
        ...(active && { background: "#e5f7e9", color: "#22c55e" }),
      }}
    >
      {children}
    </button>
  );
}