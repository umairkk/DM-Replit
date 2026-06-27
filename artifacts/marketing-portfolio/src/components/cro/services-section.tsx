import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Check,
  Zap,
  MousePointerClick,
  Share2,
  Briefcase,
  ShoppingBag,
  LineChart,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { BookCallButton } from "@/components/cro/book-call-button";
import { SectionBadge } from "@/components/cro/section-badge";
import { SERVICE_OFFERINGS } from "@/content/cro-content";
import { ALL_SERVICE_LINKS } from "@/content/seo-pages/shared";

const SERVICE_ICONS = {
  google: MousePointerClick,
  meta: Share2,
  leads: Briefcase,
  ecommerce: ShoppingBag,
  tracking: LineChart,
  consulting: BarChart3,
};

const SERVICE_PAGE_LINKS: Record<string, string> = {
  "google-ads": "/google-ads-consultant",
  "meta-ads": "/meta-ads-expert",
  ecommerce: "/shopify-google-ads-expert",
  consulting: "/performance-max-specialist",
};

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

type ServicesSectionProps = {
  onBookCall: () => void;
};

export function ServicesSection({ onBookCall }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 relative overflow-hidden border-y border-white/5 bg-card/10">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-14">
          <SectionBadge icon={Zap}>Services</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Performance marketing that drives revenue</h2>
          <p className="text-muted-foreground max-w-2xl">
            Outcome-focused services with clear deliverables — built for businesses that need leads, sales, and measurable ROI.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {SERVICE_OFFERINGS.map((service) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <motion.div key={service.id} variants={FADE_UP}>
                <div className="h-full rounded-2xl border border-white/10 bg-background/50 backdrop-blur-sm p-6 hover:border-primary/25 transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-extrabold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{service.tagline}</p>

                  <div className="space-y-4 flex-1 text-sm">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">What&apos;s Included</p>
                      <ul className="space-y-1.5">
                        {service.included.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-foreground/80">
                            <Check size={12} className="text-primary mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2">Expected Outcomes</p>
                      <ul className="space-y-1">
                        {service.outcomes.map((item) => (
                          <li key={item} className="text-xs text-muted-foreground">→ {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Deliverables</p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.deliverables.map((d) => (
                          <span key={d} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.platforms.map((p) => (
                        <span key={p} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                    {SERVICE_PAGE_LINKS[service.id] && (
                      <Link
                        href={SERVICE_PAGE_LINKS[service.id]}
                        className="flex items-center justify-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        Learn more <ArrowRight size={12} />
                      </Link>
                    )}
                    <BookCallButton onClick={onBookCall} size="sm" label="Book Free Call" className="w-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="mt-14 pt-10 border-t border-white/5"
        >
          <p className="text-sm font-semibold text-muted-foreground mb-4">Specialist service pages</p>
          <nav aria-label="SEO service pages" className="flex flex-wrap gap-2">
            {ALL_SERVICE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
