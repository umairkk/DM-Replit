import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";
import { BookCallButton } from "@/components/cro/book-call-button";
import { SectionBadge } from "@/components/cro/section-badge";
import { INTRO_VIDEO_YOUTUBE_ID } from "@/content/cro-content";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

type VideoIntroSectionProps = {
  onBookCall: () => void;
};

export function VideoIntroSection({ onBookCall }: VideoIntroSectionProps) {
  const hasVideo = Boolean(INTRO_VIDEO_YOUTUBE_ID);

  return (
    <section id="meet" className="py-24 relative overflow-hidden border-y border-white/5 bg-card/15">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <SectionBadge icon={Video}>Meet Umair Altaf</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your performance marketing partner</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              10+ years running Google, Meta, LinkedIn, and Bing campaigns for agencies, e-commerce brands, and lead-gen businesses worldwide. I focus on one thing: turning ad spend into measurable revenue.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-foreground/85">
              {[
                "Experience across 12+ industries",
                "Data-driven, revenue-first approach",
                "Transparent reporting & fast communication",
                "Proven ROAS, CPL, and conversion lifts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <BookCallButton onClick={onBookCall} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10 scale-105" />
            <div className="rounded-2xl border border-white/10 bg-background/60 overflow-hidden aspect-video flex items-center justify-center">
              {hasVideo ? (
                <iframe
                  title="Meet Umair Altaf — Introduction Video"
                  src={`https://www.youtube.com/embed/${INTRO_VIDEO_YOUTUBE_ID}?rel=0`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <Play size={28} className="text-primary ml-1" />
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-1">Introduction video coming soon</p>
                  <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                    Book a free strategy call to learn about my experience, approach, and client results.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
