import { Link } from "wouter";
import { USA_LEAD_GEN_FOOTER_LINKS, USA_LEAD_GEN_HUB_PATH } from "@/content/usa-lead-gen";

export function SiteFooterUsaLinks() {
  return (
    <section className="border-t border-white/5 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-center md:text-left">
            <Link
              href={USA_LEAD_GEN_HUB_PATH}
              className="text-base font-semibold text-foreground hover:text-primary transition-colors"
            >
              USA Lead Generation — Industry Priority List
            </Link>
            <p className="text-xs text-muted-foreground mt-2 max-w-2xl">
              Strategic priority for Google Ads, Facebook &amp; Instagram | Not a verified performance ranking
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm">
            {USA_LEAD_GEN_FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex gap-2"
                >
                  <span className="text-primary/70 tabular-nums w-5 shrink-0">{link.priority}.</span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
