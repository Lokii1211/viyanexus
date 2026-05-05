"use client";
import { motion } from "framer-motion";

const industries = [
  "Restaurant Chains", "Real Estate Agencies", "Online Coaches", "D2C Brands",
  "Healthcare Clinics", "Education Centers", "E-commerce Stores", "Travel Agencies",
  "Law Firms", "Fitness Studios", "Financial Advisors", "Interior Designers",
];

export default function TrustBar() {
  const items = [...industries, ...industries];

  return (
    <section className="relative py-4 overflow-hidden bg-[#C9910A]/[0.04] border-y border-[rgba(201,145,10,0.08)]">
      {/* Fade edges */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        maskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
      }} />

      <div className="flex whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-4">
            <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.12em] text-[#4A4845] uppercase">
              {item}
            </span>
            <span className="text-[#C9910A] text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
