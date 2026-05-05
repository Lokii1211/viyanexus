"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20see%20more%20case%20studies";

const projects = [
  {
    tag: "RESTAURANT", name: "Chennai Restaurant Chain",
    desc: "Full WhatsApp automation for a 4-location chain — menu browsing, order intake, reservations, and promos 24/7.",
    metrics: [
      { label: "Response Time", before: "45 min", after: "4 sec" },
      { label: "Manual Replies", before: "180+/day", after: "12/day" },
      { label: "Revenue Impact", before: "—", after: "+₹4.2L/mo" },
    ],
    stat: { value: "94%", label: "Fewer Manual Replies" },
    color: "#C9910A",
  },
  {
    tag: "REAL ESTATE", name: "Coimbatore Real Estate",
    desc: "Landing page + WhatsApp pipeline. Instant lead capture, auto follow-up, site-visit booking.",
    metrics: [
      { label: "Lead Response", before: "8 hours", after: "2 min" },
      { label: "Bookings/Mo", before: "18", after: "42" },
    ],
    stat: { value: "2.3x", label: "More Closings" },
    color: "#8A9BAD",
  },
  {
    tag: "FITNESS", name: "Bangalore Fitness Coach",
    desc: "Instagram DM bot + WhatsApp AI for course FAQ, lead qualification, and enrollment.",
    metrics: [
      { label: "Enrollments", before: "22/mo", after: "31/mo" },
      { label: "Time Saved", before: "0", after: "2 hrs/day" },
    ],
    stat: { value: "40%", label: "Enrollment Lift" },
    color: "#16A34A",
  },
  {
    tag: "HEALTHCARE", name: "Hyderabad Multi-Clinic Network",
    desc: "Voice AI receptionist handling inbound calls, appointment booking, prescription refills across 3 branches.",
    metrics: [
      { label: "Missed Calls", before: "35%", after: "2%" },
      { label: "Staff Hours", before: "8 hrs/day", after: "1 hr/day" },
    ],
    stat: { value: "96%", label: "Call Resolution" },
    color: "#3B82F6",
  },
  {
    tag: "D2C BRAND", name: "Mumbai Fashion D2C",
    desc: "Full automation stack — abandoned cart recovery, order tracking, returns via WhatsApp chatbot.",
    metrics: [
      { label: "Cart Recovery", before: "3%", after: "19%" },
      { label: "Support Tickets", before: "200/day", after: "40/day" },
    ],
    stat: { value: "₹6.8L", label: "Monthly Revenue Recovered" },
    color: "#D946EF",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="section-pad" style={{ background: "#0A0C12", position: "relative" }} ref={ref}>
      <div className="container-main">
        {/* Header */}
        <div className="portfolio-header" style={{ marginBottom: "64px" }}>
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              <span className="section-label">CLIENT RESULTS</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="section-title">
              The numbers don&apos;t lie.
            </motion.h2>
          </div>
          <motion.a initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
            href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate"
            style={{ borderTop: "1px solid rgba(255,255,255,0.15)", borderLeft: "1px solid rgba(255,255,255,0.15)", borderRight: "1px solid rgba(255,255,255,0.15)", borderBottom: "1px solid rgba(255,255,255,0.15)", color: "white", padding: "12px 24px", fontFamily: "var(--font-mono)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            View All Cases <ArrowRight size={14} />
          </motion.a>
        </div>

        {/* Projects — NO IMAGE OVERLAY, text fully below */}
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              style={{
                background: "#0F1219",
                borderTop: `2px solid ${p.color}22`,
                borderLeft: "1px solid rgba(255,255,255,0.04)",
                borderRight: "1px solid rgba(255,255,255,0.04)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                overflow: "hidden",
              }}>

              {/* Tag + Stat header */}
              <div style={{ padding: "24px 28px 20px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ background: `${p.color}20`, color: p.color, padding: "4px 12px", fontSize: "9px", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.12em" }}>{p.tag}</span>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "#E8B84B", fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 900, lineHeight: 1 }}>{p.stat.value}</div>
                  <div style={{ fontSize: "8px", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px" }}>{p.stat.label}</div>
                </div>
              </div>

              {/* Title + Description */}
              <div style={{ padding: "0 28px 20px" }}>
                <h3 style={{ fontSize: "18px", fontFamily: "var(--font-display)", fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "8px" }}>{p.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.6 }}>{p.desc}</p>
              </div>

              {/* Metrics Row */}
              <div style={{ padding: "0 28px 24px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {p.metrics.map((m, j) => (
                  <div key={j} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", padding: "10px 14px", flex: "1 1 auto", minWidth: "80px" }}>
                    <span style={{ display: "block", fontSize: "8px", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>{m.label}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <span style={{ fontSize: "10px", color: "rgba(248,113,113,0.6)", textDecoration: "line-through" }}>{m.before}</span>
                      <TrendingUp size={9} style={{ color: p.color }} />
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#E8B84B" }}>{m.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA bar */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "16px 28px" }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: p.color, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Get Similar Results <ArrowRight size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-header {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .portfolio-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .portfolio-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
}
