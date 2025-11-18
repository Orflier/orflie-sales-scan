import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CTAButton from "./CTAButton";
import { AlertCircle, Clock } from "lucide-react";

const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Detecta quando o mouse sai pelo topo da página
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[420px] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white border-2 border-accent p-4 sm:p-6">
        <DialogHeader>
          <div className="flex items-center justify-center mb-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
          </div>
          <DialogTitle className="text-lg sm:text-xl font-bold text-center text-primary leading-tight">
            ⚠️ ESPERE! NÃO PERCA ESSA OPORTUNIDADE
          </DialogTitle>
          <DialogDescription className="text-center space-y-2.5 sm:space-y-3 pt-2 sm:pt-3">
            <p className="text-sm sm:text-base font-semibold text-foreground">
              Você está a um clique de descobrir os vazamentos que podem estar custando{" "}
              <span className="text-accent font-bold whitespace-nowrap">R$ 75 mil/mês</span> para sua empresa!
            </p>
            
            <div className="bg-accent/10 p-2.5 sm:p-3 rounded-lg border-l-4 border-accent">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <p className="font-bold text-xs sm:text-sm text-foreground">ATENÇÃO: Vagas Limitadas</p>
              </div>
              <p className="text-xs text-foreground/80">
                Só estamos aceitando <strong>3 novas auditorias este mês</strong> para garantir 
                resultados excepcionais.
              </p>
            </div>

            <div className="space-y-1.5 text-left bg-primary/5 p-2.5 sm:p-3 rounded-lg">
              <p className="font-semibold text-xs sm:text-sm text-foreground">✅ Ao preencher você garante:</p>
              <ul className="text-xs text-foreground/80 space-y-0.5 ml-3">
                <li>• Diagnóstico gratuito de 15 min</li>
                <li>• Análise dos 7 vazamentos</li>
                <li>• Plano de ação personalizado</li>
                <li>• Sem compromisso</li>
              </ul>
            </div>

            <div className="pt-2 space-y-2">
              <CTAButton 
                action="form"
                size="lg"
                className="w-full text-sm sm:text-base"
                showArrow
              >
                GARANTIR MINHA VAGA
              </CTAButton>
              
              <CTAButton 
                action="whatsapp"
                variant="secondary"
                size="lg"
                className="w-full border-2 border-accent text-xs sm:text-sm"
                whatsappMessage="Olá, estou com dúvidas sobre a Auditoria Comercial da Orflie"
              >
                TIRAR DÚVIDAS
              </CTAButton>
              
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors underline w-full"
              >
                Não, prefiro continuar perdendo dinheiro
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentModal;
