"use client";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import Problem from "./components/sections/Problem";
import Services from "./components/sections/Services";
import StatsCounter from "./components/sections/StatsCounter";
import Portfolio from "./components/sections/Portfolio";
import WhyUs from "./components/sections/WhyUs";
import Testimonials from "./components/sections/Testimonials";
import HowItWorks from "./components/sections/HowItWorks";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import ScrollProgress from "./components/ui/ScrollProgress";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import SocialProofToast from "./components/ui/SocialProofToast";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Services />
        <StatsCounter />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <SocialProofToast />
    </>
  );
}
