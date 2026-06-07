import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function SectionBadge({ icon: Icon, children, variant = "primary", className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4",
        variant === "primary" && "bg-primary/10 border border-primary/20 text-primary",
        variant === "secondary" && "bg-secondary/10 border border-secondary/20 text-secondary",
        className,
      )}
    >
      <Icon size={14} />
      {children}
    </div>
  );
}
