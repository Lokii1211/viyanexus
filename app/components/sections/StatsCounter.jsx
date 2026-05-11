"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 1.2, prefix: "₹", suffix: "Cr+", label: "Revenue unlocked for clients", sub: "Across automations, faster conversions" },
  { value: 94, prefix: "", suffix: "%", label: "Reduction in manual replies", sub: "Clients reclaim 3+ hours daily" },
  { value: 7, prefix: "", suffix: " Days", label: "Average delivery time", sub: "From payment to live automation" },
  { value: 30, prefix: "", suffix: "+", label: "Businesses transformed", sub: "Restaurants, real estate, coaching, D2C" },
];

/* Robust CountUp: SSR renders final value, client animates with fallback */
function CountUp({ target, prefix, suffix, inView }) {
  const [count, setCount] = useState(target); // SSR: show final value
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Client: reset to 0, then animate
    if (!hasAnimatedRef.current) {
      setCount(0);
    }
  }, []);

  useEffect(() => {
    if (!inView || hasAnimatedRef.current) return;

    let frame;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(target < 10 ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
        hasAnimatedRef.current = true;
      }
    };

    frame = requestAnimationFrame(animate);

    // Fallback: force final value after 3s
    const fallback = setTimeout(() => {
      if (!hasAnimatedRef.current) {
        setCount(target);
        hasAnimatedRef.current = true;
      }
    }, 3000);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(fallback);
    };
  }, [inView, target]);

  return <>{prefix}{count}{suffix}</>;
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section style={{ position: "relative", padding: "80px 0", background: "#06080D", overflow: "hidden" }} ref={ref}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,145,10,0.2), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,145,10,0.2), transparent)" }} />

      <div className="container-main">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ textAlign: "center" }}
              data-stat-final={`${stat.prefix}${stat.value}${stat.suffix}`}>
              <span style={{ display: "block", fontSize: "clamp(40px, 5vw, 64px)", fontFamily: "var(--font-display)", fontWeight: 700, color: "#E8B84B", lineHeight: 1, marginBottom: "12px" }}>
                <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={isInView} />
              </span>
              <span style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#F0EDE8", marginBottom: "4px" }}>{stat.label}</span>
              <span style={{ display: "block", fontSize: "11px", color: "#4A4845", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        @media (min-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); gap: 48px; }
        }
      `}</style>
    </section>
  );
}
