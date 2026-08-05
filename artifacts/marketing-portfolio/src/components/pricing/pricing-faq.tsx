import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PRICING_FAQ } from "@/content/pricing-content";
import { cn } from "@/lib/utils";

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {PRICING_FAQ.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="rounded-xl border border-white/10 bg-background/60 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-foreground">{item.question}</span>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-muted-foreground transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
