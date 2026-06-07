import { motion } from "framer-motion";
import {
  BarChart3,
  DollarSign,
  Eye,
  LineChart,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { SectionBadge } from "@/components/cro/section-badge";
import { WHY_WORK_WITH_ME } from "@/content/cro-content";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const ICONS = [BarChart3, DollarSign, Eye, LineChart, MessageCircle, RefreshCw];

export function WhyWorkWithMeSection() {
  return (
    <section id="why-me" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_0%,transparent_50%,rgba(139,92,246,0.04)_100%)] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center mb-14">
          <SectionBadge icon={ShieldCheck}>Why Work With Me</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What sets my approach apart</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not another agency pitch — a revenue-focused partner who optimizes for your bottom line.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {WHY_WORK_WITH_ME.map((item, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                variants={FADE_UP}
                className="rounded-2xl border border-white/10 bg-card/40 p-6 hover:border-primary/25 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
