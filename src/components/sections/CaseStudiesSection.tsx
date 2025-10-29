import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";

const cases = [
  {
    company: "Empresa de Tecnologia B2B",
    before: {
      metric1: "Ticket Médio: R$ 12.000",
      metric2: "Taxa de Conversão: 8%",
      metric3: "Ciclo de Venda: 90 dias"
    },
    after: {
      metric1: "Ticket Médio: R$ 18.000",
      metric2: "Taxa de Conversão: 15%",
      metric3: "Ciclo de Venda: 45 dias"
    },
    revenue: "+R$ 140.000/mês"
  },
  {
    company: "Indústria de Equipamentos",
    before: {
      metric1: "Pipeline: R$ 800.000",
      metric2: "Taxa de Fechamento: 12%",
      metric3: "ROI Marketing: 2.5x"
    },
    after: {
      metric1: "Pipeline: R$ 1.8 milhão",
      metric2: "Taxa de Fechamento: 22%",
      metric3: "ROI Marketing: 5.2x"
    },
    revenue: "+R$ 220.000/mês"
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-secondary" id="portfolio">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-['Montserrat']">
            Resultados Que Falam Por Si
          </h2>
          <p className="text-xl text-muted-foreground">
            Empresas reais. Números reais. Transformação real.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Company Header */}
              <div className="bg-primary p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {caseStudy.company}
                </h3>
              </div>

              {/* Before/After Comparison */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Before */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-destructive flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      Antes
                    </h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>{caseStudy.before.metric1}</p>
                      <p>{caseStudy.before.metric2}</p>
                      <p>{caseStudy.before.metric3}</p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-accent flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                      Depois
                    </h4>
                    <div className="space-y-2 text-sm font-medium text-foreground">
                      <p>{caseStudy.after.metric1}</p>
                      <p>{caseStudy.after.metric2}</p>
                      <p>{caseStudy.after.metric3}</p>
                    </div>
                  </div>
                </div>

                {/* Revenue Badge */}
                <div className="bg-accent text-white px-6 py-4 rounded-lg text-center">
                  <p className="text-sm font-medium mb-1">Receita Extra</p>
                  <p className="text-3xl font-bold">{caseStudy.revenue}</p>
                </div>

                {/* Mini Chart Visualization */}
                <div className="mt-6 flex items-end gap-2 justify-center h-24">
                  <div className="bg-destructive/20 w-16 h-12 rounded-t flex items-end justify-center pb-2">
                    <TrendingUp className="text-destructive" size={20} />
                  </div>
                  <div className="bg-accent/20 w-16 h-20 rounded-t flex items-end justify-center pb-2">
                    <TrendingUp className="text-accent" size={24} />
                  </div>
                  <div className="bg-accent w-16 h-24 rounded-t flex items-end justify-center pb-2">
                    <TrendingUp className="text-white" size={28} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
          {[
            { icon: DollarSign, value: "R$ 15Mi+", label: "Em Receita Gerada" },
            { icon: Users, value: "50+", label: "Empresas Auditadas" },
            { icon: Target, value: "89%", label: "Taxa de Sucesso" },
            { icon: TrendingUp, value: "3.2x", label: "ROI Médio" }
          ].map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="text-accent mx-auto mb-3" size={36} />
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
