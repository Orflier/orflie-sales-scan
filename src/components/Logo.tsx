import orflieCircle from "@/assets/orflie-logo-circle.png";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

const Logo = ({ variant = "light", className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={orflieCircle} alt="Orflie Logo" className="h-10 w-10" />
      <div className="flex flex-col leading-tight">
        <span className={`text-2xl font-bold tracking-tight ${variant === "light" ? "text-white" : "text-primary"}`}>
          orflie
        </span>
        <span className={`text-sm font-medium ${variant === "light" ? "text-white/90" : "text-primary/90"}`}>
          Audit
        </span>
      </div>
    </div>
  );
};

export default Logo;
