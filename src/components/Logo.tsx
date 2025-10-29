import orflieCircle from "@/assets/orflie-logo-circle.png";
interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}
const Logo = ({
  variant = "light",
  className = ""
}: LogoProps) => {
  return <div className={`flex items-center gap-2 ${className}`}>
      <img src={orflieCircle} alt="Orflie Logo" className="h-10 w-10" />
      <div className="flex flex-col leading-tight">
        
        
      </div>
    </div>;
};
export default Logo;