"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import PhoneMockup from "../ui/PhoneMockup";
import HeroMesh from "../ui/HeroMesh";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20book%20a%20free%20strategy%20call";

/* Robust CountUp: starts immediately, has 2s fallback, works with/without IntersectionObserver */
function HeroCountUp({ target, suffix = "" }) {
  const [value, setValue] = useState(target); // SSR: render final value immediately
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Reset to 0 then animate up (client-side only)
    setValue(0);
    let frame;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setValue(target);
        setHasAnimated(true);
      }
    };

    // Small delay for visual effect, then animate
    const timer = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, 600);

    // Fallback: snap to final value after 3s no matter what
    const fallback = setTimeout(() => {
      if (!hasAnimated) setValue(target);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
      cancelAnimationFrame(frame);
    };
  }, [target]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{value}{suffix}</>;
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={ref} style={{
      position: "relative", display: "flex", alignItems: "center",
      overflow: "hidden", paddingTop: "100px", paddingBottom: "80px",
      minHeight: "auto",
    }}>
      <HeroMesh />

      {/* Floating particles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div key={i}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
            style={{
              position: "absolute", width: "3px", height: "3px", borderRadius: "50%",
              background: "#C9910A",
              top: `${20 + i * 12}%`, left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="container-main">
        <div className="hero-grid" style={{ display: "grid", gap: "40px", alignItems: "center", position: "relative", zIndex: 10 }}>
          {/* LEFT — Copy */}
          <div>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ marginBottom: "20px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(201,145,10,0.08)", border: "1px solid rgba(201,145,10,0.15)",
                padding: "6px 16px", fontFamily: "var(--font-mono)", fontSize: "10px",
                color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.12em",
              }}>
                India&apos;s Premium AI Automation Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(36px, 6vw, 68px)", lineHeight: 1.05,
                letterSpacing: "-0.03em", color: "white", marginBottom: "8px",
              }}>
              Your Business,
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(36px, 6vw, 68px)", lineHeight: 1.05,
                letterSpacing: "-0.03em", marginBottom: "24px",
              }}>
              <span className="gradient-text">Runs Itself.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              style={{
                color: "rgba(255,255,255,0.55)", fontSize: "clamp(14px, 1.8vw, 18px)",
                lineHeight: 1.8, maxWidth: "480px", marginBottom: "14px",
              }}>
              We deploy elite <strong style={{ color: "rgba(255,255,255,0.85)" }}>WhatsApp automation</strong> and{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>AI voice agents</strong> that handle your sales, support, and operations — while you sleep.
            </motion.p>

            {/* Trust bullets */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
              style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "28px" }}>
              {["Go live in 7 days, not 7 months", "Zero upfront cost — pay only for results", "24/7 AI that never calls in sick"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={13} style={{ color: "#16A34A", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em" }}>{t}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "32px" }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate cta-pulse"
                style={{
                  background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#422d00",
                  padding: "14px 28px", fontFamily: "var(--font-mono)",
                  textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px",
                  fontWeight: 700, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  boxShadow: "0 4px 20px rgba(201,145,10,0.3)",
                }}>
                Book Free Strategy Call <ArrowRight size={14} />
              </a>
              <a href="#portfolio"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-mono)",
                  fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em",
                  textDecoration: "none", padding: "14px 16px",
                }}>
                <Play size={11} fill="rgba(255,255,255,0.3)" /> See Results
              </a>
            </motion.div>

            {/* Stats — with robust count-up + noscript fallback via data attrs */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {[
                { target: 50, prefix: "₹", suffix: "L+", label: "Revenue Generated" },
                { target: 30, prefix: "", suffix: "+", label: "Businesses Automated" },
                { val: "7-Day", label: "Delivery" },
              ].map((s, i) => (
                <div key={i} data-stat-final={s.val || `${s.prefix}${s.target}${s.suffix}`}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 900, color: i === 0 ? "#E8B84B" : "white" }}>
                    {s.val ? s.val : <>{s.prefix}<HeroCountUp target={s.target} suffix={s.suffix} /></>}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-phone-area"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .hero-grid { grid-template-columns: 1fr; }
        .hero-phone-area { display: none !important; }
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 320px; }
          .hero-phone-area { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
