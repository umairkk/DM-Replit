import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { SectionBadge } from "@/components/cro/section-badge";
import type { SeoFaq } from "@/content/seo-pages/types";
import { FADE_UP } from "@/lib/site-constants";

type ServiceFAQProps = {
  faqs: SeoFaq[];
};

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  return (
    <section className="py-16 md:py-24 bg-card/10 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="mb-12 text-center"
        >
          <SectionBadge icon={HelpCircle}>FAQ</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.article
              key={faq.q}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="rounded-2xl border border-white/10 bg-background/50 p-6"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 className="font-bold mb-3 text-foreground" itemProp="name">
                {faq.q}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-sm text-muted-foreground leading-relaxed" itemProp="text">
                  {faq.a}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
