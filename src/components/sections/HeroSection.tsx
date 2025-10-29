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
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight font-['Montserrat'] break-words px-2">
            Você Está Perdendo R$ 75.000/mês em Vendas e Nem Sabe Onde Está o Rombo.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto break-words px-2">Descubra os 7 Vazamentos que Estão Destruindo sua Receita e como estancar tudo em 30 dias com a Auditoria Comercial da Orflie.</p>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-white px-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-accent flex-shrink-0" size={20} />
              <span className="font-medium text-sm sm:text-base">Diagnóstico gratuito de 15 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-accent flex-shrink-0" size={20} />
              <span className="font-medium text-sm sm:text-base">Sem enrolação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-accent flex-shrink-0" size={20} />
              <span className="font-medium text-sm sm:text-base">Sem compromisso</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="max-w-md mx-auto">
            <CTAButton size="xl" showArrow>
              QUERO MEU RAIO-X COMERCIAL
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;