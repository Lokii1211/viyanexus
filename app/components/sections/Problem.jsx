"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20a%20free%20automation%20audit";

const painPoints = [
  { tag: "RESTAURANTS", stat: "3 Hours/Day", title: "Answering the same WhatsApp questions", desc: "Menu. Timings. Reservations. Table availability. Your staff is a customer service bot. A real bot costs 1/10th the salary." },
  { tag: "REAL ESTATE", stat: "68% of Leads", title: "Go cold before you reply", desc: "Every lead you respond to after 2 hours has already contacted your competitor. Speed is the only game in real estate." },
  { tag: "COACHING", stat: "50+ DMs/Day", title: "Asking the same enrollment questions", desc: "The student who didn't enroll because you replied 6 hours late enrolled with your competitor 3 hours ago." },
  { tag: "D2C & E-COMMERCE", stat: "₹40,000/month", title: "In ad spend with no follow-up automation", desc: "You're paying Meta to bring traffic. Then manually handling every inquiry. Every unautomated rupee is a wasted rupee." },
  { tag: "HEALTHCARE", stat: "40% No-shows", title: "Because there's no automated reminder", desc: "A WhatsApp reminder sent 24 hours and 2 hours before cuts no-shows by 65%. Your receptionist can't do that for 50 patients." },
  { tag: "EDUCATION", stat: "2 Hours/Day", title: "Answering fee and admission questions manually", desc: "Parents want instant answers at 10pm. Your admin leaves at 6pm. That's the gap automation fills." },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad" style={{ background: "#0A0C12", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "600px", height: "600px", pointerEvents: "none", background: "radial-gradient(circle at 0% 0%, rgba(201,145,10,0.12) 0%, transparent 50%)" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <motion.span initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
            style={{ fontFamily: "var(--font-mono)", color: "#C9910A", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "12px", display: "block", marginBottom: "24px" }}>
            THE REAL COST OF DOING IT MANUALLY
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4.5vw, 56px)", color: "white", lineHeight: 1.1, marginBottom: "24px", maxWidth: "800px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Every hour you spend answering WhatsApp messages is money you&apos;re not making.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 1.5vw, 18px)", color: "#a6b7ca", maxWidth: "600px", lineHeight: 1.7 }}>
            Indian business owners lose ₹15,000–₹80,000 every month to manual processes they don&apos;t even realise are killing their growth.
          </motion.p>
        </div>

        {/* Pain Cards Grid */}
        <div className="pain-grid" style={{ marginBottom: "80px" }}>
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={{
                padding: "32px",
                display: "flex", flexDirection: "column",
                background: "#1e2023",
                border: "1px solid rgba(201,145,10,0.08)",
                borderLeft: "3px solid #c9910a",
                borderRadius: "2px",
                transition: "box-shadow 0.4s",
              }}
            >
              {/* Tag */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <span style={{ fontFamily: "var(--font-display)", color: "#C9910A", fontSize: "28px", fontWeight: 700 }}>{p.stat}</span>
                <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", background: "rgba(201,145,10,0.1)", color: "#C9910A", padding: "4px 8px", textTransform: "uppercase" }}>{p.tag}</span>
              </div>

              {/* Title */}
              <p style={{ fontWeight: 700, color: "white", marginBottom: "12px", fontSize: "15px", lineHeight: 1.4 }}>{p.title}</p>

              {/* Description */}
              <p style={{ fontSize: "14px", color: "#d4c4ae", lineHeight: 1.6 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          style={{ border: "1px solid rgba(201,145,10,0.3)", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", padding: "40px", textAlign: "center" }}
        >
          <p style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "white", fontFamily: "var(--font-display)", fontStyle: "italic", marginBottom: "24px", maxWidth: "600px", margin: "0 auto 24px" }}>
            &ldquo;If any of this felt personal — you&apos;re exactly who we built Viya Nexus for.&rdquo;
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate cta-pulse"
            style={{ background: "#C9910A", color: "#422d00", padding: "14px 28px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            Book a Free Audit <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .pain-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .pain-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .pain-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
}
