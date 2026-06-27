import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BookCallButton } from "@/components/cro/book-call-button";
import { SectionBadge } from "@/components/cro/section-badge";
import type { SeoPageContent } from "@/content/seo-pages/types";
import { FADE_UP, STAGGER } from "@/lib/site-constants";
import { Button } from "@/components/ui/button";

type ServiceHeroProps = {
  page: SeoPageContent;
  onBookCall: () => void;
};

export function ServiceHero({ page, onBookCall }: ServiceHeroProps) {
  return (
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
          <motion.p
            variants={FADE_UP}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            {page.heroSubtext}
          </motion.p>
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <BookCallButton onClick={onBookCall} label="Book a Free Strategy Call" />
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
  );
}
