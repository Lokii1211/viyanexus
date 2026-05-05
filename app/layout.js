import { Cormorant_Garamond, Space_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const instrument = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Viya Nexus | India's Premium AI Automation Partner",
  description:
    "WhatsApp bots, Voice AI, AI chatbots, and automation workflows — built for Indian businesses that are serious about scaling. 7-day delivery. ₹50L+ revenue generated for clients.",
  keywords:
    "WhatsApp automation India, AI chatbot, voice AI assistant, business automation, WhatsApp bot, lead automation India, Viya Nexus",
  openGraph: {
    title: "Viya Nexus | Automate. Scale. Dominate.",
    description:
      "India's premium AI automation agency. WhatsApp bots, Voice AI agents, chatbots, and websites that convert — delivered in 7 days.",
    type: "website",
    locale: "en_IN",
    siteName: "Viya Nexus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viya Nexus | Automate. Scale. Dominate.",
    description:
      "WhatsApp bots, Voice AI, chatbots, and automation workflows — built for Indian businesses ready to scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceMono.variable} ${instrument.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Viya Nexus",
              description:
                "India's premium AI automation agency — WhatsApp Automation, Voice AI, Business Chatbots, Website Design, Marketing Automation, and Full Automation Stack.",
              url: "https://viyanexus.com",
              foundingDate: "2026",
              areaServed: "IN",
              serviceType: [
                "WhatsApp Automation",
                "Voice AI Assistant",
                "AI Chatbot Development",
                "Website Design",
                "Marketing Automation",
                "Business Process Automation",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0C12] text-[#F0EDE8] font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
