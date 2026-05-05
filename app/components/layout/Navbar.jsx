"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20explore%20automation%20for%20my%20business";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Services");

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 100, background: "rgba(10,10,10,0.6)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="container-main" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px" }}>
        {/* Logo — NO rectangle box, clean brandable look */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", position: "relative", zIndex: 50 }}>
          <div style={{ width: "42px", height: "42px", borderRadius: "50%", overflow: "hidden", background: "#0A0C12", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1.5px solid rgba(201,145,10,0.35)", boxShadow: "0 0 16px rgba(201,145,10,0.08)", padding: "4px" }}>
            <Image src="/vn-logo.png" alt="Viya Nexus Logo" width={30} height={30}
              style={{ height: "30px", width: "30px", objectFit: "contain", mixBlendMode: "lighten", display: "block" }} loading="eager" />
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, letterSpacing: "-0.01em", color: "#C9910A" }}>VIYA NEXUS</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              onClick={() => setActiveLink(link.label)}
              style={{
                fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "11px", textDecoration: "none", transition: "color 0.3s",
                color: activeLink === link.label ? "#C9910A" : "rgba(255,255,255,0.7)",
                borderBottom: activeLink === link.label ? "1px solid #C9910A" : "none",
                paddingBottom: "4px",
              }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA — with hover animation */}
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="nav-cta cta-btn-animate cta-pulse"
          style={{ background: "#C9910A", color: "#422d00", padding: "10px 24px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "11px", fontWeight: 700, textDecoration: "none" }}>
          Book Free Call
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="nav-mobile-btn"
          style={{ color: "#C9910A", padding: "8px", background: "none", border: "none", cursor: "pointer", position: "relative", zIndex: 50 }}
          aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(6,8,13,0.98)", backdropFilter: "blur(30px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8px" }}>
            {navLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.06 }}
                style={{ fontSize: "32px", fontFamily: "var(--font-display)", fontWeight: 700, color: "rgba(255,255,255,0.6)", textDecoration: "none", padding: "12px 0", transition: "color 0.3s" }}>
                {link.label}
              </motion.a>
            ))}
            <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              onClick={() => setMobileOpen(false)}
              style={{ marginTop: "32px", background: "#C9910A", color: "#422d00", padding: "16px 40px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "14px", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
              Book Free Call <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-desktop { display: none; }
        .nav-cta { display: none; }
        .nav-mobile-btn { display: block; }
        @media (min-width: 768px) {
          .nav-desktop { display: flex; align-items: center; gap: 40px; }
          .nav-cta { display: block; }
          .nav-mobile-btn { display: none; }
        }
      `}</style>
    </motion.nav>
  );
}
