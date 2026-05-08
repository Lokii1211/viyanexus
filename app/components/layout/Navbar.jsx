"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Home, Briefcase, BarChart3, Settings, DollarSign } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home", icon: Home, sectionId: "home" },
  { label: "Services", href: "#services", icon: Briefcase, sectionId: "services" },
  { label: "Results", href: "#portfolio", icon: BarChart3, sectionId: "portfolio" },
  { label: "Process", href: "#process", icon: Settings, sectionId: "process" },
  { label: "Pricing", href: "#pricing", icon: DollarSign, sectionId: "pricing" },
];

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20explore%20automation%20for%20my%20business";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    const scrollPos = window.scrollY + 120;
    const sections = navLinks.map(l => ({
      label: l.label,
      el: document.getElementById(l.sectionId),
    })).filter(s => s.el);

    let currentSection = "Home";
    for (const section of sections) {
      if (section.el.offsetTop <= scrollPos) {
        currentSection = section.label;
      }
    }
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      currentSection = sections[sections.length - 1]?.label || currentSection;
    }
    setActive(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          background: scrolled ? "rgba(6,8,13,0.97)" : "rgba(10,12,18,0.85)",
          backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
          borderBottom: scrolled ? "1px solid rgba(201,145,10,0.08)" : "1px solid rgba(255,255,255,0.03)",
          transition: "all 0.4s ease",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          {/* Logo */}
          <a href="#home" onClick={() => { setActive("Home"); setMobileOpen(false); }}
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: "34px", height: "34px", borderRadius: "50%", overflow: "hidden",
              background: "#111318", display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, border: "1px solid rgba(201,145,10,0.25)",
            }}>
              <Image src="/vn-logo.png" alt="Viya Nexus" width={34} height={34}
                style={{ width: "34px", height: "34px", objectFit: "cover", mixBlendMode: "screen" }} loading="eager" />
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, letterSpacing: "-0.01em", color: "#C9910A" }}>VIYA NEXUS</span>
          </a>

          {/* Desktop Links — subtle underline indicator, no background */}
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                onClick={() => setActive(link.label)}
                style={{
                  fontFamily: "var(--font-mono)", textTransform: "uppercase",
                  letterSpacing: "0.12em", fontSize: "10px", textDecoration: "none",
                  color: active === link.label ? "#C9910A" : "rgba(255,255,255,0.4)",
                  padding: "8px 12px",
                  position: "relative",
                  transition: "color 0.3s ease",
                }}>
                {link.label}
                {/* Animated underline — slides between active links */}
                {active === link.label && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: "absolute", bottom: "-2px", left: "12px", right: "12px",
                      height: "2px", borderRadius: "1px",
                      background: "#C9910A",
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="nav-cta-desktop cta-btn-animate cta-pulse"
            style={{
              background: "#C9910A", color: "#422d00",
              padding: "9px 20px", fontFamily: "var(--font-mono)",
              textTransform: "uppercase", letterSpacing: "0.1em",
              fontSize: "10px", fontWeight: 700, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: "6px",
            }}>
            Book Free Call <ArrowRight size={11} />
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile-toggle"
            style={{ color: "#C9910A", padding: "8px", background: "none", border: "none", cursor: "pointer" }}
            aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 150, background: "#06080D",
              display: "flex", flexDirection: "column",
              paddingTop: "76px", paddingBottom: "40px",
            }}
          >
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px", gap: "4px" }}>
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a key={link.label} href={link.href}
                    onClick={() => { setActive(link.label); setMobileOpen(false); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.06 }}
                    style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      padding: "16px 0", textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}>
                    <Icon size={18} style={{ color: active === link.label ? "#C9910A" : "rgba(255,255,255,0.2)" }} />
                    <span style={{
                      fontSize: "20px", fontFamily: "var(--font-display)", fontWeight: 600,
                      color: active === link.label ? "#C9910A" : "rgba(255,255,255,0.6)",
                    }}>{link.label}</span>
                    {active === link.label && (
                      <div style={{ marginLeft: "auto", width: "6px", height: "6px", borderRadius: "50%", background: "#C9910A", boxShadow: "0 0 8px rgba(201,145,10,0.5)" }} />
                    )}
                  </motion.a>
                );
              })}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
              style={{ padding: "0 40px" }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)} className="cta-btn-animate cta-pulse"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  width: "100%", background: "#C9910A", color: "#422d00",
                  padding: "14px", fontFamily: "var(--font-mono)",
                  textTransform: "uppercase", letterSpacing: "0.12em",
                  fontSize: "12px", fontWeight: 700, textDecoration: "none",
                }}>
                Book Free Strategy Call <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-links-desktop { display: none; align-items: center; gap: 2px; }
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
