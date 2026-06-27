export const HERO_STATS = [
  { value: "$50M+", label: "Revenue Generated" },
  { value: "$15M+", label: "Ad Spend Managed" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Job Success" },
] as const;

export const ALL_SERVICE_LINKS = [
  { href: "/google-ads-consultant", label: "Google Ads Consultant" },
  { href: "/google-merchant-center-suspension-fix", label: "Merchant Center Suspension Fix" },
  { href: "/google-shopping-ads-expert", label: "Google Shopping Ads Expert" },
  { href: "/performance-max-specialist", label: "Performance Max Specialist" },
  { href: "/meta-ads-expert", label: "Meta Ads Expert" },
  { href: "/ai-automation-agency", label: "AI Automation Agency" },
  { href: "/ecommerce-seo-services", label: "Ecommerce SEO Services" },
  { href: "/shopify-google-ads-expert", label: "Shopify Google Ads Expert" },
] as const;

export function relatedExcept(currentPath: string) {
  return ALL_SERVICE_LINKS.filter((l) => l.href !== currentPath).slice(0, 5);
}

export const BRAND = {
  name: "Umair Altaf",
  email: "info@umairaltaf.com",
  siteUrl: "https://umairaltaf.com",
  yearsExperience: "10+",
  revenue: "$50M+",
  adSpend: "$15M+",
} as const;
