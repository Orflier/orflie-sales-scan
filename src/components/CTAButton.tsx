import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "xl";
  showArrow?: boolean;
}

const CTAButton = ({ 
  children, 
  className = "", 
  variant = "primary",
  size = "default",
  showArrow = false 
}: CTAButtonProps) => {
  const sizeClasses = {
    default: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
    xl: "px-12 py-6 text-xl"
  };

  const variantClasses = {
    primary: "bg-accent hover:bg-accent-hover text-white",
    secondary: "bg-white hover:bg-secondary text-primary"
  };

  return (
    <Button
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        font-bold uppercase rounded-full shadow-lg hover:shadow-xl
        transition-all duration-300 hover:scale-105
        ${className}
      `}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2" />}
    </Button>
  );
};

export default CTAButton;
