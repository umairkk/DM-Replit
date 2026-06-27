import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  HelpCircle,
  Layers,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { BookCallButton } from "@/components/cro/book-call-button";
import { SectionBadge } from "@/components/cro/section-badge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { SeoPageContent } from "@/content/seo-pages/types";
import { FADE_UP, STAGGER } from "@/lib/site-constants";
import { applyPageSeo, resetHomeSeo } from "@/lib/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SeoPageViewProps = {
  page: SeoPageContent;
};

function goToSchedule() {
  window.location.href = "/#schedule";
}

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

      {/* Hero */}
      <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <img
            src="/hero-bg.png"
            alt=""
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[100px] pointer-events-none"
          animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={STAGGER}>
            <motion.div variants={FADE_UP}>
              <SectionBadge icon={Sparkles}>{page.badge}</SectionBadge>
            </motion.div>
            <motion.h1
              variants={FADE_UP}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
              style={{ textShadow: "0 0 40px rgba(59,130,246,0.15)" }}
            >
              {page.h1}
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {page.heroSubtext}
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
              <BookCallButton onClick={goToSchedule} />
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full h-12 px-8 border-white/10 hover:bg-white/5"
              >
                <Link href="/#casestudies">View Case Studies</Link>
              </Button>
            </motion.div>
            <motion.div variants={FADE_UP} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {page.heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-background/60 backdrop-blur-sm p-4 text-center"
                >
                  <div className="text-xl font-extrabold text-primary">{stat.value}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            {page.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      {page.sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-16 md:py-20 ${i % 2 === 1 ? "bg-card/20 border-y border-white/5" : ""}`}
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary shrink-0" />
                {section.title}
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 50)}>{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* What's included */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-12"
          >
            <SectionBadge icon={Target}>What You Get</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold">Services & deliverables included</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {page.services.map((item) => (
              <motion.div key={item.title} variants={FADE_UP}>
                <Card className="h-full bg-background/50 border-white/10 hover:border-primary/25 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                      <Check size={18} />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-12">
            <SectionBadge icon={Layers}>How It Works</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold">My proven process</h2>
          </motion.div>
          <div className="space-y-4">
            {page.process.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-5 rounded-2xl border border-white/10 bg-background/40 p-5 md:p-6"
              >
                <div className="text-3xl font-black text-primary/30 shrink-0 w-12">{step.step}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-12 text-center">
            <SectionBadge icon={HelpCircle}>FAQ</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
          </motion.div>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <motion.div
                key={faq.q}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
                className="rounded-2xl border border-white/10 bg-background/50 p-6"
              >
                <h3 className="font-bold mb-3 text-foreground">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 border-t border-white/5 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <SectionBadge icon={Zap}>Related Services</SectionBadge>
          <h2 className="text-2xl font-bold mb-6">Explore more expertise</h2>
          <div className="flex flex-wrap gap-2">
            {page.relatedLinks.map((link) => (
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to grow with a specialist?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book a free 30-minute strategy call. We&apos;ll review your account, identify wasted spend, and outline a clear plan to scale results.
          </p>
          <BookCallButton onClick={goToSchedule} />
          <p className="text-xs text-muted-foreground mt-4">
            Or email{" "}
            <a href="mailto:info@umairaltaf.com" className="text-primary hover:underline">
              info@umairaltaf.com
            </a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
