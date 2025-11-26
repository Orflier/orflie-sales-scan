import { Card } from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";
import CTAButton from "../CTAButton";

const benefits = [
  "Entendimento do seu cenário em 5 minutos",
  "Identificação dos principais vazamentos em leads, propostas e follow-up",
  "Recomendações práticas e um script de próximo passo para reativar negócios parados no \"te aviso\""
];

const DiagnosticExpressSection = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 font-['Montserrat'] break-words px-2">
            O que é o Diagnóstico Express da Orflie?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed break-words px-4">
            Em vez de começar com uma consultoria longa, nós damos o primeiro passo com um raio-X rápido da sua operação comercial. 
            Em poucos minutos, entendemos seu cenário, identificamos os vazamentos mais óbvios e mostramos o que pode ser feito já nas próximas semanas.
          </p>
        </div>

        {/* Benefits Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-10 shadow-xl">
            <div className="space-y-4 sm:space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                  <span className="text-base sm:text-lg text-foreground break-words">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Time Indicator */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6 sm:mb-8">
              <Clock size={20} className="flex-shrink-0" />
              <span className="text-sm sm:text-base break-words">Leva apenas 5 minutos • Totalmente gratuito</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center gap-2">
              <CTAButton 
                size="xl" 
                showArrow
                className="w-full sm:w-auto"
                action="form"
              >
                PREENCHER DIAGNÓSTICO EXPRESS
              </CTAButton>
              <p className="text-xs sm:text-sm text-center text-muted-foreground break-words px-4">
                Leva menos de 5 minutos • Diagnóstico gratuito, sem compromisso
              </p>
            </div>

            {/* Note */}
            <p className="text-xs sm:text-sm text-center text-muted-foreground mt-4 break-words px-4">
              Aqui não entraremos ainda em detalhes de auditoria completa de 30 dias. Esse diagnóstico é só para você ter clareza do primeiro passo.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticExpressSection;
