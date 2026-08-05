import { motion } from "framer-motion";
import {
  Building2,
  Check,
  CreditCard,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookCallButton } from "@/components/cro/book-call-button";
import { CheckoutButton } from "@/components/pricing/checkout-button";
import { PricingCard } from "@/components/pricing/pricing-card";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import {
  AGENCY_PACKAGE,
  BILLING_NOTICE,
  MONTHLY_PACKAGES,
  ONE_TIME_PRODUCTS,
} from "@/content/pricing-content";
import { useStripeCheckout } from "@/hooks/use-stripe-checkout";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

type PricingSectionProps = {
  onScheduleConsultation: () => void;
};

export function PricingSection({ onScheduleConsultation }: PricingSectionProps) {
  const { checkout, loadingProductId, error, clearError } = useStripeCheckout();

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <CreditCard size={14} /> Pricing & Checkout
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Monthly digital marketing management packages
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional Google Ads and Meta Ads management with transparent monthly pricing,
            recurring subscriptions, and secure Stripe checkout.
          </p>
        </motion.div>

        {/* Billing notice */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 px-5 py-4 text-sm text-foreground/90 leading-relaxed flex gap-3">
            <RefreshCw size={18} className="shrink-0 text-amber-400 mt-0.5" />
            <p>{BILLING_NOTICE}</p>
          </div>
        </motion.div>

        {error && (
          <div className="max-w-4xl mx-auto mb-8 rounded-xl border border-destructive/30 bg-destructive/10 px-5 py-4 text-sm text-destructive flex items-start justify-between gap-4">
            <p>{error}</p>
            <button
              type="button"
              onClick={clearError}
              className="text-destructive/80 hover:text-destructive underline underline-offset-2 shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Monthly packages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {MONTHLY_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={FADE_UP}
              className={pkg.id === "growth-package" ? "md:col-span-2 xl:col-span-1" : undefined}
            >
              <PricingCard
                pkg={pkg}
                onCheckout={checkout}
                loadingProductId={loadingProductId}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-muted-foreground"
        >
          {[
            { icon: ShieldCheck, text: "Stripe-secured checkout" },
            { icon: RefreshCw, text: "Cancel before next billing cycle" },
            { icon: Star, text: "Top Rated on Upwork" },
            { icon: Sparkles, text: "Weekly optimization included" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon size={15} className="text-primary" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Agency white-label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 size={14} /> Agency Partner
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{AGENCY_PACKAGE.name}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">{AGENCY_PACKAGE.description}</p>
          </div>

          <Card className="border-secondary/30 bg-gradient-to-br from-card/80 via-background/70 to-secondary/5 shadow-[0_0_40px_rgba(139,92,246,0.12)]">
            <CardContent className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-secondary mb-6">
                    {AGENCY_PACKAGE.priceLabel}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {AGENCY_PACKAGE.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <div className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="text-foreground/85">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-background/50 p-6 sm:p-8">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Pricing varies by account volume and scope. Book a consultation to discuss
                    white-label capacity, reporting, and onboarding for your agency clients.
                  </p>
                  <Button
                    type="button"
                    onClick={onScheduleConsultation}
                    className="w-full h-12 rounded-xl font-semibold bg-secondary text-secondary-foreground hover:opacity-90 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                  >
                    {AGENCY_PACKAGE.ctaLabel}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* One-time products */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="mt-24"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Audits, Setup & Consulting</h3>
            <p className="text-muted-foreground">
              One-time services for audits, account setup, Merchant Center fixes, and consulting
              hours. Secure Stripe checkout — not recurring subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {ONE_TIME_PRODUCTS.map((product) => (
              <Card
                key={product.id}
                className="h-full border-white/10 bg-background/60 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 leading-snug">{product.name}</h4>
                    <p className="text-2xl font-bold text-primary">${product.price}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {product.description}
                  </p>
                  <CheckoutButton
                    productId={product.id}
                    label="Buy Now"
                    onCheckout={checkout}
                    loadingProductId={loadingProductId}
                    variant="outline"
                    className="h-10"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Pricing FAQ</h3>
            <p className="text-muted-foreground">Common questions about billing, ad spend, and onboarding.</p>
          </div>
          <PricingFaq />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="mt-12 text-center"
        >
          <BookCallButton
            onClick={onScheduleConsultation}
            label="Not sure which package fits? Book a free call"
          />
        </motion.div>
      </div>
    </section>
  );
}
