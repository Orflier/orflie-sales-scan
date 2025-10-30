import CTAButton from "../CTAButton";

const FinalCTASection = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 bg-gradient-to-br from-accent to-accent-hover relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 70px, rgba(255,255,255,.2) 70px, rgba(255,255,255,.2) 140px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Main Message */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight font-['Montserrat'] break-words px-2">
            Você pode continuar operando no escuro e perdendo R$ 75.000/mês.
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 sm:mb-12 leading-relaxed break-words px-2">
            Ou pode agendar uma call de 15 minutos que pode mudar sua margem para sempre.
          </p>

          {/* CTA Button */}
          <div className="mb-8 max-w-2xl mx-auto">
            <CTAButton 
              variant="secondary" 
              size="xl"
              showArrow
              className="shadow-2xl"
            >
              QUERO MEU RAIO-X COMERCIAL GRATUITO
            </CTAButton>
          </div>

          {/* P.S. */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed break-words">
              <span className="font-bold">P.S.:</span> Quanto mais tempo você espera, mais dinheiro deixa na mesa. 
              A concorrência não vai esperar. O mercado não vai esperar. 
              <span className="font-bold"> Seus clientes não vão esperar.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
