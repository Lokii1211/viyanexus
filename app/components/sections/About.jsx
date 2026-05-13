"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Shield, Rocket, Users, Calendar } from "lucide-react";

const values = [
  { icon: Zap, title: "Speed", desc: "7-day delivery. Not 7 months.", color: "#E8B84B" },
  { icon: Target, title: "Results-First", desc: "We don't bill hours. We deliver outcomes.", color: "#3B82F6" },
  { icon: Shield, title: "Transparency", desc: "Clear pricing. No hidden fees. Ever.", color: "#16A34A" },
];

const stats = [
  { value: "2024", label: "Founded" },
  { value: "30+", label: "Projects Delivered" },
  { value: "₹50L+", label: "Revenue Generated for Clients" },
  { value: "4.9★", label: "Client Rating" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="section-pad" style={{ background: "#0A0C12", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(201,145,10,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">WHO WE ARE</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="section-title" style={{ marginBottom: "16px" }}>
            Built in India. <span className="gradient-text">Built for Growth.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="section-sub" style={{ margin: "0 auto" }}>
            Viya Nexus is a premium AI automation agency born in Chennai. We help Indian businesses replace manual chaos with intelligent systems that work 24/7.
          </motion.p>
        </div>

        {/* Founder + Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: "grid", gap: "32px", marginBottom: "64px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Founder card */}
          <div style={{
            background: "#0F1219",
            border: "1px solid rgba(201,145,10,0.1)",
            padding: "32px",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, #C9910A, #E8B84B)" }} />
            
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%",
                background: "linear-gradient(135deg, #C9910A, #E8B84B)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "18px", fontWeight: 800, color: "#422d00",
                boxShadow: "0 4px 16px rgba(201,145,10,0.3)",
                flexShrink: 0,
              }}>
                VN
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "white", lineHeight: 1.2 }}>
                  Viya Nexus
                </h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Founder & Lead Engineer
                </p>
              </div>
            </div>

            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
              &ldquo;I started Viya Nexus because I saw Indian SMEs drowning in manual work while global companies 
              were automating everything. My mission is simple — bring world-class AI automation to every ambitious 
              Indian business, at a price they can afford, in a timeline that actually makes sense.&rdquo;
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["WhatsApp API Expert", "AI/ML Engineer", "Full-Stack Developer"].map((tag, i) => (
                <span key={i} style={{
                  padding: "4px 12px",
                  background: "rgba(201,145,10,0.06)",
                  border: "1px solid rgba(201,145,10,0.12)",
                  fontFamily: "var(--font-mono)", fontSize: "9px",
                  color: "rgba(255,255,255,0.4)", textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Story */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "16px", lineHeight: 1.2 }}>
              Our Story
            </h3>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.8, marginBottom: "12px" }}>
              We noticed a pattern: Indian businesses were spending <strong style={{ color: "rgba(255,255,255,0.7)" }}>₹2-5 lakhs per month</strong> on 
              manual customer support teams who were still missing leads, dropping calls, and burning out.
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
              So we built a solution — <strong style={{ color: "#E8B84B" }}>deploy in 7 days, not 7 months</strong>. 
              Custom WhatsApp bots, AI voice agents, and conversion-optimized landing pages. 
              All built specifically for Indian market dynamics — UPI, COD, regional languages, and WhatsApp-first culture.
            </p>

            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Rocket size={14} style={{ color: "#C9910A" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Chennai, India 🇮🇳
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Calendar size={14} style={{ color: "#C9910A" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Since 2024
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "16px", marginBottom: "48px" }}>
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{
                  padding: "24px",
                  background: "#0F1219",
                  border: "1px solid rgba(255,255,255,0.04)",
                  display: "flex", alignItems: "flex-start", gap: "14px",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{
                  width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center",
                  background: `${v.color}10`, border: `1px solid ${v.color}25`, flexShrink: 0,
                }}>
                  <Icon size={18} style={{ color: v.color }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, color: "white", marginBottom: "4px" }}>{v.title}</h4>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>{v.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px",
            background: "rgba(255,255,255,0.04)",
          }}
          className="about-stats"
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              background: "#0A0C12",
              padding: "24px 16px",
              textAlign: "center",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 900, color: i === 2 ? "#E8B84B" : "white", marginBottom: "4px" }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .about-grid { grid-template-columns: 1fr; }
        .about-stats { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr; }
          .about-stats { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  );
}
