import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Zap } from "lucide-react";
import { BookCallButton } from "@/components/cro/book-call-button";
import { SectionBadge } from "@/components/cro/section-badge";
import {
  CASE_STUDIES,
  INDUSTRY_FILTERS,
  type IndustryFilter,
} from "@/content/cro-content";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

type CaseStudiesSectionProps = {
  onBookCall: () => void;
};

export function CaseStudiesSection({ onBookCall }: CaseStudiesSectionProps) {
  const [filter, setFilter] = useState<IndustryFilter>("all");

  const filtered =
    filter === "all" ? CASE_STUDIES : CASE_STUDIES.filter((cs) => cs.category === filter);

  return (
    <section id="casestudies" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-10">
          <SectionBadge icon={TrendingUp}>Case Studies</SectionBadge>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real campaigns. Real numbers.</h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Challenge → strategy → execution → results. Business impact over screenshots.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {INDUSTRY_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === f.id
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={filter}
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filtered.map((cs) => (
            <motion.div key={cs.id} variants={FADE_UP}>
              <div
                className={`h-full rounded-2xl border ${cs.border} bg-background/40 overflow-hidden group hover:border-opacity-80 transition-all duration-300 flex flex-col`}
              >
                <div className={`bg-gradient-to-br ${cs.gradient} px-6 pt-6 pb-5 relative overflow-hidden`}>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[80px] font-black opacity-5 select-none leading-none pointer-events-none">
                    {cs.results[0].after}
                  </div>
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${
                      cs.color === "primary"
                        ? "bg-primary/15 text-primary border border-primary/25"
                        : "bg-secondary/15 text-secondary border border-secondary/25"
                    }`}
                  >
                    <Zap size={9} /> {cs.label}
                  </div>
                  <div className="flex items-end gap-4">
                    <div>
                      <div
                        className={`text-5xl font-black leading-none mb-1 ${cs.color === "primary" ? "text-primary" : "text-secondary"}`}
                      >
                        {cs.results[0].after}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {cs.results[0].label} · was {cs.results[0].before}
                      </div>
                    </div>
                    <div className="ml-auto text-right pb-1">
                      <div className="text-sm font-bold">{cs.industry}</div>
                      <div className="text-[10px] text-muted-foreground">
                        {cs.platform} · {cs.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Challenge</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Strategy</p>
                    <p className="text-xs text-foreground/80 leading-relaxed">{cs.strategy}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Execution</p>
                    <ul className="space-y-1.5">
                      {cs.execution.map((action) => (
                        <li key={action} className="flex items-start gap-2 text-xs text-foreground/75">
                          <span
                            className={`mt-1.5 shrink-0 w-1 h-1 rounded-full ${cs.color === "primary" ? "bg-primary" : "bg-secondary"}`}
                          />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto space-y-2">
                    {cs.results.map((r) => (
                      <div
                        key={r.label}
                        className="flex items-center gap-3 rounded-xl bg-white/3 border border-white/6 px-4 py-3"
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${r.up ? "bg-emerald-500/10" : "bg-rose-500/10"}`}
                        >
                          {r.up ? (
                            <TrendingUp size={13} className="text-emerald-400" />
                          ) : (
                            <TrendingDown size={13} className="text-rose-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wider truncate">{r.label}</div>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[11px] text-muted-foreground line-through">{r.before}</span>
                            <span className="text-muted-foreground/40 text-[10px]">→</span>
                            <span className={`text-sm font-bold ${r.up ? "text-emerald-400" : "text-rose-400"}`}>{r.after}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No case studies in this category yet.</p>
        )}

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mt-14 text-center">
          <p className="text-muted-foreground mb-6 text-base">Want results like these for your campaigns?</p>
          <BookCallButton onClick={onBookCall} />
        </motion.div>
      </div>
    </section>
  );
}
