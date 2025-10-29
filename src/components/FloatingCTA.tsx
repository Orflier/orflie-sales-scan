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
    <div className="fixed bottom-8 right-8 z-50 animate-scale-in">
      <CTAButton
        size="lg"
        className="shadow-2xl flex items-center gap-2"
      >
        <Calendar size={24} />
        <span className="hidden lg:inline">AGENDAR RAIO-X</span>
        <span className="lg:hidden">AGENDAR</span>
      </CTAButton>
    </div>
  );
};

export default FloatingCTA;
