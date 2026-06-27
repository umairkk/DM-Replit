import type { SeoPageContent, SeoPageSlug } from "./types";
import { googleAdsConsultantPage } from "./google-ads-consultant";
import { googleMerchantCenterSuspensionFixPage } from "./google-merchant-center-suspension-fix";
import { googleShoppingAdsExpertPage } from "./google-shopping-ads-expert";
import { performanceMaxSpecialistPage } from "./performance-max-specialist";
import { metaAdsExpertPage } from "./meta-ads-expert";
import { aiAutomationAgencyPage } from "./ai-automation-agency";
import { ecommerceSeoServicesPage } from "./ecommerce-seo-services";
import { shopifyGoogleAdsExpertPage } from "./shopify-google-ads-expert";

export const SEO_PAGES: Record<SeoPageSlug, SeoPageContent> = {
  "google-ads-consultant": googleAdsConsultantPage,
  "google-merchant-center-suspension-fix": googleMerchantCenterSuspensionFixPage,
  "google-shopping-ads-expert": googleShoppingAdsExpertPage,
  "performance-max-specialist": performanceMaxSpecialistPage,
  "meta-ads-expert": metaAdsExpertPage,
  "ai-automation-agency": aiAutomationAgencyPage,
  "ecommerce-seo-services": ecommerceSeoServicesPage,
  "shopify-google-ads-expert": shopifyGoogleAdsExpertPage,
};

export const SEO_PAGE_PATHS = Object.values(SEO_PAGES).map((p) => p.path);

/** Header / nav links for SEO service landing pages */
export const SERVICE_NAV_LINKS = Object.values(SEO_PAGES).map((p) => ({
  href: p.path,
  label: p.badge,
}));

export function getSeoPageByPath(path: string): SeoPageContent | undefined {
  return Object.values(SEO_PAGES).find((p) => p.path === path);
}

export * from "./types";
