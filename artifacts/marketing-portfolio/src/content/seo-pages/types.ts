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

export type SeoPainPoint = {
  title: string;
  description: string;
};

export type SeoWhyChoose = {
  title: string;
  description: string;
};

export type SeoCaseResult = {
  headline: string;
  industry: string;
  metrics: { label: string; before: string; after: string }[];
  summary: string;
};

export type SeoPageContent = {
  slug: string;
  path: string;
  /** Primary commercial keyword — used in H1 and SEO checks */
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  schemaServiceType: string;
  badge: string;
  /** H1 must contain exact target keyword */
  h1: string;
  heroSubtext: string;
  heroStats: { value: string; label: string }[];
  /** Trust-focused intro paragraphs; first should mention target keyword */
  intro: string[];
  painPoints: SeoPainPoint[];
  solution: {
    title: string;
    paragraphs: string[];
    bullets: string[];
  };
  servicesIncluded: SeoServiceItem[];
  whyChoose: SeoWhyChoose[];
  process: SeoProcessStep[];
  caseResults: SeoCaseResult[];
  faqs: SeoFaq[];
  /** Closing paragraphs — reinforce target keyword naturally */
  conclusion: string[];
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
