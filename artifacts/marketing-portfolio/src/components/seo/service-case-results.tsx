import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { BookCallButton } from "@/components/cro/book-call-button";
import { SectionBadge } from "@/components/cro/section-badge";
import type { SeoCaseResult } from "@/content/seo-pages/types";
import { FADE_UP, STAGGER } from "@/lib/site-constants";
import { Card, CardContent } from "@/components/ui/card";

type ServiceCaseResultsProps = {
  results: SeoCaseResult[];
  onBookCall: () => void;
};

export function ServiceCaseResults({ results, onBookCall }: ServiceCaseResultsProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="mb-12 text-center"
        >
          <SectionBadge icon={TrendingUp}>Results</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold">Real outcomes from client work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
            Anonymized case snapshots. Results vary by industry, offer, and budget — but the methodology is consistent.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          {results.map((result) => (
            <motion.div key={result.headline} variants={FADE_UP}>
              <Card className="h-full bg-background/50 border-white/10">
                <CardContent className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    {result.industry}
                  </p>
                  <h3 className="text-xl font-bold mb-4">{result.headline}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {result.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{m.label}</p>
                        <p className="text-muted-foreground line-through text-xs">{m.before}</p>
                        <p className="font-bold text-primary">{m.after}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{result.summary}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <BookCallButton onClick={onBookCall} label="Book a Free Strategy Call" />
        </div>
      </div>
    </section>
  );
}
