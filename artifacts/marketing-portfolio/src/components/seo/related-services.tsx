import { Link } from "wouter";
import { Zap } from "lucide-react";
import { SectionBadge } from "@/components/cro/section-badge";
import type { SeoRelatedLink } from "@/content/seo-pages/types";

type RelatedServicesProps = {
  links: SeoRelatedLink[];
};

export function RelatedServices({ links }: RelatedServicesProps) {
  return (
    <section className="py-16 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <SectionBadge icon={Zap}>Related Services</SectionBadge>
        <h2 className="text-2xl font-bold mb-6">Explore more expertise</h2>
        <nav aria-label="Related services" className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/15 transition-colors"
          >
            Back to Home
          </Link>
        </nav>
      </div>
    </section>
  );
}
