import ArticleLayout from "@/app/components/layout/ArticleLayout";

export const metadata = {
  title: "Emerald Properties Case Study — 2× Site Visit Bookings | Viya Nexus",
  description: "How a Coimbatore real estate agency cut lead response from 8 hours to 2 minutes and doubled site visit bookings using WhatsApp automation.",
  alternates: { canonical: "https://viyanexus.vercel.app/case-studies/emerald-real-estate" },
};

export default function EmeraldCaseStudy() {
  return (
    <ArticleLayout tag="REAL ESTATE" date="May 2026" readTime="6 min"
      title="Emerald Properties: Lead Response From 8 Hours to 2 Minutes. Site Visits Doubled.">

      <p><strong>Client:</strong> Emerald Properties — a boutique real estate agency in Coimbatore specializing in premium residential plots and villas. Team of 12, handling 40–60 inquiries/day across WhatsApp, phone, and Instagram.</p>

      <h2>The Challenge</h2>

      <p>Real estate in South India is a relationship-driven business. But Emerald was losing deals before relationships could even start:</p>

      <ul>
        <li><strong>Average lead response time: 8+ hours</strong> — by the time a sales agent responded, the prospect had already contacted 3 other builders</li>
        <li><strong>60% of leads came after 6pm</strong> — when the sales office was closed</li>
        <li><strong>No lead qualification system</strong> — sales agents spent equal time on ₹80L serious buyers and casual browsers</li>
        <li><strong>Instagram DMs were a black hole</strong> — 40+ unread messages every morning, no tracking</li>
        <li><strong>Zero retargeting</strong> on website visitors who browsed property listings</li>
      </ul>

      <blockquote><p>In real estate, the first agent to respond wins the deal. We were responding last — every single time. — Priya S., Director, Emerald Properties</p></blockquote>

      <h2>The Solution</h2>

      <h3>WhatsApp Lead Qualification Bot</h3>
      <ul>
        <li>Instant response to every inquiry within 4 seconds — 24/7</li>
        <li>Automated qualification flow: budget range, location preference, timeline, family size</li>
        <li>High-intent leads (budget confirmed, ready within 3 months) flagged and routed to senior agents immediately</li>
        <li>Casual inquiries handled entirely by bot with property brochures, virtual tour links, and pricing sheets</li>
      </ul>

      <h3>Lead Scoring &amp; CRM Integration</h3>
      <ul>
        <li>Every lead scored 1–10 based on engagement signals (messages sent, documents opened, site visit request)</li>
        <li>Hot leads (8+) trigger instant WhatsApp notification to the assigned agent</li>
        <li>Cold leads receive automated nurture sequence: weekly property updates, new launch alerts, market insights</li>
      </ul>

      <h3>Automated Follow-Up Engine</h3>
      <ul>
        <li>24-hour follow-up for leads who inquired but didn&apos;t book a site visit</li>
        <li>72-hour win-back message with a limited-time offer or new property match</li>
        <li>7-day final touch: &quot;Still looking? Here&apos;s what&apos;s new this week&quot;</li>
      </ul>

      <h2>The Results — After 60 Days</h2>

      <table>
        <thead><tr><th>Metric</th><th>Before</th><th>After</th><th>Impact</th></tr></thead>
        <tbody>
          <tr><td>Lead response time</td><td>8 hours</td><td>2 minutes</td><td><strong>240× faster</strong></td></tr>
          <tr><td>Site visit bookings/month</td><td>14</td><td>31</td><td><strong>2.2× increase</strong></td></tr>
          <tr><td>Lead qualification time</td><td>25 min/lead</td><td>Automated</td><td><strong>100% saved</strong></td></tr>
          <tr><td>After-hours leads captured</td><td>0%</td><td>100%</td><td><strong>Full coverage</strong></td></tr>
          <tr><td>Pipeline value generated</td><td>₹2.4Cr/month</td><td>₹5.1Cr/month</td><td><strong>₹1.2Cr pipeline added</strong></td></tr>
          <tr><td>Sales agent productive time</td><td>3 hrs/day</td><td>6 hrs/day</td><td><strong>2× more selling time</strong></td></tr>
        </tbody>
      </table>

      <h2>Key Insight</h2>

      <p>The biggest win wasn&apos;t the bot answering faster — it was the <strong>lead scoring</strong>. Before automation, agents treated every lead equally. After, they spent 80% of their time on the 20% of leads most likely to close. This single change doubled their conversion rate from site visits to bookings.</p>

      <blockquote><p>Our lead response went from 8 hours to 2 minutes. We doubled our site-visit bookings in the first month. The WhatsApp bot qualifies leads so my team only talks to serious buyers. Best investment we&apos;ve made this year. — Priya S., Director, Emerald Properties</p></blockquote>

    </ArticleLayout>
  );
}
