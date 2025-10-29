import { Card } from "@/components/ui/card";
import { FileSearch, Users, LineChart, Rocket, CheckCircle, Shield } from "lucide-react";

const weeks = [
  {
    number: 1,
    icon: FileSearch,
    title: "Diagnóstico Profundo",
    items: [
      "Mapeamento completo do processo comercial",
      "Análise de funil e conversão",
      "Identificação dos vazamentos"
    ]
  },
  {
    number: 2,
    icon: Users,
    title: "Análise de Time",
    items: [
      "Avaliação individual de vendedores",
      "Análise de scripts e abordagens",
      "Identificação de gaps de habilidades"
    ]
  },
  {
    number: 3,
    icon: LineChart,
    title: "Estratégia e Plano",
    items: [
      "Definição de estratégias de crescimento",
      "Plano de ação detalhado",
      "Metas e KPIs estabelecidos"
    ]
  },
  {
    number: 4,
    icon: Rocket,
    title: "Implementação",
    items: [
      "Início da execução do plano",
      "Ajustes finos nos processos",
      "Treinamento da equipe"
    ]
  }
];

const deliverables = [
  "Relatório completo de auditoria (50+ páginas)",
  "Mapa de vazamentos identificados",
  "Plano de ação priorizado",
  "Scripts otimizados de vendas",
  "Dashboard de KPIs recomendado",
  "1 mês de acompanhamento pós-auditoria"
];

const ProcessSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-['Montserrat'] break-words px-2">
            Como Funciona a Auditoria
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground break-words px-4">
            Duração: 30 dias. Impacto: por anos.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {weeks.map((week, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Connection Line */}
                {index < weeks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-accent"></div>
                )}
                
                <Card className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 relative z-10">
                  <div className="bg-accent rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                    <span className="text-xl sm:text-2xl font-bold text-white">{week.number}</span>
                  </div>
                  <div className="bg-primary/5 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                    <week.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-3 sm:mb-4 text-center break-words">
                    {week.title}
                  </h3>
                  <ul className="space-y-2">
                    {week.items.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={14} />
                        <span className="break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-6 sm:p-8 bg-secondary">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 text-center break-words">
              O Que Você Recebe
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm sm:text-base text-foreground break-words">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Guarantee Badge */}
        <div className="mt-12 text-center animate-scale-in px-4">
          <Card className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 sm:px-8 py-4 bg-accent-light border-accent max-w-xl mx-auto">
            <Shield className="text-accent flex-shrink-0" size={28} />
            <div className="text-center sm:text-left">
              <p className="font-bold text-primary text-base sm:text-lg break-words">Garantia de Resultado</p>
              <p className="text-xs sm:text-sm text-muted-foreground break-words">Identificamos no mínimo 5 vazamentos ou você ganha 1 Sprint extra</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
