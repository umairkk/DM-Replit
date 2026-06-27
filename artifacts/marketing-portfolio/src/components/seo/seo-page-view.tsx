import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RelatedServices } from "@/components/seo/related-services";
import { ServiceBenefits } from "@/components/seo/service-benefits";
import { ServiceCaseResults } from "@/components/seo/service-case-results";
import { ServiceConclusion } from "@/components/seo/service-conclusion";
import { ServiceCTA } from "@/components/seo/service-cta";
import { ServiceFAQ } from "@/components/seo/service-faq";
import { ServiceHero } from "@/components/seo/service-hero";
import { ServiceIncluded } from "@/components/seo/service-included";
import { ServiceIntro } from "@/components/seo/service-intro";
import { ServicePainPoints } from "@/components/seo/service-pain-points";
import { ServiceProcess } from "@/components/seo/service-process";
import { ServiceSolution } from "@/components/seo/service-solution";
import { goToSchedule } from "@/components/seo/service-utils";
import type { SeoPageContent } from "@/content/seo-pages/types";
import { applyPageSeo, resetHomeSeo } from "@/lib/seo-head";

type SeoPageViewProps = {
  page: SeoPageContent;
};

export function SeoPageView({ page }: SeoPageViewProps) {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    applyPageSeo(page);
    return () => resetHomeSeo();
  }, [page]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateHomeSection = (id: string) => {
    if (location !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <SiteHeader scrolled={scrolled} onNavigate={navigateHomeSection} />

      <main>
        <ServiceHero page={page} onBookCall={goToSchedule} />
        <ServiceIntro paragraphs={page.intro} />
        <ServicePainPoints points={page.painPoints} targetKeyword={page.targetKeyword} onBookCall={goToSchedule} />
        <ServiceSolution solution={page.solution} targetKeyword={page.targetKeyword} onBookCall={goToSchedule} />
        <ServiceIncluded items={page.servicesIncluded} onBookCall={goToSchedule} />
        <ServiceBenefits items={page.whyChoose} onBookCall={goToSchedule} />
        <ServiceProcess steps={page.process} />
        <ServiceCaseResults results={page.caseResults} onBookCall={goToSchedule} />
        <ServiceFAQ faqs={page.faqs} />
        <ServiceConclusion paragraphs={page.conclusion} />
        <RelatedServices links={page.relatedLinks} />
        <ServiceCTA onBookCall={goToSchedule} />
      </main>

      <SiteFooter />
    </div>
  );
}
