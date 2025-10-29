import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import CTAButton from "./CTAButton";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 animate-scale-in max-w-[calc(100vw-2rem)]">
      <CTAButton
        size="lg"
        className="shadow-2xl flex items-center gap-2 !w-auto"
      >
        <Calendar size={20} className="flex-shrink-0" />
        <span className="hidden lg:inline whitespace-nowrap">AGENDAR RAIO-X</span>
        <span className="lg:hidden whitespace-nowrap text-sm">AGENDAR</span>
      </CTAButton>
    </div>
  );
};

export default FloatingCTA;
