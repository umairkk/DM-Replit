import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { BookCallButton } from "@/components/cro/book-call-button";
import { SectionBadge } from "@/components/cro/section-badge";
import type { SeoPainPoint } from "@/content/seo-pages/types";
import { FADE_UP, STAGGER } from "@/lib/site-constants";
import { Card, CardContent } from "@/components/ui/card";

type ServicePainPointsProps = {
  points: SeoPainPoint[];
  targetKeyword: string;
  onBookCall: () => void;
};

export function ServicePainPoints({ points, targetKeyword, onBookCall }: ServicePainPointsProps) {
  return (
    <section className="py-16 md:py-24 bg-card/20 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="mb-12"
        >
          <SectionBadge icon={AlertTriangle}>Common Problems</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What goes wrong without a dedicated {targetKeyword.toLowerCase()}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            These are the issues I fix first — because they drain budget, kill conversions, and block growth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
        >
          {points.map((point) => (
            <motion.div key={point.title} variants={FADE_UP}>
              <Card className="h-full bg-background/50 border-white/10 hover:border-red-500/20 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-foreground">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
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
