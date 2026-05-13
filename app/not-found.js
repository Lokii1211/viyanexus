"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20need%20help";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#0A0C12", position: "relative", overflow: "hidden",
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        width: "500px", height: "400px",
        background: "radial-gradient(ellipse, rgba(201,145,10,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.3,
        backgroundImage: "radial-gradient(circle, rgba(201,145,10,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />

      <div style={{ textAlign: "center", position: "relative", zIndex: 2, padding: "24px" }}>
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(100px, 20vw, 180px)",
            fontWeight: 900, lineHeight: 1,
            background: "linear-gradient(135deg, rgba(201,145,10,0.15), rgba(201,145,10,0.04))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", marginBottom: "8px",
          }}
        >
          404
        </motion.div>

        {/* VN Logo circle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            width: "56px", height: "56px", borderRadius: "50%", margin: "0 auto 24px",
            background: "linear-gradient(135deg, #C9910A, #E8B84B)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "18px", fontWeight: 800, color: "#422d00",
            boxShadow: "0 4px 20px rgba(201,145,10,0.3)",
          }}
        >
          VN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 700, color: "white", marginBottom: "12px",
          }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            color: "rgba(255,255,255,0.4)", fontSize: "15px",
            lineHeight: 1.7, maxWidth: "440px", margin: "0 auto 32px",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link href="/" className="cta-btn-animate"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, #C9910A, #E8B84B)", color: "#422d00",
              padding: "12px 24px", fontFamily: "var(--font-mono)",
              textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px",
              fontWeight: 700, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(201,145,10,0.25)",
            }}
          >
            <Home size={13} /> Back to Home
          </Link>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: "1px solid rgba(201,145,10,0.2)", color: "rgba(255,255,255,0.6)",
              padding: "12px 24px", fontFamily: "var(--font-mono)",
              textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px",
              fontWeight: 500, textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            <MessageCircle size={13} /> Chat With Us
          </a>
        </motion.div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            fontFamily: "var(--font-mono)", fontSize: "9px",
            color: "rgba(255,255,255,0.1)", textTransform: "uppercase",
            letterSpacing: "0.15em", marginTop: "48px",
          }}
        >
          VIYA NEXUS — India&apos;s Premium AI Automation Partner
        </motion.p>
      </div>
    </div>
  );
}
