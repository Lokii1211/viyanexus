"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Clock, Users, HeadphonesIcon, IndianRupee, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20book%20a%20free%20strategy%20call";

const reasons = [
  {
    icon: Zap, title: "7-Day Delivery",
    desc: "Most agencies take 3-6 months. We go live in 7 days because we've built the same systems 30+ times. Your time is money — we don't waste it.",
    highlight: "3x faster than competitors",
  },
  {
    icon: IndianRupee, title: "ROI Guarantee",
    desc: "If your automation doesn't save at least 10 hours/week within 30 days, we'll rebuild it free. We only win when you win.",
    highlight: "Zero-risk investment",
  },
  {
    icon: Shield, title: "India-First Engineering",
    desc: "Built by engineers who understand Indian business — UPI, WhatsApp Business API, regional languages, GST invoicing. Not generic global templates.",
    highlight: "Made for Indian SMEs",
  },
  {
    icon: HeadphonesIcon, title: "Dedicated Support",
    desc: "Not a chatbot for your chatbot. A real human on WhatsApp — your dedicated automation engineer who responds within 2 hours.",
    highlight: "Real humans, real fast",
  },
  {
    icon: Users, title: "We Handle Everything",
    desc: "Strategy, design, development, testing, deployment, training, and monthly optimization. You don't need a tech team. You just need us.",
    highlight: "Full-stack delivery",
  },
  {
    icon: Clock, title: "Monthly Optimization",
    desc: "We don't disappear after delivery. Monthly reviews, performance reports, and continuous improvements based on real conversation data.",
    highlight: "Long-term partnership",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad" style={{ background: "#06080D", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "20%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(201,145,10,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "flex-start" }}>
          {/* Header */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              <span className="section-label">WHY VIYA NEXUS</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
              className="section-title" style={{ marginBottom: "16px", maxWidth: "560px" }}>
              We&apos;re Not Another <span className="gradient-text">AI Agency</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
              style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", lineHeight: 1.8, maxWidth: "520px", marginBottom: "24px" }}>
              There are 500 agencies selling &quot;AI automation.&quot; Most deliver a generic chatbot and disappear. 
              We build <strong style={{ color: "white" }}>production-grade AI systems</strong> engineered for Indian businesses.
            </motion.p>
            <motion.a initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate cta-pulse"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#422d00",
                padding: "12px 24px", fontFamily: "var(--font-mono)",
                textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px",
                fontWeight: 700, textDecoration: "none",
                boxShadow: "0 4px 20px rgba(201,145,10,0.2)",
              }}>
              See The Difference <ArrowRight size={12} />
            </motion.a>
          </div>

          {/* Reasons grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "12px" }}>
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="why-card"
                  style={{
                    padding: "24px", background: "#0A0C12",
                    border: "1px solid rgba(255,255,255,0.04)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <Icon size={18} style={{ color: "#C9910A", flexShrink: 0 }} />
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: "white" }}>{r.title}</h3>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", lineHeight: 1.7, marginBottom: "12px" }}>{r.desc}</p>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "9px",
                    color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.1em",
                    padding: "3px 8px", background: "rgba(201,145,10,0.06)",
                  }}>→ {r.highlight}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-card:hover {
          border-color: rgba(201,145,10,0.12) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}
