import { motion } from "framer-motion";
import { Check, Lightbulb } from "lucide-react";
import { BookCallButton } from "@/components/cro/book-call-button";
import { SectionBadge } from "@/components/cro/section-badge";
import type { SeoPageContent } from "@/content/seo-pages/types";
import { FADE_UP } from "@/lib/site-constants";

type ServiceSolutionProps = {
  solution: SeoPageContent["solution"];
  targetKeyword: string;
  onBookCall: () => void;
};

export function ServiceSolution({ solution, targetKeyword, onBookCall }: ServiceSolutionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
          <SectionBadge icon={Lightbulb}>The Solution</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{solution.title}</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
            {solution.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <ul className="space-y-3 mb-10">
            {solution.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-foreground/90">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-primary" />
                </span>
                <span className="text-sm md:text-base leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mb-6">
            Every engagement is built around measurable outcomes — leads, sales, ROAS, and clean tracking — not
            vanity metrics. That is what you get when you work with a proven {targetKeyword.toLowerCase()}.
          </p>
          <BookCallButton onClick={onBookCall} label="Book a Free Strategy Call" />
        </motion.div>
      </div>
    </section>
  );
}
