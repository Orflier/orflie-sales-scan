import { FileCheck, Users, TrendingUp, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: FileCheck,
    title: "Análise Completa",
    description: "Mapeamento de todos os processos comerciais da empresa"
  },
  {
    icon: Users,
    title: "Diagnóstico de Time",
    description: "Avaliação de performance e estrutura da equipe de vendas"
  },
  {
    icon: TrendingUp,
    title: "Identificação de Vazamentos",
    description: "Onde você está perdendo dinheiro e oportunidades"
  },
  {
    icon: Target,
    title: "Plano de Ação",
    description: "Estratégias práticas e imediatas para aumentar receita"
  }
];

const WhatIsSection = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 bg-secondary" id="beneficios">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-['Montserrat'] break-words px-2">
            Auditoria Comercial = Raio-X Total da Sua Operação de Vendas
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto break-words px-4">
            Não é teoria. Não é PowerPoint. Não é papo de mindset.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>É cirúrgico, prático e orientado por números.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-accent rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 break-words">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Before/After Visual */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <Card className="p-6 sm:p-8 bg-destructive/10 border-destructive/20">
              <h4 className="text-xl sm:text-2xl font-bold text-destructive mb-3 sm:mb-4">Antes</h4>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li>✗ Processos desorganizados</li>
                <li>✗ Vendas imprevisíveis</li>
                <li>✗ Time sem direção clara</li>
                <li>✗ Dinheiro desperdiçado</li>
              </ul>
            </Card>
            
            <Card className="p-6 sm:p-8 bg-accent/10 border-accent/20">
              <h4 className="text-xl sm:text-2xl font-bold text-accent mb-3 sm:mb-4">Depois</h4>
              <ul className="space-y-2 text-sm sm:text-base text-foreground">
                <li>✓ Processos otimizados</li>
                <li>✓ Vendas previsíveis</li>
                <li>✓ Time alinhado e produtivo</li>
                <li>✓ ROI maximizado</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
