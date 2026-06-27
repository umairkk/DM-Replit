export type SeoSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type SeoServiceItem = {
  title: string;
  description: string;
};

export type SeoProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type SeoFaq = {
  q: string;
  a: string;
};

export type SeoRelatedLink = {
  href: string;
  label: string;
};

export type SeoPageContent = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  schemaServiceType: string;
  badge: string;
  h1: string;
  heroSubtext: string;
  heroStats: { value: string; label: string }[];
  intro: string[];
  sections: SeoSection[];
  services: SeoServiceItem[];
  process: SeoProcessStep[];
  faqs: SeoFaq[];
  relatedLinks: SeoRelatedLink[];
};

export type SeoPageSlug =
  | "google-ads-consultant"
  | "google-merchant-center-suspension-fix"
  | "google-shopping-ads-expert"
  | "performance-max-specialist"
  | "meta-ads-expert"
  | "ai-automation-agency"
  | "ecommerce-seo-services"
  | "shopify-google-ads-expert";
