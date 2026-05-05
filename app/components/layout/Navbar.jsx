"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Home, Briefcase, BarChart3, Settings, DollarSign } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#", icon: Home },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "Results", href: "#portfolio", icon: BarChart3 },
  { label: "Process", href: "#process", icon: Settings },
  { label: "Pricing", href: "#pricing", icon: DollarSign },
];

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20explore%20automation%20for%20my%20business";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        className="main-nav"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(6,8,13,0.97)" : "rgba(10,12,18,0.85)",
          backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(201,145,10,0.08)",
          transition: "background 0.4s, box-shadow 0.4s",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "68px" }}>
          {/* Logo */}
          <a href="#" onClick={() => { setActive("Home"); setMobileOpen(false); }}
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", position: "relative", zIndex: 110 }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%", overflow: "hidden",
              background: "#111318", display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, border: "1px solid rgba(201,145,10,0.3)",
              boxShadow: "0 0 12px rgba(201,145,10,0.08)",
            }}>
              <Image src="/vn-logo.png" alt="Viya Nexus Logo" width={36} height={36}
                style={{ width: "36px", height: "36px", objectFit: "cover", mixBlendMode: "screen" }} loading="eager" />
            </div>
            <span className="logo-text" style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, letterSpacing: "-0.01em", color: "#C9910A" }}>VIYA NEXUS</span>
          </a>

          {/* Desktop Links */}
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                onClick={() => setActive(link.label)}
                className={`nav-link ${active === link.label ? "nav-active" : ""}`}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="nav-cta-desktop cta-btn-animate cta-pulse"
            style={{
              background: "#C9910A", color: "#422d00",
              padding: "10px 22px", fontFamily: "var(--font-mono)",
              textTransform: "uppercase", letterSpacing: "0.1em",
              fontSize: "10px", fontWeight: 700, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: "6px",
            }}>
            Book Free Call <ArrowRight size={12} />
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile-toggle"
            style={{
              color: "#C9910A", padding: "8px", background: "none",
              border: "none", cursor: "pointer", position: "relative", zIndex: 110,
            }}
            aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 105, background: "#06080D",
              display: "flex", flexDirection: "column",
              paddingTop: "90px", paddingBottom: "40px",
            }}
          >
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px", gap: "4px" }}>
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => { setActive(link.label); setMobileOpen(false); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.06 }}
                    style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      padding: "16px 0",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <Icon size={18} style={{ color: active === link.label ? "#C9910A" : "rgba(255,255,255,0.25)" }} />
                    <span style={{
                      fontSize: "20px", fontFamily: "var(--font-display)", fontWeight: 600,
                      color: active === link.label ? "#C9910A" : "rgba(255,255,255,0.7)",
                      letterSpacing: "0.02em",
                    }}>
                      {link.label}
                    </span>
                    {active === link.label && (
                      <div style={{ marginLeft: "auto", width: "6px", height: "6px", borderRadius: "50%", background: "#C9910A", boxShadow: "0 0 8px rgba(201,145,10,0.5)" }} />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
              style={{ padding: "0 40px" }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="cta-btn-animate cta-pulse"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  width: "100%", background: "#C9910A", color: "#422d00",
                  padding: "16px", fontFamily: "var(--font-mono)",
                  textTransform: "uppercase", letterSpacing: "0.12em",
                  fontSize: "13px", fontWeight: 700, textDecoration: "none",
                }}>
                Book Free Strategy Call <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Desktop nav links */
        .nav-links-desktop {
          display: none;
          align-items: center;
          gap: 8px;
        }
        .nav-link {
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 10px;
          text-decoration: none;
          color: rgba(255,255,255,0.45);
          padding: 6px 14px;
          border-radius: 4px;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.04);
        }
        .nav-active {
          color: #C9910A !important;
          background: rgba(201,145,10,0.08);
        }
        .nav-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 2px;
          background: #C9910A;
          border-radius: 1px;
        }
        .nav-cta-desktop { display: none; }
        .nav-mobile-toggle { display: block; }

        @media (min-width: 768px) {
          .nav-links-desktop { display: flex; }
          .nav-cta-desktop { display: inline-flex !important; }
          .nav-mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
