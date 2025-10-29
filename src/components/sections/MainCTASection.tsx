import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle, Clock } from "lucide-react";
import CTAButton from "../CTAButton";

const benefits = [
  "Identificação clara dos seus vazamentos de receita",
  "Mapa completo de onde está o dinheiro perdido",
  "Orientação sobre os próximos passos estratégicos"
];

const MainCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden" id="contato">
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

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 text-center font-['Montserrat']">
              RAIO-X COMERCIAL GRATUITO (15 MIN)
            </h2>

            <p className="text-xl text-center text-muted-foreground mb-8">
              Antes de fechar qualquer coisa, vamos fazer um diagnóstico rápido e gratuito da sua operação
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mb-6">
              <CTAButton size="xl" showArrow className="w-full md:w-auto">
                QUERO MEU RAIO-X GRATUITO
              </CTAButton>
            </div>

            {/* Time Indicator */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock size={20} />
              <span>Leva apenas 15 minutos • Sem compromisso</span>
            </div>

            {/* Trust Element */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
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
