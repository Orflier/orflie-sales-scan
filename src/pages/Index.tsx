import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import LeaksSection from "@/components/sections/LeaksSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ForWhoSection from "@/components/sections/ForWhoSection";
import MainCTASection from "@/components/sections/MainCTASection";
import GuaranteesSection from "@/components/sections/GuaranteesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ExitIntentModal from "@/components/ExitIntentModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatIsSection />
        <LeaksSection />
        <ProcessSection />
        <CaseStudiesSection />
        <ForWhoSection />
        <MainCTASection />
        <GuaranteesSection />
        <FinalCTASection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ExitIntentModal />
    </div>
  );
};

export default Index;
