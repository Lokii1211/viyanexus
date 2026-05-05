"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, CheckCircle } from "lucide-react";

const testimonials = [
  { quote: "Before Viya Nexus, I was personally answering WhatsApp from 7am to 11pm. Now the bot handles 90% of it. I got my evenings back.", name: "Priya R.", role: "Restaurant Owner, Chennai", service: "WhatsApp Automation", stars: 5 },
  { quote: "I was skeptical about AI calling my leads. But the Voice AI they built actually books appointments better than my receptionist.", name: "Karthik M.", role: "Healthcare Clinic, Coimbatore", service: "Voice AI Assistant", stars: 5 },
  { quote: "My real estate inquiries are now automatically sorted — bot handles cold leads, I only talk to serious buyers. Saved me 4 hours a day.", name: "Suresh V.", role: "Real Estate Agency, Bangalore", service: "WhatsApp + Lead Funnel", stars: 4 },
  { quote: "Enrollment conversions went up almost immediately after they set up the Instagram DM automation. The ROI was visible in week one.", name: "Deepa S.", role: "Online Coach, Mumbai", service: "Chatbot + Marketing", stars: 5 },
  { quote: "Honestly I was expecting a junior freelancer experience. Instead they delivered a full system that runs my customer support.", name: "Rajan T.", role: "D2C Brand Founder, Hyderabad", service: "Full Automation Stack", stars: 4 },
  { quote: "They delivered exactly what they promised in 7 days. In 8 years of hiring developers, that has never happened before.", name: "Anitha K.", role: "Education Center, Madurai", service: "Website + WhatsApp", stars: 5 },
  { quote: "The chatbot they built understands Tamil slang better than my own team. My customers love it.", name: "Vikram S.", role: "Retail Chain, Salem", service: "AI Chatbot", stars: 4 },
  { quote: "Our lead response went from 8 hours to 2 minutes. We're closing deals we used to lose every single day.", name: "Meera J.", role: "Property Developer, Pune", service: "WhatsApp Automation", stars: 5 },
];

export default function Testimonials() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animId;
    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += 0.5;
        // Loop back when reaching end
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
          container.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(scroll);
    };
    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <section className="section-pad" style={{ background: "#06080D", position: "relative", overflow: "hidden" }} ref={ref}>
      <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div className="section-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="section-label">WHAT CLIENTS SAY</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title">
            Businesses that stopped working weekends.
          </motion.h2>
        </div>
      </div>

      {/* Horizontally scrolling testimonials — LIVE FEEL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        style={{
          display: "flex", gap: "20px",
          overflowX: "auto", overflowY: "hidden",
          padding: "0 24px 20px",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="glass-panel"
            style={{
              padding: "28px", minWidth: "320px", maxWidth: "360px", flexShrink: 0,
              borderLeft: "3px solid #C9910A",
              transition: "transform 0.3s, border-color 0.5s",
            }}
          >
            {/* Stars — mixed 4/5 */}
            <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={13} style={{
                  color: j < t.stars ? "#E8B84B" : "#27272a",
                  fill: j < t.stars ? "#E8B84B" : "none",
                }} />
              ))}
            </div>

            {/* Quote */}
            <p style={{ color: "rgba(240,237,232,0.8)", fontSize: "13px", fontStyle: "italic", lineHeight: 1.7, marginBottom: "20px", fontFamily: "var(--font-body)" }}>
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "32px", height: "32px", background: "rgba(201,145,10,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E8B84B", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", borderRadius: "50%" }}>
                {t.name.charAt(0)}
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "#F0EDE8" }}>{t.name}</p>
                <p style={{ fontSize: "9px", color: "#4A4845", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.role}</p>
              </div>
            </div>

            {/* Service tag */}
            <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
              <CheckCircle size={9} style={{ color: "#16A34A" }} />
              <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "#C9910A", letterSpacing: "0.06em" }}>Verified — {t.service}</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Social Proof Counter */}
      <div className="container-main">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          style={{ textAlign: "center", marginTop: "40px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "#4A4845", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          30+ verified client transformations &nbsp;•&nbsp; 4.8/5 average rating &nbsp;•&nbsp; 100% on-time delivery
        </motion.div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
