import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import DiagnosticFormSection from "@/components/sections/DiagnosticFormSection";
import ProblemSection from "@/components/sections/ProblemSection";
import DiagnosticExpressSection from "@/components/sections/DiagnosticExpressSection";
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

// Declaração de tipos para fbq e gtag
declare global {
  interface Window {
    fbq?: (command: string, event: string, params?: Record<string, any>) => void;
    gtag?: (command: string, event: string, params?: Record<string, any>) => void;
  }
}

const Index = () => {
  useEffect(() => {
    // Funções de tracking
    const trackFormClick = () => {
      if (window.fbq) {
        window.fbq('trackCustom', 'Click_Form_Auditoria');
      }
      if (window.gtag) {
        window.gtag('event', 'click_form_auditoria', {
          event_category: 'lead',
          event_label: 'formulario_auditoria',
        });
      }
    };

    const trackWhatsAppClick = () => {
      if (window.fbq) {
        window.fbq('trackCustom', 'Click_WhatsApp_Auditoria');
      }
      if (window.gtag) {
        window.gtag('event', 'click_whatsapp_auditoria', {
          event_category: 'lead',
          event_label: 'whatsapp_auditoria',
        });
      }
    };

    // Seleciona todos os links que levam ao Google Forms (forms.gle ou docs.google.com/forms)
    const formLinks = document.querySelectorAll('a[href*="forms.gle"], a[href*="docs.google.com/forms"]');
    // Seleciona todos os links que levam ao WhatsApp
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');

    formLinks.forEach((link) => {
      link.addEventListener('click', trackFormClick);
    });

    whatsappLinks.forEach((link) => {
      link.addEventListener('click', trackWhatsAppClick);
    });

    // Cleanup dos listeners ao desmontar
    return () => {
      formLinks.forEach((link) => {
        link.removeEventListener('click', trackFormClick);
      });
      whatsappLinks.forEach((link) => {
        link.removeEventListener('click', trackWhatsAppClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <DiagnosticExpressSection />
        <WhatIsSection />
        <LeaksSection />
        <ProcessSection />
        <CaseStudiesSection />
        <ForWhoSection />
        <MainCTASection />
        <GuaranteesSection />
        <FinalCTASection />
        <DiagnosticFormSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ExitIntentModal />
    </div>
  );
};

export default Index;
