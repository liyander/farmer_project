import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/", icon: "🏠" },
  { label: "Profile", path: "/profile", icon: "👤" },
  { label: "My Products", path: "/products", icon: "🛍️" },
  { label: "Add Product", path: "/add-product", icon: "➕" },
  { label: "Govt. Schemes", path: "/schemes", icon: "💡" },
  { label: "Manage Orders", path: "/orders", icon: "📦" },
  { label: "Community", path: "/community", icon: "👥" },
];

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Logout handler: clear session and redirect
  const handleLogout = async (e) => {
    e.preventDefault();
    // Remove session token/cookie from localStorage or sessionStorage
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    // Optionally, call backend to destroy session if using server-side sessions
    try {
      await fetch("/api/logout", { method: "POST", credentials: "include" });
    } catch {}
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f6fbf7" }}>
      <aside style={{
        width: 260,
        background: "#f2faef",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #e5e7eb"
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", padding: 24 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 8, background: "#e5e7eb", marginRight: 12
            }} />
            <span style={{ fontWeight: "bold", fontSize: 22, color: "#222" }}>FarmConnect</span>
          </div>
          <nav>
            {navItems.map(item => (
              <Link
                to={item.path}
                key={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 24px",
                  textDecoration: "none",
                  color: location.pathname === item.path ? "#fff" : "#222",
                  background: location.pathname === item.path ? "#22c55e" : "transparent",
                  borderRadius: 8,
                  margin: "4px 12px",
                  fontWeight: location.pathname === item.path ? "bold" : "normal"
                }}
              >
                <span style={{ marginRight: 14, fontSize: 18 }}>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div style={{ padding: 24 }}>
          <a
            href="/login"
            onClick={handleLogout}
            style={{ color: "#222", textDecoration: "none", display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: 8 }}>↩️</span> Logout
          </a>
        </div>
      </aside>
      <main style={{ flex: 1, minHeight: "100vh", background: "#f6fbf7" }}>
        {children}
      </main>
    </div>
  );
}