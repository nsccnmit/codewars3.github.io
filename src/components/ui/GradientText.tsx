
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "blue" | "purple";
}

const GradientText = ({ 
  children, 
  className,
  variant = "blue" 
}: GradientTextProps) => {
  return (
    <span className={cn(
      variant === "blue" ? "gradient-text" : "purple-gradient-text",
      className
    )}>
      {children}
    </span>
  );
};

export default GradientText;
