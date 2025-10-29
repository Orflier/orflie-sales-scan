import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

const guarantees = [
  {
    product: "Auditoria 30 Dias",
    guarantee: "Se não identificarmos pelo menos 5 vazamentos críticos, você ganha 1 Sprint de 7 dias grátis"
  },
  {
    product: "Sprint 7 Dias",
    guarantee: "Se não entregarmos pelo menos 3 quick wins implementáveis, você não paga"
  },
  {
    product: "Imersão Estratégica",
    guarantee: "Se ao final do dia você não tiver um plano claro de ação, devolvemos 100% do investimento"
  }
];

const GuaranteesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-['Montserrat']">
            Nossas Garantias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Assumimos o risco por você. Se não entregarmos resultados, você não perde nada.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {guarantees.map((item, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <Shield className="text-accent flex-shrink-0 mt-1" size={40} />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {item.product}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.guarantee}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nós só ganhamos se você ganhar. Por isso, nosso compromisso é com seus resultados, não apenas com entregas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
