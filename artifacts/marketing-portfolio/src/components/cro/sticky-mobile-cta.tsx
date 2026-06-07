import { BookCallButton } from "@/components/cro/book-call-button";

type StickyMobileCtaProps = {
  onBookCall: () => void;
};

export function StickyMobileCta({ onBookCall }: StickyMobileCtaProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-background/90 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.4)]">
      <BookCallButton
        onClick={onBookCall}
        size="lg"
        className="w-full h-12"
        label="Book Free Strategy Call"
      />
    </div>
  );
}
