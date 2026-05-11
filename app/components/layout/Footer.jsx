"use client";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "WhatsApp Automation", href: "#services" },
    { label: "Voice AI Agent", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
  ],
  Company: [
    { label: "Case Studies", href: "#portfolio" },
    { label: "How It Works", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],
  Contact: [
    { label: "WhatsApp Us", href: "https://wa.me/919003360494" },
    { label: "nexus@viya.ai", href: "mailto:nexus@viya.ai" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#050505", width: "100%", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "64px 0 48px" }}>
      <div className="container-main">
        <div className="footer-top">
          {/* Brand */}
          <div style={{ maxWidth: "300px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", overflow: "hidden", background: "#111318", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(201,145,10,0.2)" }}>
                <Image src="/vn-logo.png" alt="Viya Nexus Logo" width={32} height={32} style={{ width: "32px", height: "32px", objectFit: "cover", mixBlendMode: "screen" }} />
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "-0.01em" }}>VIYA NEXUS</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.02em", color: "#71717a", lineHeight: 1.8 }}>
              India&apos;s premium AI automation agency. We build WhatsApp bots, voice AI agents, and growth systems for businesses that are serious about scaling.
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
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a" }}>© 2026 VIYA NEXUS. 30-DAY SUPPORT GUARANTEED.</p>
          <div style={{ display: "flex", gap: "32px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "8px", color: "rgba(255,255,255,0.1)" }}>
            <span>// BORN IN INDIA. BUILT FOR THE WORLD.</span>
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
        a:hover { color: #C9910A !important; }
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
