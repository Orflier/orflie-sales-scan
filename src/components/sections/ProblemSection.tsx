import { TrendingDown, Users, Target, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: TrendingDown,
    text: "Você fecha vendas, mas o ticket médio caiu 30% nos últimos 6 meses"
  },
  {
    icon: Users,
    text: "Seu time trabalha duro, mas o pipeline não converte como deveria"
  },
  {
    icon: Target,
    text: "Os leads chegam, mas morrem no meio do funil sem explicação"
  },
  {
    icon: AlertCircle,
    text: "Você investe em marketing, mas o ROI está cada vez mais baixo"
  }
];

const ProblemSection = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 font-['Montserrat'] break-words px-2">
            Seu time vende. Seu marketing entrega.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Mas sua empresa não cresce como deveria.
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <problem.icon className="text-accent mb-3 sm:mb-4 flex-shrink-0" size={32} />
              <p className="text-base sm:text-lg text-foreground leading-relaxed break-words">
                {problem.text}
              </p>
            </Card>
          ))}
        </div>

        {/* Callout Box */}
        <div className="max-w-3xl mx-auto px-4">
          <Card className="bg-accent border-accent p-6 sm:p-8 text-center animate-scale-in">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <AlertCircle className="text-white flex-shrink-0" size={28} />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Você sabia?</h3>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed break-words">
              <span className="font-bold text-white whitespace-nowrap">R$ 75.000/mês</span> é a média de receita perdida que encontramos ao analisar operações comerciais antes da Orflie entrar.
            </p>
          </Card>
        </div>

        {/* Transition to Diagnostic */}
        <div className="max-w-3xl mx-auto px-4 mt-12 text-center">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed break-words">
            Se você se reconhece em pelo menos um desses pontos, o <span className="font-bold text-primary">Diagnóstico Express</span> já é suficiente para mostrar onde está vazando dinheiro hoje.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
