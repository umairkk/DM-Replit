import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { CountUp } from "@/components/cro/count-up";
import { SectionBadge } from "@/components/cro/section-badge";
import { RESULTS_METRICS } from "@/content/cro-content";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export function ResultsSection() {
  return (
    <section id="results" className="py-16 md:py-20 relative border-b border-white/5 bg-card/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="text-center mb-10 md:mb-12"
        >
          <SectionBadge icon={BarChart3}>Proven Results</SectionBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Measurable outcomes across every account
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Revenue, leads, and efficiency gains from live client campaigns — not vanity metrics.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {RESULTS_METRICS.map((metric) => (
            <motion.div
              key={metric.label}
              variants={FADE_UP}
              className="rounded-2xl border border-white/10 bg-background/60 backdrop-blur-sm p-4 md:p-6 text-center hover:border-primary/25 transition-colors"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-1 tabular-nums">
                <CountUp
                  to={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={"decimals" in metric ? metric.decimals : 0}
                />
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider leading-snug">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
