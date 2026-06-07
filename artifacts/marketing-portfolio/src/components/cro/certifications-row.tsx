import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/content/cro-content";

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function CertificationsRow() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={FADE_UP}
      className="mt-10 pt-10 border-t border-white/5"
    >
      <div className="flex items-center justify-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        <Award size={14} className="text-primary" />
        Professional Certifications
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.name}
            className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-center hover:border-white/15 transition-colors"
          >
            <div
              className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center text-xs font-black"
              style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
            >
              {cert.org.charAt(0)}
            </div>
            <p className="text-[11px] font-bold leading-snug">{cert.name}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{cert.org}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
