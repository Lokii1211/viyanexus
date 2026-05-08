"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, TrendingUp, Quote } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20see%20more%20case%20studies";

const projects = [
  {
    tag: "RESTAURANT",
    name: "Chennai Restaurant Chain",
    desc: "Full WhatsApp automation — menu browsing, order intake, reservations & promos 24/7.",
    quote: "We went from 180 manual replies a day to just 12. The bot handles everything now.",
    quoteName: "Karthik R., Founder",
    metrics: [
      { label: "Manual Replies", before: "180+/day", after: "12/day" },
      { label: "Response Time", before: "45 min", after: "4 sec" },
      { label: "Revenue Impact", before: "—", after: "+₹4.2L/mo" },
    ],
    hero: { value: "94%", label: "Fewer Manual Replies" },
    gradient: "linear-gradient(135deg, #C9910A22, #8B600011)",
    accent: "#C9910A",
  },
  {
    tag: "REAL ESTATE",
    name: "Coimbatore Real Estate",
    desc: "Landing page + WhatsApp pipeline. Instant lead capture, auto follow-up, site-visit booking.",
    quote: "Our bookings doubled. Leads get a reply in 2 minutes now instead of 8 hours.",
    quoteName: "Priya S., Director",
    metrics: [
      { label: "Lead Response", before: "8 hours", after: "2 min" },
      { label: "Bookings/Mo", before: "18", after: "42" },
    ],
    hero: { value: "2.3×", label: "More Closings" },
    gradient: "linear-gradient(135deg, #3B82F622, #1E40AF11)",
    accent: "#3B82F6",
  },
  {
    tag: "FITNESS",
    name: "Bangalore Fitness Coach",
    desc: "Instagram DM bot + WhatsApp AI for course FAQ, lead qualification & enrollment.",
    quote: "I save 2 hours every day and my enrollments jumped 40% in the first month.",
    quoteName: "Arjun M., Coach",
    metrics: [
      { label: "Enrollments", before: "22/mo", after: "31/mo" },
      { label: "Time Saved", before: "0", after: "2 hrs/day" },
    ],
    hero: { value: "40%", label: "Enrollment Lift" },
    gradient: "linear-gradient(135deg, #16A34A22, #15803D11)",
    accent: "#16A34A",
  },
  {
    tag: "HEALTHCARE",
    name: "Hyderabad Multi-Clinic",
    desc: "Voice AI receptionist handling calls, appointment booking & prescription refills across 3 branches.",
    quote: "We were missing 35% of calls. Now our AI handles 96% of them perfectly.",
    quoteName: "Dr. Meena K., CMO",
    metrics: [
      { label: "Missed Calls", before: "35%", after: "2%" },
      { label: "Staff Hours", before: "8 hrs/day", after: "1 hr/day" },
    ],
    hero: { value: "96%", label: "Call Resolution" },
    gradient: "linear-gradient(135deg, #A855F722, #7C3AED11)",
    accent: "#A855F7",
  },
  {
    tag: "D2C BRAND",
    name: "Mumbai Fashion D2C",
    desc: "Abandoned cart recovery, order tracking & returns via WhatsApp chatbot.",
    quote: "We recovered ₹6.8L in abandoned carts in the first quarter alone.",
    quoteName: "Sneha T., CEO",
    metrics: [
      { label: "Cart Recovery", before: "3%", after: "19%" },
      { label: "Support Tickets", before: "200/day", after: "40/day" },
    ],
    hero: { value: "₹6.8L", label: "Revenue Recovered" },
    gradient: "linear-gradient(135deg, #D946EF22, #C026D311)",
    accent: "#D946EF",
  },
];

/* Animated number */
function AnimatedStat({ value, color, isInView }) {
  const numMatch = value.match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const prefix = value.slice(0, value.indexOf(numMatch?.[0] || ""));
  const suffix = value.slice((numMatch?.index || 0) + (numMatch?.[0]?.length || 0));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame;
    const duration = 1500;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * num);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, num]);

  return (
    <span style={{ fontFamily: "var(--font-display)", fontSize: "48px", fontWeight: 900, color, lineHeight: 1 }}>
      {prefix}{num % 1 === 0 ? Math.floor(current) : current.toFixed(1)}{suffix}
    </span>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="portfolio" className="section-pad" style={{ background: "#0A0C12", position: "relative" }} ref={ref}>
      <div className="container-main">
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">CLIENT RESULTS</span>
          </motion.div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
              The numbers don&apos;t lie.
            </motion.h2>
            <motion.a initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn-animate"
              style={{
                border: "1px solid rgba(255,255,255,0.12)", color: "white",
                padding: "10px 20px", fontFamily: "var(--font-mono)", fontSize: "10px",
                textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "6px",
              }}>
              View All Cases <ArrowRight size={11} />
            </motion.a>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "16px" }}>
          {projects.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="portfolio-card"
              style={{
                background: "#0F1219",
                border: "1px solid rgba(255,255,255,0.04)",
                overflow: "hidden",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
            >
              {/* Hero stat area with gradient */}
              <div style={{
                background: p.gradient,
                padding: "28px 24px 20px",
                borderBottom: `1px solid ${p.accent}15`,
                position: "relative", overflow: "hidden",
              }}>
                {/* Tag */}
                <span style={{
                  position: "absolute", top: "12px", right: "12px",
                  background: `${p.accent}20`, border: `1px solid ${p.accent}30`,
                  padding: "3px 8px", fontSize: "7px", fontFamily: "var(--font-mono)",
                  fontWeight: 700, letterSpacing: "0.12em", color: p.accent,
                }}>{p.tag}</span>

                {/* Big animated number */}
                <AnimatedStat value={p.hero.value} color={p.accent} isInView={isInView} />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "4px" }}>{p.hero.label}</div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px 24px" }}>
                <h3 style={{ fontSize: "16px", fontFamily: "var(--font-display)", fontWeight: 700, color: "white", marginBottom: "6px" }}>{p.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", lineHeight: 1.6, marginBottom: "14px" }}>{p.desc}</p>

                {/* Quote */}
                <div style={{
                  padding: "12px", marginBottom: "14px",
                  background: "rgba(255,255,255,0.02)", borderLeft: `2px solid ${p.accent}40`,
                }}>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, fontStyle: "italic" }}>&ldquo;{p.quote}&rdquo;</p>
                  <p style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: p.accent, marginTop: "4px", letterSpacing: "0.04em" }}>— {p.quoteName}</p>
                </div>

                {/* Metrics */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                  {p.metrics.map((m, j) => (
                    <div key={j} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", padding: "6px 10px", flex: "1 1 auto", minWidth: "80px" }}>
                      <span style={{ display: "block", fontSize: "7px", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>{m.label}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <span style={{ fontSize: "9px", color: "rgba(248,113,113,0.5)", textDecoration: "line-through" }}>{m.before}</span>
                        <TrendingUp size={8} style={{ color: p.accent }} />
                        <span style={{ fontSize: "12px", fontWeight: 700, color: "#E8B84B" }}>{m.after}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="cta-btn-animate"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                    width: "100%", padding: "10px",
                    background: `${p.accent}10`, border: `1px solid ${p.accent}25`,
                    fontFamily: "var(--font-mono)", fontSize: "10px",
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: p.accent, textDecoration: "none",
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
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.4);
        }
      `}</style>
    </section>
  );
}
