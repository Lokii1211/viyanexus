"use client";
import Image from "next/image";

const footerLinks = {
  Modules: [
    { label: "WhatsApp Bot", href: "#services" },
    { label: "Voice AI", href: "#services" },
    { label: "AI Chatbot", href: "#services" },
  ],
  Protocol: [
    { label: "Security Schema", href: "#" },
    { label: "Privacy Protocol", href: "#" },
  ],
  Execute: [
    { label: "Direct Link", href: "https://wa.me/919003360494" },
    { label: "nexus@viya.ai", href: "mailto:nexus@viya.ai" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#050505", width: "100%", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "64px 0 48px" }}>
      <div className="container-main">
        <div className="footer-top">
          {/* Brand */}
          <div style={{ maxWidth: "280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", overflow: "hidden", background: "#050505", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Image src="/vn-logo.png" alt="Logo" width={20} height={20} style={{ height: "20px", width: "20px", mixBlendMode: "lighten" }} />
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "-0.01em" }}>VIYA NEXUS</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.02em", color: "#71717a", textTransform: "uppercase", lineHeight: 1.6 }}>
              Precision AI engineering for the sovereign enterprise. Bridging intelligence and execution.
            </p>
          </div>

          {/* Link columns */}
          <div className="footer-links">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h5 style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "24px" }}>{title}</h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {links.map((link, j) => (
                    <li key={j} style={{ marginBottom: "12px" }}>
                      <a href={link.href}
                        target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#71717a", textDecoration: "none", transition: "color 0.3s" }}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "40px", marginTop: "64px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a" }}>© 2026 VIYA NEXUS. SOVEREIGN CONTROL GUARANTEED.</p>
          <div style={{ display: "flex", gap: "32px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "8px", color: "rgba(255,255,255,0.1)" }}>
            <span>// BORN IN INDIA. BUILT FOR THE WORLD.</span>
            <span>// ENCRYPTION ACTIVE</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-top {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        @media (min-width: 768px) {
          .footer-top {
            flex-direction: row;
            justify-content: space-between;
            gap: 64px;
          }
          .footer-links {
            grid-template-columns: repeat(3, 1fr);
            gap: 64px;
          }
        }
      `}</style>
    </footer>
  );
}
