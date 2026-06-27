import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { SectionBadge } from "@/components/cro/section-badge";
import type { SeoProcessStep } from "@/content/seo-pages/types";
import { FADE_UP } from "@/lib/site-constants";

type ServiceProcessProps = {
  steps: SeoProcessStep[];
};

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="py-16 md:py-24 bg-card/20 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="mb-12"
        >
          <SectionBadge icon={Layers}>How It Works</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold">My proven process</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            A structured approach that fixes tracking first, then optimizes for leads, sales, and ROAS.
          </p>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step) => (
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
  );
}
