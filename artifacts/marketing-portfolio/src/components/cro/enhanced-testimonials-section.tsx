import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBadge } from "@/components/cro/section-badge";
import { ENHANCED_TESTIMONIALS } from "@/content/cro-content";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function EnhancedTestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center mb-16">
          <SectionBadge icon={Star}>Client Feedback</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by businesses worldwide</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real 5-star reviews from Upwork contracts, agency partnerships, and long-term clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ENHANCED_TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Card className="bg-card/50 border-white/5 h-full relative hover:border-primary/20 transition-colors">
                <div className="absolute top-6 left-6 text-primary/20">
                  <MessageSquare size={40} />
                </div>
                <CardContent className="p-8 pt-12 flex flex-col h-full">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 relative z-10 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {testimonial.initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm truncate">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">{testimonial.company}</p>
                      <p className="text-[10px] text-primary/80 mt-0.5">{testimonial.source} · {testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
