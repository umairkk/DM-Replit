import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BookCallButtonProps = {
  onClick: () => void;
  size?: "default" | "sm" | "lg";
  variant?: "primary" | "outline";
  className?: string;
  showIcon?: boolean;
  label?: string;
};

export function BookCallButton({
  onClick,
  size = "lg",
  variant = "primary",
  className,
  showIcon = true,
  label = "Book Free Strategy Call",
}: BookCallButtonProps) {
  return (
    <Button
      type="button"
      size={size}
      variant={variant === "outline" ? "outline" : "default"}
      onClick={onClick}
      className={cn(
        "rounded-full font-semibold transition-all",
        variant === "primary" &&
          "shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-primary/50",
        variant === "outline" && "border-white/10 hover:bg-white/5",
        className,
      )}
    >
      {showIcon && <Calendar size={size === "sm" ? 14 : 16} className="mr-2" />}
      {label}
      {variant === "primary" && size !== "sm" && <ArrowRight size={16} className="ml-2" />}
    </Button>
  );
}
