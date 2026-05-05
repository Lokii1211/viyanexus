"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { num: "01", title: "Industrial Strength", desc: "Redundant, resilient architectures designed for enterprise-grade uptime and mission-critical reliability." },
  { num: "02", title: "System ROI", desc: "We optimize for the bottom line. Every automation trigger is a calculated move toward increased revenue." },
  { num: "03", title: "Unified Command", desc: "Centralized automation logic that bridges the gap between disparate platforms into a single operational stream." },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad" style={{ position: "relative" }} ref={ref}>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "600px", height: "600px", pointerEvents: "none", background: "radial-gradient(circle, rgba(201,145,10,0.1) 0%, transparent 70%)" }} />

      <div className="container-main whyus-layout">
        {/* Left: Visual */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7 }}
          style={{ position: "relative" }} className="whyus-visual">
          <div style={{ position: "absolute", inset: "-40px", background: "rgba(201,145,10,0.05)", filter: "blur(60px)" }} />
          <div style={{ position: "relative", border: "1px solid rgba(255,255,255,0.1)", padding: "8px", background: "#0A0C12" }}>
            <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, #0F1219, #151821)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "80px", height: "80px", background: "rgba(6,8,13,0.8)", border: "1px solid rgba(201,145,10,0.3)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(12px)" }}>
                <span style={{ color: "#C9910A", fontSize: "36px" }}>⛨</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div>
          <motion.span initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
            style={{ fontFamily: "var(--font-mono)", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "12px", display: "block", marginBottom: "16px" }}>
            // Architectural Philosophy
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", color: "white", marginBottom: "48px", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 700 }}>
            Control Through Intelligence
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                style={{ display: "flex", gap: "32px" }}>
                <div style={{ fontFamily: "var(--font-mono)", color: "#C9910A", fontSize: "20px", paddingTop: "4px", flexShrink: 0 }}>{p.num}</div>
                <div>
                  <h4 style={{ fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "12px", fontFamily: "var(--font-mono)", letterSpacing: "-0.01em" }}>{p.title}</h4>
                  <p style={{ color: "#d4c4ae", lineHeight: 1.7, fontSize: "15px" }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .whyus-layout {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .whyus-visual { order: 2; }
        @media (min-width: 768px) {
          .whyus-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
          }
          .whyus-visual { order: 0; }
        }
      `}</style>
    </section>
  );
}
