import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const profiles = [
  {
    title: "Empresas com faturamento entre R$ 500K e R$ 10Mi/ano",
    description: "Que já têm um time comercial estruturado, mas não conseguem escalar como gostariam"
  },
  {
    title: "CEOs e Diretores Comerciais",
    description: "Que sentem que deixam dinheiro na mesa, mas não sabem exatamente onde está o problema"
  },
  {
    title: "Empresas B2B de Serviços ou Produtos",
    description: "Com ciclos de venda de 15 a 120 dias e tickets entre R$ 5K e R$ 500K"
  },
  {
    title: "Times que querem resultados rápidos",
    description: "Sem teorias abstratas, apenas dados concretos e ações imediatas"
  }
];

const ForWhoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-['Montserrat']">
            Para Quem É Esta Auditoria?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não é para todo mundo. É para quem está pronto para mudar.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Not For Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="p-8 bg-muted border-muted-foreground/20">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Não É Para Você Se:
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">✗</span>
                <span>Você ainda não tem um produto ou serviço validado no mercado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">✗</span>
                <span>Você busca soluções mágicas sem estar disposto a implementar mudanças</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">✗</span>
                <span>Você quer apenas teoria e não está pronto para ação imediata</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
