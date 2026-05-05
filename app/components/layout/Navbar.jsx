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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: "rgba(10,10,10,0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "70px" }}>
          {/* Logo */}
          <a href="#" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", position: "relative", zIndex: 110 }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%", overflow: "hidden",
              background: "#111318", display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, border: "1px solid rgba(201,145,10,0.25)",
            }}>
              <Image src="/vn-logo.png" alt="Viya Nexus Logo" width={36} height={36}
                style={{ width: "36px", height: "36px", objectFit: "cover", mixBlendMode: "screen" }} loading="eager" />
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, letterSpacing: "-0.01em", color: "#C9910A" }}>VIYA NEXUS</span>
          </a>

          {/* Desktop Links */}
          <div className="nav-desktop">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                style={{
                  fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.15em",
                  fontSize: "11px", textDecoration: "none", color: "rgba(255,255,255,0.6)",
                  transition: "color 0.3s",
                }}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="nav-cta cta-btn-animate cta-pulse"
            style={{ background: "#C9910A", color: "#422d00", padding: "10px 24px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "11px", fontWeight: 700, textDecoration: "none" }}>
            Book Free Call
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile-btn"
            style={{ color: "#C9910A", padding: "8px", background: "none", border: "none", cursor: "pointer", position: "relative", zIndex: 110 }}
            aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Overlay — completely separate from nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 105,
              background: "#06080D",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06 }}
                style={{
                  fontSize: "22px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  padding: "18px 40px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  width: "100%",
                  textAlign: "center",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4 }}
              style={{ width: "120px", height: "1px", background: "rgba(201,145,10,0.3)", margin: "12px 0 24px" }}
            />

            {/* CTA */}
            <motion.a
              href={WA_LINK} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              onClick={() => setMobileOpen(false)}
              className="cta-btn-animate cta-pulse"
              style={{
                background: "#C9910A", color: "#422d00",
                padding: "14px 40px",
                fontFamily: "var(--font-mono)", textTransform: "uppercase",
                letterSpacing: "0.12em", fontSize: "13px", fontWeight: 700,
                textDecoration: "none", display: "flex", alignItems: "center", gap: "8px",
              }}
            >
              Book Free Call <ArrowRight size={14} />
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
    </>
  );
}
