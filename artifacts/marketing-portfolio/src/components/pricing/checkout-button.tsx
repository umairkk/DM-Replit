import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CheckoutButtonProps = {
  productId: string;
  label: string;
  onCheckout: (productId: string) => void;
  loadingProductId: string | null;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export function CheckoutButton({
  productId,
  label,
  onCheckout,
  loadingProductId,
  variant = "primary",
  className,
}: CheckoutButtonProps) {
  const isLoading = loadingProductId === productId;
  const isDisabled = loadingProductId !== null;

  return (
    <Button
      type="button"
      disabled={isDisabled}
      onClick={() => onCheckout(productId)}
      className={cn(
        "w-full h-12 rounded-xl font-semibold text-sm transition-all",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:opacity-90 shadow-[0_0_20px_rgba(59,130,246,0.35)]",
        variant === "secondary" &&
          "bg-secondary text-secondary-foreground hover:opacity-90 shadow-[0_0_20px_rgba(139,92,246,0.35)]",
        variant === "outline" &&
          "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20",
        className,
      )}
    >
      {isLoading ? (
        <>
          <Loader2 size={16} className="mr-2 animate-spin" />
          Redirecting to Stripe…
        </>
      ) : (
        label
      )}
    </Button>
  );
}
