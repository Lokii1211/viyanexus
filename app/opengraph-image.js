import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Viya Nexus — India's Premium AI Automation Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0C12",
          position: "relative",
        }}
      >
        {/* Gold glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(201,145,10,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Bottom subtle line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "3px",
            background: "linear-gradient(to right, transparent, #C9910A, transparent)",
          }}
        />

        {/* VN Circle */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #C9910A, #E8B84B)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            fontWeight: 800,
            color: "#422d00",
            marginBottom: "28px",
            boxShadow: "0 8px 40px rgba(201,145,10,0.3)",
          }}
        >
          VN
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#F0EDE8",
            letterSpacing: "-0.02em",
            marginBottom: "8px",
            display: "flex",
          }}
        >
          VIYA NEXUS
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "18px",
            color: "#C9910A",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          India&apos;s Premium AI Automation Partner
        </div>

        {/* Service pills */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["WhatsApp Bots", "Voice AI", "Web Dev", "Marketing"].map((s) => (
            <div
              key={s}
              style={{
                padding: "8px 20px",
                border: "1px solid rgba(201,145,10,0.2)",
                color: "rgba(255,255,255,0.5)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                display: "flex",
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            fontSize: "11px",
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          viyanexus.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
