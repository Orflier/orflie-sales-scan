import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle, Clock } from "lucide-react";
import CTAButton from "../CTAButton";

const benefits = [
  "Identificação clara dos seus vazamentos de receita",
  "Visão de onde está o dinheiro perdido no funil",
  "Orientação sobre os próximos passos estratégicos (com ou sem Auditoria completa)"
];

const MainCTASection = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden" id="contato">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl animate-scale-in">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center">
                <Calendar className="text-white" size={40} />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 text-center font-['Montserrat'] break-words px-2">
              Diagnóstico Express gratuito (15 min)
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-6 sm:mb-8 break-words">
              Antes de qualquer proposta, começamos com um diagnóstico rápido da sua operação. Em poucos minutos, identificamos os principais vazamentos de receita e te mostramos onde você está deixando dinheiro na mesa – sem compromisso.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8 sm:mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-base sm:text-lg text-foreground break-words text-left">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 mb-6">
              <CTAButton 
                size="lg" 
                showArrow 
                className="w-full md:w-auto text-xs sm:text-base"
                action="form"
              >
                PREENCHER DIAGNÓSTICO EXPRESS
              </CTAButton>
              <CTAButton 
                size="default" 
                variant="secondary"
                className="w-full md:w-auto opacity-80 text-xs sm:text-sm"
                action="whatsapp"
                whatsappMessage="Olá, quero falar com um especialista sobre a Auditoria Comercial"
              >
                Falar com especialista
              </CTAButton>
            </div>

            {/* Time Indicator */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
              <Clock size={18} className="flex-shrink-0" />
              <span className="text-sm sm:text-base break-words">Leva apenas 15 minutos • Sem compromisso</span>
            </div>

            {/* Trust Element */}
            <div className="pt-6 sm:pt-8 border-t border-border text-center">
              <p className="text-xs sm:text-sm text-muted-foreground break-words">
                🔒 Seus dados estão seguros. Não compartilhamos informações com terceiros.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MainCTASection;
