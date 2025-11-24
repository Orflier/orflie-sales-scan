import { useState } from "react";

const DiagnosticFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Formspree handles the submission, we just show loading state
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="diagnostico-express" className="py-8 sm:py-10 bg-gradient-to-br from-primary-light to-primary-dark scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Diagnóstico enviado com sucesso! 🎉
            </h2>
            <p className="text-lg sm:text-xl">
              Em breve entraremos em contato com seu raio-X personalizado.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostico-express" className="py-8 sm:py-10 bg-gradient-to-br from-primary-light to-primary-dark scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Diagnóstico Express – Preencha e receba seu raio-X comercial
            </h2>
          </div>

          {/* Form */}
          <form
            action="https://formspree.io/f/xankwobb"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 space-y-5"
          >
            {/* CAMPOS OBRIGATÓRIOS */}
            
            {/* Nome */}
            <div className="form-group">
              <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                Nome*
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Empresa */}
            <div className="form-group">
              <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 mb-2">
                Empresa*
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                placeholder="Nome da empresa"
              />
            </div>

            {/* Cargo */}
            <div className="form-group">
              <label htmlFor="cargo" className="block text-sm font-semibold text-gray-700 mb-2">
                Cargo*
              </label>
              <select
                id="cargo"
                name="cargo"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              >
                <option value="">Selecione</option>
                <option value="Dono / Sócio">Dono / Sócio</option>
                <option value="Gestor Comercial">Gestor Comercial</option>
                <option value="Marketing / Vendas">Marketing / Vendas</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                placeholder="seu@email.com"
              />
            </div>

            {/* WhatsApp */}
            <div className="form-group">
              <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                WhatsApp*
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                placeholder="(DDD) 9XXXX-XXXX"
              />
            </div>

            {/* Separador para campos opcionais */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4 text-center font-medium">
                Campos abaixo são opcionais, mas ajudam a deixar o diagnóstico ainda mais preciso:
              </p>
            </div>

            {/* CAMPOS OPCIONAIS */}

            {/* Segmento */}
            <div className="form-group">
              <label htmlFor="segmento" className="block text-sm font-semibold text-gray-700 mb-2">
                Segmento (opcional)
              </label>
              <select
                id="segmento"
                name="segmento"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              >
                <option value="">Selecione</option>
                <option value="Saúde / Estética">Saúde / Estética</option>
                <option value="Educação">Educação</option>
                <option value="Distribuidora / Indústria">Distribuidora / Indústria</option>
                <option value="SaaS / Software">SaaS / Software</option>
                <option value="Serviços Profissionais">Serviços Profissionais</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Tamanho do time */}
            <div className="form-group">
              <label htmlFor="tamanho_time" className="block text-sm font-semibold text-gray-700 mb-2">
                Tamanho do time comercial (opcional)
              </label>
              <select
                id="tamanho_time"
                name="tamanho_time"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              >
                <option value="">Selecione</option>
                <option value="Só eu">Só eu</option>
                <option value="2–3">2–3</option>
                <option value="4–7">4–7</option>
                <option value="8 ou mais">8 ou mais</option>
              </select>
            </div>

            {/* Faturamento */}
            <div className="form-group">
              <label htmlFor="faturamento" className="block text-sm font-semibold text-gray-700 mb-2">
                Faturamento mensal (opcional)
              </label>
              <select
                id="faturamento"
                name="faturamento"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              >
                <option value="">Selecione</option>
                <option value="Até R$30k">Até R$30k</option>
                <option value="R$30–100k">R$30–100k</option>
                <option value="R$100–300k">R$100–300k</option>
                <option value="R$300–500k">R$300–500k</option>
                <option value="R$500k+">R$500k+</option>
              </select>
            </div>

            {/* Desafio */}
            <div className="form-group">
              <label htmlFor="desafio" className="block text-sm font-semibold text-gray-700 mb-2">
                Qual seu maior desafio hoje no comercial? (opcional)
              </label>
              <textarea
                id="desafio"
                name="desafio"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none"
                placeholder="Descreva brevemente seu principal desafio..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent-hover text-white px-8 py-4 text-lg font-bold uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar diagnóstico express"}
            </button>

            {/* Benefits/Security microcopy */}
            <div className="space-y-3 mt-6">
              <div className="text-sm text-gray-700 space-y-1">
                <p className="flex items-center gap-2">
                  <span className="text-green-600">✔</span>
                  <span>Leva menos de 5 minutos</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-600">✔</span>
                  <span>Diagnóstico gratuito, sem compromisso</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-600">✔</span>
                  <span>Você recebe recomendações práticas para aplicar no seu time</span>
                </p>
              </div>

              {/* Privacy note */}
              <p className="text-xs text-gray-500 text-center pt-2">
                Seus dados estão seguros e não serão compartilhados com terceiros.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticFormSection;
