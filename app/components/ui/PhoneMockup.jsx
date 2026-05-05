"use client";
import { useState, useEffect } from "react";

const chatMessages = [
  { from: "user", text: "Hi, I need a table for 4 this Saturday 7pm" },
  { from: "bot", text: "Sure! I have 7:00pm and 7:30pm available. Which one?" },
  { from: "user", text: "7:30 please" },
  { from: "bot", text: "Done! Table for 4 at 7:30pm Saturday. Confirmation sent to WhatsApp ✓" },
  { from: "user", text: "Can I also pre-order the weekend special?" },
  { from: "bot", text: "Absolutely! Weekend Thali (₹549) added. Total: ₹2,196. Payment link sent 📱" },
  { from: "user", text: "Perfect, thanks!" },
  { from: "bot", text: "You're welcome! See you Saturday 🎉 Rating: ★★★★★" },
];

export default function PhoneMockup() {
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const [typing, setTyping] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timers = [];
    let delay = 0;
    chatMessages.forEach((msg, i) => {
      delay += i === 0 ? 500 : 1800;
      timers.push(setTimeout(() => setTyping(true), delay));
      delay += 700;
      timers.push(setTimeout(() => { setTyping(false); setVisibleMsgs(i + 1); }, delay));
    });
    // Reset after all messages
    timers.push(setTimeout(() => { setVisibleMsgs(0); setCycle(c => c + 1); }, delay + 3000));
    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div style={{ position: "relative", width: "280px", flexShrink: 0 }}>
      {/* Phone Frame */}
      <div style={{
        background: "#18181b", borderRadius: "32px",
        border: "4px solid #27272a",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
        overflow: "hidden", animation: "bob 4s ease-in-out infinite",
      }}>
        {/* Notch */}
        <div style={{ height: "24px", background: "#18181b", display: "flex", justifyContent: "center", alignItems: "flex-end", paddingBottom: "4px" }}>
          <div style={{ width: "70px", height: "4px", borderRadius: "4px", background: "#27272a" }} />
        </div>

        {/* Screen */}
        <div style={{ background: "#0F1219", minHeight: "440px", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.5)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#C9910A", letterSpacing: "0.1em" }}>VIYA AI • LIVE</span>
            </div>
            <span style={{ fontSize: "8px", color: "#4A4845", fontFamily: "var(--font-mono)" }}>NOW</span>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", padding: "10px 12px" }}>
            {[{ l: "LEADS", v: "+14" }, { l: "REVENUE", v: "₹32K" }, { l: "SAVED", v: "4hrs" }].map((s, i) => (
              <div key={i} style={{ background: "#06080D", padding: "8px", textAlign: "center", border: "1px solid rgba(255,255,255,0.03)" }}>
                <div style={{ fontSize: "7px", color: "#4A4845", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>{s.l}</div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#E8B84B", fontFamily: "var(--font-display)" }}>{s.v}</div>
              </div>
            ))}
          </div>

          {/* Chat Area */}
          <div style={{ flex: 1, padding: "8px 12px", display: "flex", flexDirection: "column", gap: "6px", overflowY: "auto", maxHeight: "280px" }}>
            {chatMessages.slice(0, visibleMsgs).map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                maxWidth: "82%",
                padding: "7px 10px",
                borderRadius: msg.from === "user" ? "10px 10px 2px 10px" : "10px 10px 10px 2px",
                background: msg.from === "user" ? "rgba(201,145,10,0.12)" : "#151821",
                borderLeft: msg.from === "bot" ? "2px solid #C9910A" : "none",
                animation: "fadeSlideIn 0.3s ease-out",
              }}>
                <p style={{ fontSize: "9px", color: "#F0EDE8", lineHeight: 1.5 }}>{msg.text}</p>
              </div>
            ))}
            {typing && (
              <div style={{ alignSelf: "flex-start", padding: "7px 14px", background: "#151821", borderRadius: "10px", borderLeft: "2px solid #C9910A" }}>
                <div style={{ display: "flex", gap: "3px" }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C9910A", animation: `typing-dots 1.4s infinite ${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Voice Bar */}
          <div style={{ background: "#151821", padding: "8px 12px", borderTop: "1px solid rgba(255,255,255,0.03)", display: "flex", alignItems: "center", gap: "4px", justifyContent: "center" }}>
            {[10, 18, 14, 22, 8, 16, 12, 20, 10].map((h, i) => (
              <div key={i} style={{ width: "2px", background: "#C9910A", height: `${h}px`, opacity: 0.6, animation: `pulse-gold 1.5s ease-in-out infinite ${i * 0.08}s` }} />
            ))}
            <span style={{ fontSize: "7px", fontFamily: "var(--font-mono)", color: "#4A4845", marginLeft: "6px", letterSpacing: "0.08em" }}>AI ACTIVE</span>
          </div>
        </div>

        {/* Home indicator */}
        <div style={{ height: "18px", background: "#18181b", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "36px", height: "3px", borderRadius: "3px", background: "#27272a" }} />
        </div>
      </div>

      {/* Floating badge */}
      <div style={{
        position: "absolute", top: "-12px", right: "-24px",
        background: "#151821", padding: "6px 10px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        border: "1px solid rgba(201,145,10,0.12)",
        display: "flex", alignItems: "center", gap: "6px",
        animation: "float 3s ease-in-out infinite",
      }}>
        <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(74,222,128,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#4ade80", fontSize: "9px" }}>✓</span>
        </div>
        <div>
          <p style={{ fontSize: "7px", fontWeight: 700, color: "#F0EDE8", letterSpacing: "0.04em" }}>LEAD CAPTURED</p>
          <p style={{ fontSize: "6px", color: "#4A4845" }}>Just now</p>
        </div>
      </div>
    </div>
  );
}
