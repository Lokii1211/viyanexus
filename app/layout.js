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
  alternates: {
    canonical: "https://viyanexus.vercel.app",
  },
  openGraph: {
    title: "Viya Nexus | Automate. Scale. Dominate.",
    description:
      "India's premium AI automation agency. WhatsApp bots, Voice AI agents, chatbots, and websites that convert — delivered in 7 days.",
    type: "website",
    locale: "en_IN",
    siteName: "Viya Nexus",
    url: "https://viyanexus.vercel.app",
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
        {/* LocalBusiness + Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Viya Nexus",
              description:
                "India's premium AI automation agency — WhatsApp Automation, Voice AI, Business Chatbots, Website Design, Marketing Automation.",
              url: "https://viyanexus.vercel.app",
              foundingDate: "2026",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              serviceType: [
                "WhatsApp Automation",
                "Voice AI Assistant",
                "AI Chatbot Development",
                "Website Design",
                "Digital Marketing",
                "Business Process Automation",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "30",
                bestRating: "5",
                worstRating: "1",
              },
              priceRange: "₹₹",
              telephone: "+91-9003360494",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9003360494",
                contactType: "sales",
                availableLanguage: ["English", "Tamil", "Hindi"],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0C12] text-[#F0EDE8] font-[family-name:var(--font-body)] antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
