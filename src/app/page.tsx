import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import Problems from "@/components/Problems";
import Manifesto from "@/components/Manifesto";
import WhatWeDo from "@/components/WhatWeDo";
import WhoCanJoin from "@/components/WhoCanJoin";
import HowToJoin from "@/components/HowToJoin";
import CTAForm from "@/components/CTAForm";
import CompanyGrid from "@/components/CompanyGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WhyNow />
      <Problems />
      <Manifesto />
      <CompanyGrid />
      <WhatWeDo />
      <WhoCanJoin />
      <HowToJoin />
      <CTAForm />
      <Footer />
    </main>
  );
}
