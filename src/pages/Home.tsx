import { profile } from "@/data/profile";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", padding: "40px 0" }}>
      <div>
        <p style={{ color: "#6366f1", fontWeight: "600", marginBottom: "8px", fontSize: "0.95rem" }}>
          Developpeuse Web
        </p>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", color: "#f1f5f9", lineHeight: "1.1", marginBottom: "16px" }}>
          {profile.name}
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: "8px" }}>{profile.role}</p>
        <p style={{ color: "#64748b", lineHeight: "1.7", marginBottom: "28px" }}>{profile.about}</p>

        <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
          <Link to="/projects" style={{ backgroundColor: "#6366f1", color: "white", padding: "10px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: "600" }}>
            Voir mes projets
          </Link>
          <Link to="/contact" style={{ border: "1px solid #334155", color: "#94a3b8", padding: "10px 24px", borderRadius: "8px", textDecoration: "none" }}>
            Me contacter
          </Link>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
          {profile.skills.map((skill) => (
            <span key={skill} style={{ backgroundColor: "#1e293b", border: "1px solid #334155", color: "#94a3b8", padding: "4px 12px", borderRadius: "20px", fontSize: "0.8rem" }}>
              {skill}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer"
              style={{ color: "#6366f1", textDecoration: "none", fontWeight: "500" }}>
              {social.label} →
            </a>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative" }}>
          <div style={{ width: "320px", height: "320px", borderRadius: "50%", overflow: "hidden", border: "3px solid #6366f1", boxShadow: "0 0 40px rgba(99,102,241,0.3)" }}>
            <img src="/photo.png" alt="Hajar Zegour" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <div style={{ position: "absolute", bottom: "10px", right: "10px", backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px", padding: "6px 12px", fontSize: "0.75rem", color: "#6366f1" }}>
            Disponible pour un stage
          </div>
        </div>
      </div>
    </section>
  );
}