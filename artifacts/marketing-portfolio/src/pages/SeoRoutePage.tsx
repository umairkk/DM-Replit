import { SeoPageView } from "@/components/seo/seo-page-view";
import type { SeoPageContent } from "@/content/seo-pages/types";

type SeoRoutePageProps = {
  page: SeoPageContent;
};

export function SeoRoutePage({ page }: SeoRoutePageProps) {
  return <SeoPageView page={page} />;
}
