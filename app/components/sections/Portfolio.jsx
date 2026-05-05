"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20see%20more%20case%20studies";

const projects = [
  {
    tag: "RESTAURANT", name: "Chennai Restaurant Chain", desc: "Full WhatsApp automation for a 4-location chain — menu browsing, order intake, reservations, and promos 24/7.",
    image: "/portfolio/menubot.png",
    metrics: [
      { label: "Response Time", before: "45 min", after: "4 sec" },
      { label: "Manual Replies", before: "180+/day", after: "12/day" },
      { label: "Revenue Impact", before: "—", after: "+₹4.2L/mo" },
    ],
    stat: { value: "94%", label: "Fewer Manual Replies" }, wide: true,
  },
  {
    tag: "REAL ESTATE", name: "Coimbatore Real Estate", desc: "Landing page + WhatsApp pipeline. Instant lead capture, auto follow-up, site-visit booking.",
    image: "/portfolio/leadflow.png",
    metrics: [
      { label: "Lead Response", before: "8 hours", after: "2 min" },
      { label: "Bookings/Mo", before: "18", after: "42" },
    ],
    stat: { value: "2.3x", label: "More Closings" }, wide: false,
  },
  {
    tag: "COACHING", name: "Bangalore Fitness Coach", desc: "Instagram DM bot + WhatsApp AI for course FAQ, lead qualification, and enrollment.",
    image: "/portfolio/coachbot.png",
    metrics: [
      { label: "Enrollments", before: "22/mo", after: "31/mo" },
      { label: "Time Saved", before: "0", after: "2 hrs/day" },
    ],
    stat: { value: "40%", label: "Enrollment Lift" }, wide: false,
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
            href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline cta-btn-animate" style={{ fontSize: "13px" }}>
            View All Cases <ArrowRight size={14} />
          </motion.a>
        </div>

        {/* Projects Grid — text BELOW images */}
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className={p.wide ? "portfolio-card-wide" : "portfolio-card"}
              style={{ background: "#0F1219", borderTop: "1px solid rgba(201,145,10,0.15)", borderLeft: "1px solid rgba(201,145,10,0.08)", borderRight: "1px solid rgba(201,145,10,0.08)", borderBottom: "1px solid rgba(201,145,10,0.08)", borderRadius: "2px", overflow: "hidden" }}>

              {/* Image Section */}
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <Image src={p.image} alt={`${p.name} case study`} fill sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ objectFit: "cover", filter: "grayscale(0.5) brightness(0.7)" }} />
                {/* Stat Badge */}
                <div style={{ position: "absolute", top: "16px", right: "16px", textAlign: "right", background: "rgba(6,8,13,0.8)", backdropFilter: "blur(8px)", padding: "12px 16px" }}>
                  <div style={{ color: "#E8B84B", fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 900, lineHeight: 1 }}>{p.stat.value}</div>
                  <div style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "4px" }}>{p.stat.label}</div>
                </div>
                {/* Tag */}
                <div style={{ position: "absolute", bottom: "16px", left: "16px" }}>
                  <span style={{ background: "rgba(201,145,10,0.2)", color: "#E8B84B", padding: "4px 12px", fontSize: "10px", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.12em" }}>{p.tag}</span>
                </div>
              </div>

              {/* Text Content — BELOW image */}
              <div style={{ padding: "28px" }}>
                <h3 style={{ fontSize: "20px", fontFamily: "var(--font-display)", fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "8px" }}>{p.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.6, marginBottom: "20px" }}>{p.desc}</p>

                {/* Metrics Row */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {p.metrics.map((m, j) => (
                    <div key={j} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", padding: "10px 14px", minWidth: "90px" }}>
                      <span style={{ display: "block", fontSize: "9px", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>{m.label}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontSize: "11px", color: "rgba(248,113,113,0.7)", textDecoration: "line-through" }}>{m.before}</span>
                        <ArrowRight size={9} style={{ color: "#C9910A" }} />
                        <span style={{ fontSize: "13px", fontWeight: 700, color: "#E8B84B" }}>{m.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
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
          gap: 24px;
        }
        @media (min-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .portfolio-card-wide {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  );
}
