import Logo from "../Logo";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Logo variant="light" className="mb-4" />
            <p className="text-white/80 leading-relaxed max-w-md">
              Transformando operações comerciais em máquinas de crescimento previsível. 
              Auditorias práticas, resultados reais.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("beneficios")}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors">
                <Mail size={18} />
                <a href="mailto:comercial@orflie.com.br">comercial@orflie.com.br</a>
              </li>
              <li className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors">
                <Phone size={18} />
                <a href="https://api.whatsapp.com/send?phone=5515981103458&text=Ol%C3%A1%2C%20vim%20pela%20LP%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20da%20Orflie%20Audit" target="_blank" rel="noopener noreferrer">+55 15 98110-3458</a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Orflie Audit. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
