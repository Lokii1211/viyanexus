"use client";
import { motion } from "framer-motion";

const messages = [
  { from: "user", text: "Hi, I need a table for 4 this Saturday 7pm", time: "7:12 PM" },
  { from: "bot", text: "Sure! I have 7:00pm and 7:30pm available. Which one?", time: "7:12 PM" },
  { from: "user", text: "7:30 please", time: "7:13 PM" },
  { from: "bot", text: "Done! Table for 4 at 7:30pm Saturday. Confirmation sent to WhatsApp ✓", time: "7:13 PM" },
  { from: "user", text: "Can I also pre-order the weekend special?", time: "7:14 PM" },
];

export default function PhoneMockup() {
  return (
    <div style={{
      width: "280px", borderRadius: "32px",
      background: "#111318", overflow: "hidden",
      border: "2px solid rgba(255,255,255,0.08)",
      boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
      position: "relative",
    }}>
      {/* Status bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "8px 20px 4px", fontSize: "10px", color: "rgba(255,255,255,0.5)",
        fontFamily: "var(--font-mono)",
      }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <div style={{ width: "12px", height: "7px", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "2px", position: "relative" }}>
            <div style={{ position: "absolute", inset: "1px", right: "2px", background: "#16A34A", borderRadius: "1px" }} />
          </div>
        </div>
      </div>

      {/* WhatsApp header */}
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        padding: "8px 14px 10px",
        background: "#1F2C34",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </div>
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%",
          background: "linear-gradient(135deg, #C9910A, #E8B84B)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "12px", fontWeight: 700, color: "#422d00",
        }}>VN</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "white", lineHeight: 1.2 }}>Viya Nexus AI</div>
          <div style={{ fontSize: "9px", color: "#25D366", fontFamily: "var(--font-mono)" }}>● online</div>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        </div>
      </div>

      {/* Chat area — WhatsApp style */}
      <div style={{
        background: "#0B141A",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        padding: "12px 10px",
        minHeight: "280px",
        display: "flex", flexDirection: "column", gap: "4px",
      }}>
        {messages.map((m, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.5, duration: 0.3 }}
            style={{
              maxWidth: "82%",
              alignSelf: m.from === "user" ? "flex-end" : "flex-start",
              background: m.from === "user" ? "#005C4B" : "#1F2C34",
              padding: "6px 10px 3px",
              borderRadius: m.from === "user" ? "8px 8px 0 8px" : "8px 8px 8px 0",
              position: "relative",
            }}>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.9)", lineHeight: 1.4, margin: 0 }}>{m.text}</p>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "3px", marginTop: "1px" }}>
              <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.35)" }}>{m.time}</span>
              {m.from === "user" && (
                <svg width="12" height="8" viewBox="0 0 16 11" fill="none">
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
          transition={{ delay: 3.5 }}
          style={{
            alignSelf: "flex-start",
            background: "#1F2C34",
            padding: "10px 14px",
            borderRadius: "8px 8px 8px 0",
            display: "flex", gap: "4px",
          }}>
          {[0, 1, 2].map(i => (
            <motion.div key={i}
              animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
              style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.4)" }}
            />
          ))}
        </motion.div>
      </div>

      {/* Input bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: "8px",
        padding: "8px 10px",
        background: "#1F2C34",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{
          flex: 1, background: "#2A3942", borderRadius: "20px",
          padding: "8px 14px", fontSize: "11px", color: "rgba(255,255,255,0.3)",
        }}>
          Type a message
        </div>
        <div style={{
          width: "34px", height: "34px", borderRadius: "50%",
          background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
        </div>
      </div>

      {/* Home indicator */}
      <div style={{ padding: "6px 0", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.15)" }} />
      </div>
    </div>
  );
}
