import { useParams } from "wouter";
import NotFound from "@/pages/not-found";
import { SeoRoutePage } from "@/pages/SeoRoutePage";
import { USA_LEAD_GEN_PAGES } from "@/content/usa-lead-gen";

export default function UsaLeadGenIndustryPage() {
  const params = useParams<{ slug?: string }>();
  const slug = params.slug ?? "";
  const page = USA_LEAD_GEN_PAGES[slug];

  if (!page) {
    return <NotFound />;
  }

  return <SeoRoutePage page={page} />;
}
