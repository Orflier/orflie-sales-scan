import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "xl";
  showArrow?: boolean;
  action?: "whatsapp" | "form";
  whatsappMessage?: string;
}

const CTAButton = ({ 
  children, 
  className = "", 
  variant = "primary",
  size = "default",
  showArrow = false,
  action = "form",
  whatsappMessage = "Olá, gostaria de saber mais sobre a Auditoria Comercial"
}: CTAButtonProps) => {
  const phoneNumber = "5515981103458";
  const href = action === "whatsapp" 
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : "#diagnostico-express";
  const sizeClasses = {
    default: "px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base",
    lg: "px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg",
    xl: "px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-xl"
  };

  const variantClasses = {
    primary: "bg-accent hover:bg-accent-hover text-white",
    secondary: "bg-white hover:bg-secondary text-primary"
  };

  return (
    <Button
      asChild
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        font-bold uppercase rounded-full shadow-lg hover:shadow-xl
        transition-all duration-300 hover:scale-105
        w-full sm:w-auto whitespace-nowrap leading-tight
        ${className}
      `}
    >
      <a 
        href={href} 
        {...(action === "whatsapp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex items-center justify-center"
      >
        {children}
        {showArrow && <ArrowRight className="ml-2 flex-shrink-0" />}
      </a>
    </Button>
  );
};

export default CTAButton;
