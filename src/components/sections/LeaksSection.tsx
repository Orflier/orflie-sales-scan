import { Card } from "@/components/ui/card";

const leaks = [
  { number: 1, title: "Pipeline Furado", loss: "R$ 120.000/ano" },
  { number: 2, title: "Abordagem Fraca", loss: "R$ 90.000/ano" },
  { number: 3, title: "Follow-up Inexistente", loss: "R$ 150.000/ano" },
  { number: 4, title: "Precificação Errada", loss: "R$ 200.000/ano" },
  { number: 5, title: "Objeções Mal Tratadas", loss: "R$ 110.000/ano" },
  { number: 6, title: "Falta de Upsell", loss: "R$ 130.000/ano" },
  { number: 7, title: "Dados Mal Analisados", loss: "R$ 100.000/ano" }
];

const LeaksSection = () => {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-['Montserrat']">
            OS 7 VAZAMENTOS QUE A GENTE IDENTIFICA E ESTANCA
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Cada empresa tem pelo menos 4 destes. Você só não sabe ainda.
          </p>
        </div>

        {/* Leaks Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {leaks.map((leak, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors">
                {leak.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3">
                  {leak.title}
                </h3>
                <p className="text-accent font-bold text-lg">
                  Perda: {leak.loss}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Total Loss Box */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-accent border-none text-center animate-scale-in">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Total Estimado de Perda
            </h3>
            <p className="text-5xl md:text-6xl font-bold text-white">
              R$ 900.000/ano
            </p>
            <p className="text-white/90 mt-4 text-lg">
              Isso é o que você pode estar perdendo agora mesmo
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeaksSection;
