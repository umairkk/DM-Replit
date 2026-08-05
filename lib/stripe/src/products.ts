export type CheckoutMode = "subscription" | "payment";

export type StripeProductConfig = {
  id: string;
  envVar: string;
  mode: CheckoutMode;
};

/** Maps checkout product IDs to Stripe Price ID environment variables (server-side only). */
export const STRIPE_PRODUCTS: Record<string, StripeProductConfig> = {
  "meta-services": {
    id: "meta-services",
    envVar: "STRIPE_PRICE_META_SERVICES",
    mode: "subscription",
  },
  "meta-ecommerce": {
    id: "meta-ecommerce",
    envVar: "STRIPE_PRICE_META_ECOMMERCE",
    mode: "subscription",
  },
  "google-lead-gen": {
    id: "google-lead-gen",
    envVar: "STRIPE_PRICE_GOOGLE_LEAD_GEN",
    mode: "subscription",
  },
  "google-ecommerce": {
    id: "google-ecommerce",
    envVar: "STRIPE_PRICE_GOOGLE_ECOMMERCE",
    mode: "subscription",
  },
  "growth-package": {
    id: "growth-package",
    envVar: "STRIPE_PRICE_GROWTH_PACKAGE",
    mode: "subscription",
  },
  "google-ads-audit": {
    id: "google-ads-audit",
    envVar: "STRIPE_PRICE_GOOGLE_ADS_AUDIT",
    mode: "payment",
  },
  "meta-ads-audit": {
    id: "meta-ads-audit",
    envVar: "STRIPE_PRICE_META_ADS_AUDIT",
    mode: "payment",
  },
  "conversion-tracking-setup": {
    id: "conversion-tracking-setup",
    envVar: "STRIPE_PRICE_CONVERSION_TRACKING_SETUP",
    mode: "payment",
  },
  "google-ads-setup": {
    id: "google-ads-setup",
    envVar: "STRIPE_PRICE_GOOGLE_ADS_SETUP",
    mode: "payment",
  },
  "meta-ads-setup": {
    id: "meta-ads-setup",
    envVar: "STRIPE_PRICE_META_ADS_SETUP",
    mode: "payment",
  },
  "merchant-center-fix": {
    id: "merchant-center-fix",
    envVar: "STRIPE_PRICE_MERCHANT_CENTER_FIX",
    mode: "payment",
  },
  "merchant-center-suspension-recovery": {
    id: "merchant-center-suspension-recovery",
    envVar: "STRIPE_PRICE_MERCHANT_CENTER_SUSPENSION",
    mode: "payment",
  },
  "landing-page-audit": {
    id: "landing-page-audit",
    envVar: "STRIPE_PRICE_LANDING_PAGE_AUDIT",
    mode: "payment",
  },
  "consulting-5h": {
    id: "consulting-5h",
    envVar: "STRIPE_PRICE_CONSULTING_5H",
    mode: "payment",
  },
  "consulting-10h": {
    id: "consulting-10h",
    envVar: "STRIPE_PRICE_CONSULTING_10H",
    mode: "payment",
  },
  "consulting-20h": {
    id: "consulting-20h",
    envVar: "STRIPE_PRICE_CONSULTING_20H",
    mode: "payment",
  },
};

export function isValidProductId(productId: string): productId is keyof typeof STRIPE_PRODUCTS {
  return productId in STRIPE_PRODUCTS;
}
