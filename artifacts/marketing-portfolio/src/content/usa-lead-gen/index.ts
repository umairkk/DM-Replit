import type { SeoPageContent } from "@/content/seo-pages/types";
import { attachRelatedIndustries, buildUsaLeadGenPage } from "./build-page";
import { USA_LEAD_GEN_INDUSTRIES } from "./industries-data";

export const USA_LEAD_GEN_HUB_PATH = "/usa-lead-generation";

export const USA_LEAD_GEN_PAGES: Record<string, SeoPageContent> = Object.fromEntries(
  USA_LEAD_GEN_INDUSTRIES.map((industry) => {
    const base = buildUsaLeadGenPage(industry);
    const page = attachRelatedIndustries(base, USA_LEAD_GEN_INDUSTRIES, industry.slug);
    return [industry.slug, page];
  }),
);

export const USA_LEAD_GEN_FOOTER_LINKS = USA_LEAD_GEN_INDUSTRIES.map((industry) => ({
  href: `${USA_LEAD_GEN_HUB_PATH}/${industry.slug}`,
  label: industry.industry,
  priority: industry.priority,
}));

export { USA_LEAD_GEN_INDUSTRIES } from "./industries-data";
