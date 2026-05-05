"use client";
import { useState, useEffect } from "react";

const chatMessages = [
  { from: "user", text: "Hi, I want to book a table for 4 this Saturday evening", delay: 0 },
  { from: "bot", text: "Sure! I have availability at 7:00pm, 7:30pm, and 8:00pm. Which works best?", delay: 1500 },
  { from: "user", text: "7:30pm please", delay: 3500 },
  { from: "bot", text: "Done! Table for 4 at 7:30pm Saturday. Confirmation sent to your WhatsApp ✓", delay: 5000 },
];

export default function PhoneMockup() {
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timers = [];
    chatMessages.forEach((msg, i) => {
      // Show typing indicator before each message
      timers.push(setTimeout(() => setTyping(true), msg.delay));
      timers.push(setTimeout(() => {
        setTyping(false);
        setVisibleMsgs(i + 1);
      }, msg.delay + 800));
    });
    // Loop after all messages shown
    timers.push(setTimeout(() => {
      setVisibleMsgs(0);
      setTyping(false);
    }, 9000));
    return () => timers.forEach(clearTimeout);
  }, [visibleMsgs === 0 ? Date.now() : 0]);

  return (
    <div style={{ position: "relative", width: "260px", flexShrink: 0 }}>
      {/* Phone Frame */}
      <div style={{
        background: "#18181b", borderRadius: "36px",
        border: "5px solid #27272a",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
        overflow: "hidden", animation: "bob 4s ease-in-out infinite",
      }}>
        {/* Notch */}
        <div style={{ height: "28px", background: "#18181b", display: "flex", justifyContent: "center", alignItems: "flex-end", paddingBottom: "4px" }}>
          <div style={{ width: "80px", height: "4px", borderRadius: "4px", background: "#27272a" }} />
        </div>

        {/* Screen */}
        <div style={{ background: "#0F1219", padding: "16px", minHeight: "420px", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.5)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#C9910A", letterSpacing: "0.1em" }}>VIYA AI • LIVE</span>
            </div>
            <span style={{ fontSize: "9px", color: "#4A4845", fontFamily: "var(--font-mono)" }}>NOW</span>
          </div>

          {/* Stats Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
            <div style={{ background: "#06080D", padding: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ fontSize: "8px", color: "#4A4845", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", marginBottom: "4px" }}>LEADS TODAY</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#E8B84B", fontFamily: "var(--font-display)" }}>+14</div>
            </div>
            <div style={{ background: "#06080D", padding: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ fontSize: "8px", color: "#4A4845", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", marginBottom: "4px" }}>REVENUE</div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#E8B84B", fontFamily: "var(--font-display)" }}>₹32.4K</div>
            </div>
          </div>

          {/* Chat Area */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
            {chatMessages.slice(0, visibleMsgs).map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                maxWidth: "85%",
                padding: "8px 12px",
                borderRadius: msg.from === "user" ? "10px 10px 2px 10px" : "10px 10px 10px 2px",
                background: msg.from === "user" ? "rgba(201,145,10,0.15)" : "#151821",
                borderLeft: msg.from === "bot" ? "2px solid #C9910A" : "none",
                animation: "fadeSlideIn 0.3s ease-out",
              }}>
                <p style={{ fontSize: "10px", color: "#F0EDE8", lineHeight: 1.5 }}>{msg.text}</p>
              </div>
            ))}
            {typing && (
              <div style={{ alignSelf: "flex-start", padding: "8px 16px", background: "#151821", borderRadius: "10px", borderLeft: "2px solid #C9910A" }}>
                <div style={{ display: "flex", gap: "4px" }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9910A", animation: `typing-dots 1.4s infinite ${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Voice Bar */}
          <div style={{ background: "#151821", padding: "8px", border: "1px solid rgba(201,145,10,0.15)", display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}>
            {[12, 20, 16, 24, 10, 18, 14].map((h, i) => (
              <div key={i} style={{ width: "2px", background: "#C9910A", height: `${h}px`, animation: `pulse-gold 1.5s ease-in-out infinite ${i * 0.1}s`, opacity: 0.7 }} />
            ))}
            <span style={{ fontSize: "8px", fontFamily: "var(--font-mono)", color: "#4A4845", marginLeft: "8px", letterSpacing: "0.1em" }}>AI ACTIVE</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ height: "20px", background: "#18181b", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "40px", height: "3px", borderRadius: "3px", background: "#27272a" }} />
        </div>
      </div>

      {/* Floating notification */}
      <div style={{
        position: "absolute", top: "-16px", right: "-32px",
        background: "#151821", padding: "8px 12px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
        border: "1px solid rgba(201,145,10,0.15)",
        display: "flex", alignItems: "center", gap: "8px",
        animation: "float 3s ease-in-out infinite",
        borderRadius: "2px",
      }}>
        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(74,222,128,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#4ade80", fontSize: "10px" }}>✓</span>
        </div>
        <div>
          <p style={{ fontSize: "8px", fontWeight: 700, color: "#F0EDE8" }}>LEAD CAPTURED</p>
          <p style={{ fontSize: "7px", color: "#4A4845" }}>Just now</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
