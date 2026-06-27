import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { BookCallButton } from "@/components/cro/book-call-button";
import { SectionBadge } from "@/components/cro/section-badge";
import type { SeoWhyChoose } from "@/content/seo-pages/types";
import { FADE_UP, STAGGER } from "@/lib/site-constants";
import { Card, CardContent } from "@/components/ui/card";

type ServiceBenefitsProps = {
  items: SeoWhyChoose[];
  onBookCall: () => void;
};

export function ServiceBenefits({ items, onBookCall }: ServiceBenefitsProps) {
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
          <SectionBadge icon={Award}>Why Umair Altaf</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold">Why choose Umair Altaf</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
            Direct access to a senior operator with $50M+ revenue generated and $15M+ ad spend managed — not a junior
            account manager.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={FADE_UP}>
              <Card className="h-full bg-background/50 border-white/10 hover:border-primary/25 transition-colors">
                <CardContent className="p-6">
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
