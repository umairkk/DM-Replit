export type MonthlyPackage = {
  id: string;
  name: string;
  price: number;
  idealFor: string;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
};

export type OneTimeProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type PricingFaqItem = {
  question: string;
  answer: string;
};

export const BILLING_NOTICE =
  "All plans are billed monthly and will automatically renew until canceled. Clients may cancel their subscription before the next billing cycle.";

export const MONTHLY_PACKAGES: MonthlyPackage[] = [
  {
    id: "meta-services",
    name: "Meta Ads for Service Businesses",
    price: 199,
    idealFor:
      "Local businesses, contractors, healthcare providers, legal firms, real estate companies, and other service-based businesses.",
    features: [
      "Campaign strategy and planning",
      "Audience research and targeting",
      "Campaign creation and management",
      "Ad copywriting and testing",
      "Meta Pixel monitoring",
      "Conversion tracking",
      "Weekly campaign optimization",
      "Monthly performance report",
      "Email support",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "meta-ecommerce",
    name: "Meta Ads for E-commerce",
    price: 299,
    idealFor: "Shopify, WooCommerce, and other e-commerce stores.",
    features: [
      "Meta advertising strategy",
      "Catalog and product feed management",
      "Audience and retargeting management",
      "Campaign creation and optimization",
      "Creative and ad copy recommendations",
      "Meta Pixel monitoring",
      "Conversion tracking",
      "Weekly campaign optimization",
      "Monthly performance report",
      "Email support",
    ],
    ctaLabel: "Start Growing",
  },
  {
    id: "google-lead-gen",
    name: "Google Ads Lead Generation",
    price: 350,
    idealFor: "Service-based businesses looking to generate qualified leads.",
    features: [
      "Keyword research",
      "Campaign creation and management",
      "Responsive Search Ads",
      "Ad assets and extensions",
      "Negative keyword management",
      "Conversion tracking monitoring",
      "Weekly campaign optimization",
      "Monthly performance report",
      "Email support",
    ],
    ctaLabel: "Generate More Leads",
  },
  {
    id: "google-ecommerce",
    name: "Google Ads for E-commerce",
    price: 400,
    idealFor: "E-commerce businesses looking to increase online sales.",
    features: [
      "Google Shopping and Performance Max management",
      "Google Merchant Center monitoring",
      "Product feed optimization",
      "Campaign management",
      "Audience signal optimization",
      "Conversion tracking monitoring",
      "Weekly campaign optimization",
      "Monthly performance report",
      "Email support",
    ],
    ctaLabel: "Grow Online Sales",
  },
  {
    id: "growth-package",
    name: "Meta & Google Growth Package",
    price: 999,
    popular: true,
    idealFor: "Established businesses ready to scale across Google and Meta.",
    features: [
      "Google Ads management",
      "Meta Ads management",
      "Campaign creation and ongoing management",
      "Weekly campaign optimization",
      "Budget and bid optimization",
      "Audience testing",
      "Conversion tracking monitoring",
      "Monthly performance report",
      "Monthly strategy call",
      "Priority email support",
    ],
    ctaLabel: "Scale My Business",
  },
];

export const AGENCY_PACKAGE = {
  name: "Agency White-Label Package",
  priceLabel: "Starting at $1,999/month",
  description:
    "Designed for marketing agencies that need a reliable and experienced white-label advertising partner.",
  features: [
    "Dedicated account manager",
    "White-label reporting",
    "Google Ads management",
    "Meta Ads management",
    "Unlimited communication",
    "Client meeting support",
    "Priority turnaround",
    "Monthly strategy sessions",
    "Slack and email support",
  ],
  ctaLabel: "Schedule a Consultation",
};

export const ONE_TIME_PRODUCTS: OneTimeProduct[] = [
  {
    id: "google-ads-audit",
    name: "Google Ads Audit",
    price: 199,
    description: "In-depth account review with prioritized fixes and growth opportunities.",
  },
  {
    id: "meta-ads-audit",
    name: "Meta Ads Audit",
    price: 199,
    description: "Campaign, audience, and tracking audit for Meta advertising accounts.",
  },
  {
    id: "conversion-tracking-setup",
    name: "Conversion Tracking Setup",
    price: 299,
    description: "GA4, GTM, and conversion event setup for reliable reporting.",
  },
  {
    id: "google-ads-setup",
    name: "Google Ads Setup",
    price: 499,
    description: "Full Google Ads account structure, campaigns, and tracking foundation.",
  },
  {
    id: "meta-ads-setup",
    name: "Meta Ads Setup",
    price: 499,
    description: "Meta Business Manager, Pixel, and campaign launch setup.",
  },
  {
    id: "merchant-center-fix",
    name: "Merchant Center Fix",
    price: 349,
    description: "Product feed and Merchant Center issue resolution.",
  },
  {
    id: "merchant-center-suspension-recovery",
    name: "Merchant Center Suspension Recovery",
    price: 699,
    description: "Suspension diagnosis, fixes, and reinstatement support.",
  },
  {
    id: "landing-page-audit",
    name: "Landing Page Audit",
    price: 249,
    description: "Conversion-focused landing page review with actionable CRO recommendations.",
  },
  {
    id: "consulting-5h",
    name: "5-Hour Consulting Pack",
    price: 175,
    description: "Flexible consulting hours for strategy, audits, or campaign guidance.",
  },
  {
    id: "consulting-10h",
    name: "10-Hour Consulting Pack",
    price: 350,
    description: "Extended consulting block for deeper optimization and implementation support.",
  },
  {
    id: "consulting-20h",
    name: "20-Hour Consulting Pack",
    price: 700,
    description: "High-touch consulting package for multi-channel growth projects.",
  },
];

export const PRICING_FAQ: PricingFaqItem[] = [
  {
    question: "Are these monthly services?",
    answer:
      "Yes. The main advertising management packages are billed monthly and continue until canceled.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes. Clients may cancel before the next billing cycle to prevent the following month's charge.",
  },
  {
    question: "Is advertising spend included?",
    answer:
      "No. Advertising spend is paid directly by the client to Google or Meta and is separate from the monthly management fee.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "No specific number of leads, sales, or return on ad spend is guaranteed. Performance depends on the offer, website, budget, industry, location, competition, and market conditions.",
  },
  {
    question: "What happens after checkout?",
    answer:
      "After successful payment, you will be redirected to an onboarding page to share business details, website URL, advertising goals, account access information, target locations, budget, and contact details so we can get started quickly.",
  },
];
