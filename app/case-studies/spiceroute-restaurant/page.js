import ArticleLayout from "@/app/components/layout/ArticleLayout";

export const metadata = {
  title: "SpiceRoute Case Study — 94% Fewer Manual Replies | Viya Nexus",
  description: "How a 4-location Chennai restaurant chain went from 180 manual WhatsApp replies/day to 12, recovered ₹50L+ annual revenue, and got their evenings back.",
  alternates: { canonical: "https://viyanexus.vercel.app/case-studies/spiceroute-restaurant" },
};

export default function SpiceRouteCaseStudy() {
  return (
    <ArticleLayout tag="RESTAURANT CHAIN" date="May 2026" readTime="8 min"
      title="SpiceRoute: From 180 Manual WhatsApp Replies/Day to 12. ₹50L+ Revenue Recovered.">

      <p><strong>Client:</strong> SpiceRoute — a 4-location South Indian restaurant chain in Chennai, founded in 2018 by Karthik Rajan. Annual revenue: ₹3.2 Cr. Staff: 85 employees.</p>

      <h2>The Challenge</h2>

      <p>By early 2026, SpiceRoute was drowning in its own success:</p>

      <ul>
        <li><strong>180+ WhatsApp messages/day</strong> from customers asking about menus, reservations, order status, and event bookings — all answered manually by 3 staff members</li>
        <li><strong>35% of calls went unanswered</strong> during peak hours (12–2pm, 7–9pm), resulting in an estimated ₹4.5L/month in lost catering and group booking revenue</li>
        <li><strong>No digital presence beyond Instagram</strong> — their website was a static Wix page with outdated menus, no online ordering, and zero SEO visibility</li>
        <li><strong>Marketing spend of ₹80K/month on Meta Ads</strong> with no attribution, no retargeting, and a blended ROAS of 1.2× (barely breaking even)</li>
        <li><strong>Staff burnout:</strong> the 3 WhatsApp operators were also hostesses, leading to poor in-restaurant guest experience</li>
      </ul>

      <blockquote><p>I was paying three people full-time salaries just to copy-paste menu PDFs on WhatsApp. We were losing catering leads every single day because nobody could answer the phone during lunch rush. — Karthik Rajan, Founder</p></blockquote>

      <h2>The Objective</h2>

      <p>SpiceRoute needed a <strong>complete digital operations overhaul</strong> — not just a chatbot, but an integrated system that would:</p>

      <ol>
        <li>Automate 90%+ of repetitive WhatsApp interactions</li>
        <li>Capture and qualify catering/event leads automatically</li>
        <li>Build a high-converting website with online ordering capability</li>
        <li>Optimize ad spend for measurable, attributable ROI</li>
      </ol>

      <h2>The Solution — Built in 7 Days</h2>

      <h3>Discovery &amp; Architecture (Day 1–2)</h3>
      <ul>
        <li>On-site audit of SpiceRoute&apos;s daily communication flow</li>
        <li>Mapped 47 unique customer intent patterns from WhatsApp chat exports</li>
        <li>Identified 6 high-value automation opportunities</li>
      </ul>

      <h3>WhatsApp AI Chatbot (via Business API)</h3>
      <ul>
        <li>Custom-trained AI handling: menu browsing (with images), table reservations, order status, catering inquiries, and loyalty program enrollment</li>
        <li>Multi-language support: English + Tamil</li>
        <li>Smart escalation: bot detects frustration keywords and routes to human within 30 seconds</li>
        <li>Integrated with their POS system for real-time order tracking</li>
      </ul>

      <h3>High-Converting Website</h3>
      <ul>
        <li>Mobile-first design with online ordering (integrated with Swiggy/Zomato APIs for delivery, direct ordering for dine-in)</li>
        <li>Location pages optimized for &quot;best South Indian restaurant in [area]&quot; keywords</li>
        <li>Google Business Profile optimization for all 4 locations</li>
        <li>Page speed: 1.4s load time (previously 8.2s on Wix)</li>
      </ul>

      <h3>Digital Marketing Engine</h3>
      <ul>
        <li>Rebuilt Meta Ads with proper pixel tracking, custom audiences, and lookalike modeling</li>
        <li>Google Ads for high-intent &quot;restaurant near me&quot; searches</li>
        <li>Automated WhatsApp retargeting: customers who browsed catering packages but didn&apos;t book received a personalized follow-up 24 hours later</li>
        <li>Monthly content calendar: 12 posts/month across Instagram and Google Business</li>
      </ul>

      <h2>The Results — After 90 Days</h2>

      <table>
        <thead><tr><th>Metric</th><th>Before</th><th>After</th><th>Impact</th></tr></thead>
        <tbody>
          <tr><td>Manual WhatsApp replies/day</td><td>180+</td><td>12</td><td><strong>94% reduction</strong></td></tr>
          <tr><td>Missed calls during peak</td><td>35%</td><td>3%</td><td><strong>91% improvement</strong></td></tr>
          <tr><td>Catering leads/month</td><td>8</td><td>34</td><td><strong>4.25× increase</strong></td></tr>
          <tr><td>Website load time</td><td>8.2s</td><td>1.4s</td><td><strong>83% faster</strong></td></tr>
          <tr><td>Monthly ad ROAS</td><td>1.2×</td><td>4.8×</td><td><strong>4× improvement</strong></td></tr>
          <tr><td>Staff hours on WhatsApp/day</td><td>24 hrs</td><td>1.5 hrs</td><td><strong>93% saved</strong></td></tr>
          <tr><td>Monthly catering revenue</td><td>₹2.1L</td><td>₹6.3L</td><td><strong>+₹4.2L/month</strong></td></tr>
          <tr><td>Google organic traffic</td><td>120/month</td><td>1,840/month</td><td><strong>15× growth</strong></td></tr>
        </tbody>
      </table>

      <h2>Quantified Impact</h2>

      <ul>
        <li><strong>₹50.4L additional annual revenue</strong> from recovered catering leads alone</li>
        <li><strong>₹7.2L annual salary savings</strong> (2 WhatsApp operators redeployed to guest experience roles)</li>
        <li><strong>ROI on Viya Nexus investment: 14.2× in first year</strong></li>
      </ul>

      <blockquote><p>We went from 180 manual replies a day to just 12. The bot handles everything — menus, reservations, even Tamil-speaking customers. But the real game-changer was the catering lead automation. We were losing ₹4 lakh a month in missed bookings. Now the bot qualifies leads, sends pricing, and books follow-up calls automatically. Viya Nexus paid for itself in the first month. — Karthik Rajan, Founder &amp; CEO, SpiceRoute Restaurants</p></blockquote>

    </ArticleLayout>
  );
}
