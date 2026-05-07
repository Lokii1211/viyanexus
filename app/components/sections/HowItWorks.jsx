"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Search, Rocket, BarChart3, ArrowRight, Zap } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20book%20a%20free%20strategy%20call";

const steps = [
  {
    icon: Phone, num: "01", title: "Free Strategy Call",
    desc: "30-minute call. We audit your current workflow, find the bottlenecks, and show you exactly where automation will save time and money.",
    time: "Day 1",
    detail: "No pitch. No pressure. Just clarity.",
  },
  {
    icon: Search, num: "02", title: "Custom Blueprint",
    desc: "We design your automation architecture — which bots, which integrations, which flows. You approve everything before we build.",
    time: "Day 2-3",
    detail: "You see the plan. You own the plan.",
  },
  {
    icon: Rocket, num: "03", title: "We Build & Deploy",
    desc: "Our engineers build your AI agents, test them rigorously, and deploy to your WhatsApp, Instagram, or phone system.",
    time: "Day 4-7",
    detail: "Zero downtime. Zero disruption.",
  },
  {
    icon: BarChart3, num: "04", title: "You Scale Effortlessly",
    desc: "Your AI handles 80% of conversations. You focus on growth. We monitor, optimize, and iterate monthly.",
    time: "Day 7+",
    detail: "We don't disappear after delivery.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-pad" style={{ background: "#0A0C12", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Gold glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(201,145,10,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">HOW IT WORKS</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="section-title" style={{ marginBottom: "16px" }}>
            From Call to Live in 7 Days
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="section-sub" style={{ margin: "0 auto" }}>
            No 3-month timelines. No scope creep. Four steps to a business that runs itself.
          </motion.p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 250px), 1fr))", gap: "0" }}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="step-card"
                style={{
                  padding: "32px 28px",
                  position: "relative",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                {/* Timeline connector */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                  style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                    background: `linear-gradient(to right, transparent, #C9910A, transparent)`,
                    transformOrigin: "left",
                  }}
                />

                {/* Step number */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 900,
                    color: "rgba(201,145,10,0.12)", lineHeight: 1,
                  }}>{s.num}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "9px", color: "#C9910A",
                    textTransform: "uppercase", letterSpacing: "0.12em",
                    padding: "3px 8px", background: "rgba(201,145,10,0.08)",
                    border: "1px solid rgba(201,145,10,0.12)",
                  }}>
                    <Zap size={8} style={{ display: "inline", verticalAlign: "middle" }} /> {s.time}
                  </span>
                </div>

                {/* Icon */}
                <div style={{
                  width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(201,145,10,0.06)", border: "1px solid rgba(201,145,10,0.12)",
                  marginBottom: "16px",
                }}>
                  <Icon size={20} style={{ color: "#C9910A" }} />
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.7, marginBottom: "12px" }}>{s.desc}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(201,145,10,0.6)", letterSpacing: "0.05em" }}>→ {s.detail}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1 }}
          style={{ textAlign: "center", marginTop: "48px" }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate cta-pulse"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#422d00",
              padding: "14px 32px", fontFamily: "var(--font-mono)",
              textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px",
              fontWeight: 700, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(201,145,10,0.25)",
            }}>
            Start Your 7-Day Transformation <ArrowRight size={14} />
          </a>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.2)", marginTop: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Free strategy call • No credit card • Cancel anytime
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .step-card { transition: all 0.3s ease; }
        .step-card:hover { background: rgba(201,145,10,0.02); }
        @media (max-width: 640px) {
          .step-card { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}
