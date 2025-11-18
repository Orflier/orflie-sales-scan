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
      <DialogContent className="sm:max-w-[420px] max-h-[90vh] overflow-y-auto bg-white border-2 border-accent">
        <DialogHeader>
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-accent" />
            </div>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-primary">
            ⚠️ ESPERE! NÃO PERCA ESSA OPORTUNIDADE
          </DialogTitle>
          <DialogDescription className="text-center space-y-3 pt-3">
            <p className="text-base font-semibold text-foreground">
              Você está a um clique de descobrir os vazamentos que podem estar custando{" "}
              <span className="text-accent font-bold">R$ 75 mil/mês</span> para sua empresa!
            </p>
            
            <div className="bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-accent" />
                <p className="font-bold text-sm text-foreground">ATENÇÃO: Vagas Limitadas</p>
              </div>
              <p className="text-xs text-foreground/80">
                Só estamos aceitando <strong>3 novas auditorias este mês</strong> para garantir 
                resultados excepcionais. Preencha o formulário agora antes que as vagas acabem!
              </p>
            </div>

            <div className="space-y-2 text-left bg-primary/5 p-3 rounded-lg">
              <p className="font-semibold text-sm text-foreground">✅ Ao preencher o formulário você garante:</p>
              <ul className="text-xs text-foreground/80 space-y-1 ml-4">
                <li>• Diagnóstico gratuito de 15 minutos</li>
                <li>• Análise dos 7 vazamentos de receita</li>
                <li>• Plano de ação personalizado</li>
                <li>• Sem compromisso ou taxas ocultas</li>
              </ul>
            </div>

            <div className="pt-3 space-y-2">
              <CTAButton 
                action="form"
                size="lg"
                className="w-full"
                showArrow
              >
                GARANTIR MINHA VAGA AGORA
              </CTAButton>
              
              <CTAButton 
                action="whatsapp"
                variant="secondary"
                size="lg"
                className="w-full border-2 border-accent"
                whatsappMessage="Olá, estou com dúvidas sobre a Auditoria Comercial da Orflie"
              >
                TIRAR DÚVIDAS PELO WHATSAPP
              </CTAButton>
              
              <button
                onClick={() => setIsOpen(false)}
                className="mt-1 text-xs text-muted-foreground hover:text-foreground transition-colors underline w-full"
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
