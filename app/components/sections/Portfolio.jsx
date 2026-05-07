"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20see%20more%20case%20studies";

const projects = [
  {
    tag: "RESTAURANT", name: "Chennai Restaurant Chain",
    img: "/portfolio/restaurant.png",
    desc: "Full WhatsApp automation — menu browsing, order intake, reservations & promos 24/7.",
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
    img: "/portfolio/realestate.png",
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
    img: "/portfolio/fitness.png",
    desc: "Instagram DM bot + WhatsApp AI for course FAQ, lead qualification & enrollment.",
    metrics: [
      { label: "Enrollments", before: "22/mo", after: "31/mo" },
      { label: "Time Saved", before: "0", after: "2 hrs/day" },
    ],
    stat: { value: "40%", label: "Enrollment Lift" },
    color: "#16A34A",
  },
  {
    tag: "HEALTHCARE", name: "Hyderabad Multi-Clinic",
    img: "/portfolio/healthcare.png",
    desc: "Voice AI receptionist handling calls, appointment booking & prescription refills across 3 branches.",
    metrics: [
      { label: "Missed Calls", before: "35%", after: "2%" },
      { label: "Staff Hours", before: "8 hrs/day", after: "1 hr/day" },
    ],
    stat: { value: "96%", label: "Call Resolution" },
    color: "#3B82F6",
  },
  {
    tag: "D2C BRAND", name: "Mumbai Fashion D2C",
    img: "/portfolio/d2c.png",
    desc: "Abandoned cart recovery, order tracking & returns via WhatsApp chatbot.",
    metrics: [
      { label: "Cart Recovery", before: "3%", after: "19%" },
      { label: "Support Tickets", before: "200/day", after: "40/day" },
    ],
    stat: { value: "₹6.8L", label: "Revenue Recovered" },
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
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "56px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">CLIENT RESULTS</span>
          </motion.div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px" }}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="section-title">
              The numbers don&apos;t lie.
            </motion.h2>
            <motion.a initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate"
              style={{
                border: "1px solid rgba(255,255,255,0.12)", color: "white",
                padding: "10px 20px", fontFamily: "var(--font-mono)", fontSize: "11px",
                textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "8px",
                transition: "all 0.3s",
              }}>
              View All Cases <ArrowRight size={12} />
            </motion.a>
          </div>
        </div>

        {/* Projects Grid with Images */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "20px" }}>
          {projects.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              style={{
                background: "#0F1219",
                borderTop: `2px solid ${p.color}22`,
                border: "1px solid rgba(255,255,255,0.04)",
                borderTopColor: `${p.color}33`,
                borderTopWidth: "2px",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              className="portfolio-card"
            >
              {/* Image */}
              <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden" }}>
                <Image
                  src={p.img} alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover", opacity: 0.85 }}
                />
                {/* Tag overlay */}
                <div style={{ position: "absolute", top: "12px", left: "12px", zIndex: 2 }}>
                  <span style={{
                    background: `${p.color}CC`, color: "#fff",
                    padding: "4px 10px", fontSize: "8px", fontFamily: "var(--font-mono)",
                    fontWeight: 700, letterSpacing: "0.12em", borderRadius: "2px",
                  }}>{p.tag}</span>
                </div>
                {/* Stat overlay */}
                <div style={{ position: "absolute", bottom: "12px", right: "12px", zIndex: 2, textAlign: "right" }}>
                  <div style={{
                    background: "rgba(6,8,13,0.85)", backdropFilter: "blur(8px)",
                    padding: "8px 12px", borderRadius: "4px",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <div style={{ color: "#E8B84B", fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, lineHeight: 1 }}>{p.stat.value}</div>
                    <div style={{ fontSize: "7px", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px" }}>{p.stat.label}</div>
                  </div>
                </div>
              </div>

              {/* Content — BELOW image, no overlay */}
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "16px", fontFamily: "var(--font-display)", fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "6px" }}>{p.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", lineHeight: 1.6, marginBottom: "14px" }}>{p.desc}</p>

                {/* Metrics */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                  {p.metrics.map((m, j) => (
                    <div key={j} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", padding: "8px 10px", flex: "1 1 auto", minWidth: "70px" }}>
                      <span style={{ display: "block", fontSize: "7px", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3px" }}>{m.label}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <span style={{ fontSize: "9px", color: "rgba(248,113,113,0.6)", textDecoration: "line-through" }}>{m.before}</span>
                        <TrendingUp size={8} style={{ color: p.color }} />
                        <span style={{ fontSize: "12px", fontWeight: 700, color: "#E8B84B" }}>{m.after}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button with animation */}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="cta-btn-animate portfolio-cta"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                    width: "100%", padding: "10px",
                    background: `${p.color}15`, border: `1px solid ${p.color}30`,
                    fontFamily: "var(--font-mono)", fontSize: "10px",
                    textTransform: "uppercase", letterSpacing: "0.12em",
                    color: p.color, textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}>
                  Get Similar Results <ArrowRight size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
        .portfolio-cta:hover {
          background: rgba(201,145,10,0.2) !important;
          border-color: rgba(201,145,10,0.5) !important;
          color: #E8B84B !important;
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}
