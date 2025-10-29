import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo variant="light" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-white hover:text-accent transition-colors font-medium"
            >
              SOBRE NÓS
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-white hover:text-accent transition-colors font-medium"
            >
              BENEFÍCIOS
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:text-accent transition-colors font-medium"
            >
              PORTFÓLIO
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-white hover:text-accent transition-colors font-medium"
            >
              CONTATO
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary-dark py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-white hover:text-accent transition-colors font-medium text-left px-4 py-2"
              >
                SOBRE NÓS
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-white hover:text-accent transition-colors font-medium text-left px-4 py-2"
              >
                BENEFÍCIOS
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-white hover:text-accent transition-colors font-medium text-left px-4 py-2"
              >
                PORTFÓLIO
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-white hover:text-accent transition-colors font-medium text-left px-4 py-2"
              >
                CONTATO
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
