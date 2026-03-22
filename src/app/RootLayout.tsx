import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f1f5f9" }}>
      <header style={{ position: "sticky", top: 0, backgroundColor: "#0f172a", borderBottom: "1px solid #334155", zIndex: 10 }}>
        <nav style={{ maxWidth: "1100px", margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <NavLink to="/" style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#6366f1", textDecoration: "none" }}>
            Hajar Zegour
          </NavLink>
          <div style={{ display: "flex", gap: "24px", fontSize: "0.9rem" }}>
            {[
              { to: "/projects", label: "Projets" },
              { to: "/experience", label: "Experience" },
              { to: "/education", label: "Formation" },
              { to: "/contact", label: "Contact" }
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => ({
                  color: isActive ? "#6366f1" : "#94a3b8",
                  textDecoration: "none",
                  fontWeight: isActive ? "600" : "400"
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
        <Outlet />
      </main>
      <footer style={{ borderTop: "1px solid #334155", padding: "24px", textAlign: "center", fontSize: "0.85rem", color: "#64748b" }}>
        {new Date().getFullYear()} Hajar Zegour — Tous droits reserves
      </footer>
    </div>
  );
}