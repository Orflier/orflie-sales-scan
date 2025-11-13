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
      <DialogContent className="sm:max-w-[500px] bg-white border-2 border-accent">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-accent" />
            </div>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-center text-primary">
            ⚠️ ESPERE! NÃO PERCA ESSA OPORTUNIDADE
          </DialogTitle>
          <DialogDescription className="text-center space-y-4 pt-4">
            <p className="text-lg font-semibold text-foreground">
              Você está a um clique de descobrir os vazamentos que podem estar custando{" "}
              <span className="text-accent font-bold">R$ 75 mil/mês</span> para sua empresa!
            </p>
            
            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-accent" />
                <p className="font-bold text-foreground">ATENÇÃO: Vagas Limitadas</p>
              </div>
              <p className="text-sm text-foreground/80">
                Só estamos aceitando <strong>3 novas auditorias este mês</strong> para garantir 
                resultados excepcionais. Preencha o formulário agora antes que as vagas acabem!
              </p>
            </div>

            <div className="space-y-2 text-left bg-primary/5 p-4 rounded-lg">
              <p className="font-semibold text-foreground">✅ Ao preencher o formulário você garante:</p>
              <ul className="text-sm text-foreground/80 space-y-1 ml-4">
                <li>• Diagnóstico gratuito de 15 minutos</li>
                <li>• Análise dos 7 vazamentos de receita</li>
                <li>• Plano de ação personalizado</li>
                <li>• Sem compromisso ou taxas ocultas</li>
              </ul>
            </div>

            <div className="pt-4">
              <CTAButton 
                action="form"
                size="lg"
                className="w-full"
                showArrow
              >
                GARANTIR MINHA VAGA AGORA
              </CTAButton>
              
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors underline"
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
