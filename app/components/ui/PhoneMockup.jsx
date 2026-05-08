"use client";
import { motion } from "framer-motion";

const messages = [
  { from: "user", text: "Hi, I saw your ad for the premium skincare kit. Is it still available?", time: "10:32 AM" },
  { from: "bot", text: "Hi! 👋 Yes, the Premium Glow Kit is available. It includes:\n\n✨ Vitamin C Serum\n🧴 Hyaluronic Moisturizer\n🌙 Night Repair Cream\n\nWould you like to order?", time: "10:32 AM" },
  { from: "user", text: "What's the price?", time: "10:33 AM" },
  { from: "bot", text: "₹2,499 (MRP ₹3,999) — 38% OFF!\n\nFree shipping + COD available 🚚\n\n⏳ Offer valid for next 2 hours only.\n\nShall I book your order?", time: "10:33 AM" },
  { from: "user", text: "Yes please! COD to Bangalore 560001", time: "10:34 AM" },
  { from: "bot", text: "✅ Order confirmed!\n\n📦 Order #VN-48291\n📍 Bangalore 560001\n💰 ₹2,499 (COD)\n📅 Delivery: 2-3 business days\n\nYou'll receive tracking shortly. Thank you! 🙏", time: "10:34 AM" },
];

export default function PhoneMockup() {
  return (
    <div style={{
      width: "280px", borderRadius: "36px",
      background: "#000000", overflow: "hidden",
      border: "3px solid rgba(255,255,255,0.08)",
      boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 30px rgba(0,0,0,0.3)",
      position: "relative",
    }}>
      {/* Notch */}
      <div style={{
        position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)",
        width: "120px", height: "28px", background: "#000",
        borderRadius: "0 0 18px 18px", zIndex: 30,
      }}>
        <div style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", width: "50px", height: "4px", borderRadius: "2px", background: "#1a1a1a" }} />
      </div>

      {/* Status bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "10px 20px 4px", fontSize: "11px", color: "rgba(255,255,255,0.6)",
        fontFamily: "var(--font-mono)", fontWeight: 600, background: "#111B21",
      }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
          {/* Signal bars */}
          {[6, 8, 10, 12].map((h, i) => (
            <div key={i} style={{ width: "3px", height: `${h}px`, background: "rgba(255,255,255,0.5)", borderRadius: "1px" }} />
          ))}
          <span style={{ fontSize: "9px", marginLeft: "3px" }}>5G</span>
          {/* Battery */}
          <div style={{ width: "18px", height: "9px", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "2px", marginLeft: "4px", position: "relative" }}>
            <div style={{ position: "absolute", inset: "1px", right: "3px", background: "#25D366", borderRadius: "1px" }} />
            <div style={{ position: "absolute", right: "-3px", top: "2px", width: "2px", height: "4px", background: "rgba(255,255,255,0.3)", borderRadius: "0 1px 1px 0" }} />
          </div>
        </div>
      </div>

      {/* WhatsApp header */}
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        padding: "6px 12px 8px",
        background: "#111B21",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        <div style={{
          width: "34px", height: "34px", borderRadius: "50%",
          background: "linear-gradient(135deg, #C9910A, #E8B84B)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "11px", fontWeight: 800, color: "#422d00",
          boxShadow: "0 2px 8px rgba(201,145,10,0.3)",
        }}>VN</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "white", lineHeight: 1.2 }}>Viya Nexus AI</div>
          <div style={{ fontSize: "10px", color: "#25D366", fontFamily: "var(--font-mono)", fontWeight: 500 }}>● online</div>
        </div>
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8"><path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </div>
      </div>

      {/* Chat area */}
      <div style={{
        background: "#0B141A",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.008'%3E%3Crect width='1' height='1' x='20' y='20'/%3E%3C/g%3E%3C/svg%3E")`,
        padding: "10px 8px",
        height: "310px",
        overflowY: "auto",
        display: "flex", flexDirection: "column", gap: "3px",
      }}>
        {/* Date chip */}
        <div style={{ textAlign: "center", marginBottom: "6px" }}>
          <span style={{
            background: "#1D2B36", padding: "3px 10px", borderRadius: "6px",
            fontSize: "9px", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-mono)",
          }}>TODAY</span>
        </div>

        {messages.map((m, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.6, duration: 0.3 }}
            style={{
              maxWidth: "85%",
              alignSelf: m.from === "user" ? "flex-end" : "flex-start",
              background: m.from === "user" ? "#005C4B" : "#1F2C34",
              padding: "6px 8px 2px",
              borderRadius: m.from === "user" ? "8px 2px 8px 8px" : "2px 8px 8px 8px",
              position: "relative",
              boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
            }}>
            {/* Tail */}
            <div style={{
              position: "absolute", top: 0,
              ...(m.from === "user"
                ? { right: "-6px", borderLeft: "6px solid #005C4B", borderBottom: "6px solid transparent" }
                : { left: "-6px", borderRight: "6px solid #1F2C34", borderBottom: "6px solid transparent" }),
              width: 0, height: 0,
              display: i === 0 || messages[i - 1]?.from !== m.from ? "block" : "none",
            }} />
            <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.92)", lineHeight: 1.45, margin: 0, whiteSpace: "pre-line" }}>{m.text}</p>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "3px", marginTop: "1px", paddingBottom: "1px" }}>
              <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.3)" }}>{m.time}</span>
              {m.from === "user" && (
                <svg width="14" height="8" viewBox="0 0 16 11" fill="none">
                  <path d="M1 5.5L4.5 9L11 2" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 5.5L8.5 9L15 2" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          style={{
            alignSelf: "flex-start",
            background: "#1F2C34",
            padding: "10px 14px",
            borderRadius: "2px 8px 8px 8px",
            display: "flex", gap: "4px",
          }}>
          {[0, 1, 2].map(i => (
            <motion.div key={i}
              animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
              style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.4)" }}
            />
          ))}
        </motion.div>
      </div>

      {/* Input bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: "6px",
        padding: "6px 8px",
        background: "#111B21",
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
        <div style={{
          flex: 1, background: "#2A3942", borderRadius: "20px",
          padding: "8px 14px", fontSize: "12px", color: "rgba(255,255,255,0.3)",
          fontFamily: "var(--font-body)",
        }}>
          Type a message
        </div>
        <div style={{
          width: "34px", height: "34px", borderRadius: "50%",
          background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 6px rgba(37,211,102,0.3)",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
        </div>
      </div>

      {/* Home indicator */}
      <div style={{ padding: "6px 0 4px", display: "flex", justifyContent: "center", background: "#111B21" }}>
        <div style={{ width: "100px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.12)" }} />
      </div>
    </div>
  );
}
