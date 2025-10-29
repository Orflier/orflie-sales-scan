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
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-['Montserrat']">
            Seu time vende. Seu marketing entrega.<br />
            Mas sua empresa não cresce como deveria.
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <problem.icon className="text-accent mb-4" size={40} />
              <p className="text-lg text-foreground leading-relaxed">
                {problem.text}
              </p>
            </Card>
          ))}
        </div>

        {/* Callout Box */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-accent-light border-l-4 border-accent p-8 text-center animate-scale-in">
            <div className="flex items-center justify-center gap-4 mb-4">
              <AlertCircle className="text-accent" size={32} />
              <h3 className="text-2xl font-bold text-primary">Você sabia?</h3>
            </div>
            <p className="text-xl text-foreground leading-relaxed">
              <span className="font-bold text-accent">R$ 75.000/mês</span> é a média de prejuízo das empresas antes da Orflie entrar
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
