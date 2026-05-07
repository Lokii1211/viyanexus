"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, AlertTriangle, TrendingDown, Ban, PhoneOff, UserX } from "lucide-react";

const pains = [
  {
    icon: Clock, title: "Still Replying Manually?",
    desc: "Your team spends 4+ hours daily copy-pasting the same WhatsApp replies. That's ₹25K/month wasted on repetitive tasks.",
    stat: "68%", statLabel: "of Indian SMEs lose leads to slow response",
    color: "#EF4444",
  },
  {
    icon: PhoneOff, title: "Missing Calls After Hours?",
    desc: "Every missed call at 10pm is a lost customer. Your competitors with AI voice agents capture them while you sleep.",
    stat: "35%", statLabel: "of business calls go unanswered",
    color: "#F97316",
  },
  {
    icon: TrendingDown, title: "Leads Going Cold?",
    desc: "That enquiry from 3 hours ago? They've already bought from your competitor who replied in 4 seconds.",
    stat: "78%", statLabel: "of customers buy from first responder",
    color: "#EAB308",
  },
  {
    icon: UserX, title: "Staff Burnout & Turnover?",
    desc: "Your best people are stuck doing robot work. They quit. You hire. They quit again. The cycle never ends.",
    stat: "₹3.5L", statLabel: "avg. cost to replace one employee",
    color: "#A855F7",
  },
  {
    icon: Ban, title: "No Time to Scale?",
    desc: "You want to grow but you're trapped in operations. Every new customer means more manual work, not more profit.",
    stat: "92%", statLabel: "of founders feel stuck in operations",
    color: "#3B82F6",
  },
  {
    icon: AlertTriangle, title: "Competitors Are Automating",
    desc: "While you read this, your competitors are deploying AI. In 6 months, manual businesses won't be able to compete.",
    stat: "5x", statLabel: "faster growth for AI-first businesses",
    color: "#14B8A6",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-pad" style={{ background: "#06080D", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Subtle red gradient */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(239,68,68,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label" style={{ color: "#EF4444" }}>⚠ THE PROBLEM</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="section-title" style={{ marginBottom: "16px" }}>
            Sound Familiar?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="section-sub" style={{ margin: "0 auto" }}>
            If you&apos;re nodding at even one of these, you&apos;re leaving <strong style={{ color: "#EF4444" }}>₹2-5 Lakhs on the table every month.</strong>
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "16px" }}>
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="pain-card"
                style={{
                  background: "#0A0C12",
                  border: "1px solid rgba(255,255,255,0.04)",
                  padding: "28px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  cursor: "default",
                }}
              >
                {/* Hover glow */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: p.color, opacity: 0.3, transition: "opacity 0.3s" }} className="pain-glow" />

                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "12px" }}>
                  <div style={{
                    width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
                    background: `${p.color}10`, border: `1px solid ${p.color}20`, flexShrink: 0,
                  }}>
                    <Icon size={16} style={{ color: p.color }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "white", lineHeight: 1.3 }}>{p.title}</h3>
                </div>

                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>{p.desc}</p>

                {/* Stat chip */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", background: `${p.color}08`, border: `1px solid ${p.color}15` }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 900, color: p.color }}>{p.stat}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1.3 }}>{p.statLabel}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .pain-card:hover {
          border-color: rgba(255,255,255,0.1) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }
        .pain-card:hover .pain-glow {
          opacity: 0.8 !important;
        }
      `}</style>
    </section>
  );
}
