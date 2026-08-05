import { Check, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckoutButton } from "@/components/pricing/checkout-button";
import type { MonthlyPackage } from "@/content/pricing-content";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  pkg: MonthlyPackage;
  onCheckout: (productId: string) => void;
  loadingProductId: string | null;
};

export function PricingCard({ pkg, onCheckout, loadingProductId }: PricingCardProps) {
  return (
    <div className="relative h-full">
      {pkg.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            <Star size={10} fill="currentColor" /> Most Popular
          </span>
        </div>
      )}

      <Card
        className={cn(
          "h-full flex flex-col transition-all duration-300 hover:-translate-y-1",
          pkg.popular
            ? "border-secondary/50 shadow-[0_0_30px_rgba(139,92,246,0.2)] bg-card/80"
            : "border-white/10 bg-background/60 hover:border-white/20 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]",
        )}
      >
        <CardContent className="p-5 sm:p-7 flex flex-col h-full">
          <div className="mb-5">
            <h3 className="text-xl font-bold leading-snug mb-3">{pkg.name}</h3>
            <div className="flex items-baseline gap-2 mb-3">
              <span
                className={cn(
                  "text-4xl font-extrabold",
                  pkg.popular ? "text-secondary" : "text-primary",
                )}
              >
                ${pkg.price}
              </span>
              <span className="text-muted-foreground text-sm font-medium">/ month</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{pkg.idealFor}</p>
          </div>

          <ul className="space-y-2.5 mb-8 flex-1">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <div
                  className={cn(
                    "mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center",
                    pkg.popular ? "bg-secondary/20 text-secondary" : "bg-primary/20 text-primary",
                  )}
                >
                  <Check size={10} strokeWidth={3} />
                </div>
                <span className="text-foreground/85">{feature}</span>
              </li>
            ))}
          </ul>

          <CheckoutButton
            productId={pkg.id}
            label={pkg.ctaLabel}
            onCheckout={onCheckout}
            loadingProductId={loadingProductId}
            variant={pkg.popular ? "secondary" : "outline"}
          />

          <p className="text-[11px] text-muted-foreground text-center mt-3">
            Recurring monthly subscription · Secure Stripe checkout
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
