import { CheckCircle, Calendar } from "lucide-react";
import CTAButton from "../CTAButton";
import heroBackground from "@/assets/hero-background.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-primary-dark/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Tag */}
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-accent text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
              POTENCIALIZE SUA EMPRESA
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight font-['Montserrat'] break-words px-2">Quantas propostas boas hoje estão paradas no "te aviso"?</h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-8 leading-relaxed max-w-4xl mx-auto break-words px-2">Em um diagnóstico express de 5 minutos, você descobre onde seu funil está vazando dinheiro em leads, agenda e follow-up antes de mexer no time ou aumentar a mídia.</p>

          {/* Microtexto com benefícios */}
          <div className="text-white/90 mb-6 sm:mb-10 max-w-3xl mx-auto px-4">
            <p className="text-xs sm:text-base md:text-lg mb-2 sm:mb-3 font-medium">
              Responda um diagnóstico rápido em até 5 minutos e receba:
            </p>
            <ul className="text-left inline-block text-xs sm:text-base space-y-1 sm:space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>um raio-X dos 3 maiores gargalos da sua operação comercial</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>um script pronto para destravar propostas paradas no "te aviso"</span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto px-4">
            <a href="#diagnostico-express" className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white px-4 sm:px-12 py-3 sm:py-6 text-xs sm:text-xl font-bold uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center leading-tight">
              RESPONDER DIAGNÓSTICO EXPRESS (5 MIN)
            </a>
            <a href="https://wa.me/5515981103458?text=Oi%2C%20vi%20a%20Auditoria%20Comercial%20da%20Orflie%20e%20quero%20um%20diagn%C3%B3stico%20r%C3%A1pido%20da%20minha%20opera%C3%A7%C3%A3o.%20Minha%20empresa%20%C3%A9%20___%2C%20faturamos%20aproximadamente%20___%20por%20m%C3%AAs%20e%20temos%20___%20vendedores." target="_blank" rel="noopener noreferrer" className="text-white/80 border border-white/50 hover:bg-white/10 px-3 sm:px-4 py-2 text-xs sm:text-sm font-normal rounded-full transition-all duration-300 text-center">
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;