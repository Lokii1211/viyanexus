"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20book%20a%20free%20strategy%20call";

const footerLinks = {
  Services: [
    { label: "WhatsApp Automation", href: "/#services" },
    { label: "Voice AI Agent", href: "/#services" },
    { label: "Web Development", href: "/#services" },
    { label: "Digital Marketing", href: "/#services" },
  ],
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Case Studies", href: "/case-studies", isRoute: true },
    { label: "Blog", href: "/blog", isRoute: true },
    { label: "How It Works", href: "/#process" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
  Resources: [
    { label: "WhatsApp Chatbot Guide", href: "/blog/whatsapp-chatbot-automation-india", isRoute: true },
    { label: "Digital Marketing Strategy", href: "/blog/digital-marketing-strategy-small-business-india", isRoute: true },
    { label: "Web Dev Best Practices", href: "/blog/website-development-best-practices-india", isRoute: true },
  ],
  Contact: [
    { label: "WhatsApp Us", href: "https://wa.me/919003360494" },
    { label: "nexus@viya.ai", href: "mailto:nexus@viya.ai" },
    { label: "Chennai, India 🇮🇳", href: null },
  ],
};

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/viyanexus", icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { label: "Instagram", href: "https://instagram.com/viyanexus", icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
  { label: "X", href: "https://x.com/viyanexus", icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
];

export default function Footer() {
  return (
    <footer style={{ background: "#050505", width: "100%", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "64px 0 32px" }}>
      <div className="container-main">
        {/* CTA Banner */}
        <div style={{
          background: "linear-gradient(135deg, rgba(201,145,10,0.08), rgba(201,145,10,0.02))",
          border: "1px solid rgba(201,145,10,0.12)",
          padding: "32px",
          marginBottom: "64px",
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "center",
          gap: "16px",
        }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "white", marginBottom: "4px" }}>
              Ready to automate your business?
            </h3>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Book a free strategy call — no commitment, no BS
            </p>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate"
            style={{
              background: "linear-gradient(135deg, #C9910A, #E8B84B)",
              color: "#422d00", padding: "12px 24px",
              fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
              textDecoration: "none", display: "inline-flex",
              alignItems: "center", gap: "8px",
              boxShadow: "0 4px 20px rgba(201,145,10,0.2)",
            }}>
            Book Free Call <ArrowRight size={13} />
          </a>
        </div>

        <div className="footer-top">
          {/* Brand */}
          <div style={{ maxWidth: "320px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", overflow: "hidden", background: "#111318", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(201,145,10,0.2)" }}>
                <Image src="/vn-logo.png" alt="Viya Nexus Logo" width={32} height={32} style={{ width: "32px", height: "32px", objectFit: "cover", mixBlendMode: "screen" }} />
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600, color: "white", textTransform: "uppercase", letterSpacing: "-0.01em" }}>VIYA NEXUS</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.02em", color: "#71717a", lineHeight: 1.8, marginBottom: "20px" }}>
              India&apos;s premium AI automation agency. We build WhatsApp bots, voice AI agents, and growth systems for businesses that are serious about scaling.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="social-icon"
                  style={{
                    width: "34px", height: "34px", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.3)",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="footer-links">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h5 style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "11px", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>{title}</h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {links.map((link, j) => (
                    <li key={j} style={{ marginBottom: "10px" }}>
                      {link.href ? (
                        link.isRoute ? (
                          <Link href={link.href}
                            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#71717a", textDecoration: "none", transition: "color 0.3s" }}>
                            {link.label}
                          </Link>
                        ) : (
                          <a href={link.href}
                            target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#71717a", textDecoration: "none", transition: "color 0.3s" }}>
                            {link.label}
                          </a>
                        )
                      ) : (
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#71717a" }}>{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "32px", marginTop: "48px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#71717a" }}>© 2026 VIYA NEXUS. ALL RIGHTS RESERVED.</p>
          <div style={{ display: "flex", gap: "24px", fontFamily: "var(--font-mono)", fontSize: "10px" }}>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>Privacy Policy</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>Terms of Service</span>
            <span style={{ color: "rgba(255,255,255,0.08)" }}>// BORN IN INDIA. BUILT FOR THE WORLD.</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-top { display: flex; flex-direction: column; gap: 48px; }
        .footer-links { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
        a:hover { color: #C9910A !important; }
        .social-icon:hover { border-color: rgba(201,145,10,0.3) !important; color: #C9910A !important; background: rgba(201,145,10,0.06) !important; }
        @media (min-width: 768px) {
          .footer-top { flex-direction: row; justify-content: space-between; gap: 64px; }
          .footer-links { grid-template-columns: repeat(4, 1fr); gap: 40px; }
        }
      `}</style>
    </footer>
  );
}
