import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import CasesWeHandle from "@/components/sections/CasesWeHandle";
import Testimonials from "@/components/sections/Testimonials";
import Documentation from "@/components/sections/Documentation";
import FAQ from "@/components/sections/FAQ";
import SeoContent from "@/components/sections/SeoContent";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Problems />
        <HowItWorks />
        <About />
        <CasesWeHandle />
        <Testimonials />
        <Documentation />
        <FAQ />
        <SeoContent />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
