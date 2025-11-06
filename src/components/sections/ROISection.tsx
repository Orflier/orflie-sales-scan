import { Card } from "@/components/ui/card";
import { TrendingUp, ArrowRight } from "lucide-react";

const ROISection = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 font-['Montserrat'] break-words px-2">
            O ROI Real
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto break-words px-4">
            Não é teoria. São números reais de empresas reais.
          </p>
        </div>

        {/* ROI Visualization */}
        <div className="max-w-5xl mx-auto mb-12 px-4">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 items-center">
            {/* Investment */}
            <Card className="p-6 sm:p-8 text-center animate-fade-in bg-white/10 backdrop-blur-sm border-white/20">
              <p className="text-white/80 mb-2 font-medium text-sm sm:text-base">Investimento</p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white whitespace-nowrap">R$ 6.000</p>
              <p className="text-white/60 mt-2 text-xs sm:text-sm">Auditoria Completa</p>
            </Card>

            {/* Arrow */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-accent rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <ArrowRight className="text-white" size={24} />
              </div>
            </div>

            {/* Return */}
            <Card className="p-6 sm:p-8 text-center animate-fade-in bg-accent border-none overflow-hidden" style={{ animationDelay: '0.4s' }}>
              <p className="text-white/90 mb-2 font-medium text-sm sm:text-base">Recuperação Média</p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">R$ 90.000</p>
              <p className="text-white/80 mt-2 text-xs sm:text-sm">Nos primeiros 90 dias</p>
            </Card>
          </div>
        </div>

        {/* ROI Percentage */}
        <div className="text-center mb-12 animate-scale-in px-4">
          <Card className="inline-block p-6 sm:p-8 bg-white">
            <TrendingUp className="text-accent mx-auto mb-3 sm:mb-4" size={40} />
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-2">1.400%</p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground break-words">Retorno Sobre o Investimento</p>
          </Card>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12 animate-fade-in px-4">
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-3 sm:mb-4 break-words">
            Para cada R$ 1 investido, você recupera R$ 15
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto break-words">
            E isso é apenas nos primeiros 90 dias. O impacto da auditoria continua gerando resultados por anos.
          </p>
        </div>

        {/* Simple Bar Chart */}
        <div className="max-w-2xl mx-auto px-4">
          <Card className="p-6 sm:p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center break-words">Progressão de Resultados</h3>
            <div className="space-y-4">
              {[
                { month: "Mês 1", value: 20, amount: "R$ 18.000" },
                { month: "Mês 2", value: 50, amount: "R$ 45.000" },
                { month: "Mês 3", value: 100, amount: "R$ 90.000" },
              ].map((data, index) => (
                <div key={index} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium text-sm sm:text-base">{data.month}</span>
                    <span className="text-accent font-bold text-sm sm:text-base whitespace-nowrap">{data.amount}</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-3 sm:h-4 overflow-hidden">
                    <div 
                      className="bg-accent h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${data.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
