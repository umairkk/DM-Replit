import { useEffect, useState } from "react";
import { ArrowRight, Flag } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BookCallButton } from "@/components/cro/book-call-button";
import { USA_LEAD_GEN_INDUSTRIES } from "@/content/usa-lead-gen";
import { applyPageSeo, resetHomeSeo } from "@/lib/page-seo";
import { goToSchedule } from "@/components/seo/service-utils";

export default function UsaLeadGenHub() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    applyPageSeo({
      title: "USA Lead Generation | Umair Altaf",
      description:
        "Explore USA industries for Google Ads, Facebook and Instagram lead generation. Dedicated landing pages with channel-specific ad strategy guidance.",
      path: "/usa-lead-generation",
      ogTitle: "USA Lead Generation by Industry",
      ogDescription:
        "Explore 30 USA industries with dedicated landing pages for Google, Facebook and Instagram lead generation.",
    });

    return () => resetHomeSeo();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateHomeSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <SiteHeader scrolled={scrolled} onNavigate={navigateHomeSection} />

      <main className="relative z-10 pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Flag size={20} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">USA Lead Generation</h1>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-10">
            Select an industry to view SEO landing pages with channel-specific guidance, common challenges, and
            how Meta and Google Ads can support qualified lead generation in the United States.
          </p>

          <div className="rounded-xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-[3rem_1fr_auto] gap-3 px-4 py-3 bg-white/[0.03] text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-white/10">
              <span>#</span>
              <span>Industry</span>
              <span className="hidden sm:block">Page</span>
            </div>
            <ul className="divide-y divide-white/5">
              {USA_LEAD_GEN_INDUSTRIES.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/usa-lead-generation/${item.slug}`}
                    className="grid grid-cols-[3rem_1fr_auto] gap-3 px-4 py-4 items-center hover:bg-white/[0.03] transition-colors group cursor-pointer"
                  >
                    <span className="text-sm font-bold text-primary">{item.priority}</span>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.industry}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2 sm:hidden">
                        {item.metaDescription}
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-sm text-primary">
                      View
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <BookCallButton onClick={goToSchedule} label="Book a free lead generation strategy call" />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
