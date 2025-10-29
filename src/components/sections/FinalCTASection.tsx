import CTAButton from "../CTAButton";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent to-accent-hover relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 70px, rgba(255,255,255,.2) 70px, rgba(255,255,255,.2) 140px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-['Montserrat']">
            Você pode continuar operando no escuro e perdendo R$ 75.000/mês.
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed">
            Ou pode agendar uma call de 15 minutos que pode mudar sua margem para sempre.
          </p>

          {/* CTA Button */}
          <div className="mb-8">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg leading-relaxed">
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
