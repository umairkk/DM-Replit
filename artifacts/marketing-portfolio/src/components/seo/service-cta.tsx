import { motion } from "framer-motion";
import { BookCallButton } from "@/components/cro/book-call-button";
import { FADE_UP } from "@/lib/site-constants";

type ServiceCTAProps = {
  onBookCall: () => void;
  headline?: string;
  subtext?: string;
};

export function ServiceCTA({
  onBookCall,
  headline = "Ready to turn ad spend into measurable revenue?",
  subtext = "Book a free 30-minute strategy call. We'll review your account, identify wasted spend, and outline a clear plan to scale results.",
}: ServiceCTAProps) {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-2xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
          <p className="text-muted-foreground text-lg mb-8">{subtext}</p>
          <BookCallButton onClick={onBookCall} label="Book a Free Strategy Call" />
          <p className="text-xs text-muted-foreground mt-4">
            Or email{" "}
            <a href="mailto:info@umairaltaf.com" className="text-primary hover:underline">
              info@umairaltaf.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
