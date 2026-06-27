import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/site-constants";

type ServiceIntroProps = {
  paragraphs: string[];
};

export function ServiceIntro({ paragraphs }: ServiceIntroProps) {
  return (
    <section className="py-16 md:py-20 border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="space-y-6 text-muted-foreground text-lg leading-relaxed"
        >
          {paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
