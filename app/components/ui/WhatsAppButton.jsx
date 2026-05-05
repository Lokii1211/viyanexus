"use client";
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/919003360494?text=Hi%20Viya%20Nexus%2C%20I%20want%20to%20explore%20automation%20for%20my%20business";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Viya Nexus on WhatsApp"
      className="cta-btn-animate"
      style={{
        position: "fixed", bottom: "24px", left: "24px", zIndex: 50,
        width: "52px", height: "52px", borderRadius: "50%",
        background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
        textDecoration: "none",
      }}
    >
      <MessageCircle size={24} style={{ color: "white" }} />
    </a>
  );
}
