import { motion } from "framer-motion";
import { Check, Target } from "lucide-react";
import { BookCallButton } from "@/components/cro/book-call-button";
import { SectionBadge } from "@/components/cro/section-badge";
import type { SeoServiceItem } from "@/content/seo-pages/types";
import { FADE_UP, STAGGER } from "@/lib/site-constants";
import { Card, CardContent } from "@/components/ui/card";

type ServiceIncludedProps = {
  items: SeoServiceItem[];
  onBookCall: () => void;
};

export function ServiceIncluded({ items, onBookCall }: ServiceIncludedProps) {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-card/10 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="text-center mb-12"
        >
          <SectionBadge icon={Target}>What You Get</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold">Services included</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
            Clear deliverables tied to revenue, tracking, and conversion outcomes — not vague agency retainers.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10"
        >
          {items.map((item) => (
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

        <div className="text-center">
          <BookCallButton onClick={onBookCall} label="Book a Free Strategy Call" />
        </div>
      </div>
    </section>
  );
}
