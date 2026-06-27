import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, Terminal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Results", id: "results" },
  { label: "Services", id: "services" },
  { label: "Case Studies", id: "casestudies" },
  { label: "About", id: "about" },
  { label: "Free Audit", id: "audit" },
  { label: "Schedule", id: "schedule" },
  { label: "Testimonials", id: "testimonials" },
] as const;

type SiteHeaderProps = {
  scrolled: boolean;
  onNavigate: (id: string) => void;
};

export function SiteHeader({ scrolled, onNavigate }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavigate = (id: string) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled || mobileOpen
            ? "bg-background/90 backdrop-blur-md border-border/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-3">
          <Link href="/" className="font-bold text-lg md:text-xl tracking-tight flex items-center gap-2 min-w-0 hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center border border-primary/50 text-primary shrink-0">
              <Terminal size={18} />
            </div>
            <span className="truncate">
              Umair A<span className="text-primary">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigate(link.id)}
                className="hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              onClick={() => handleNavigate("schedule")}
              size="sm"
              className="rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all text-xs sm:text-sm h-9 sm:h-10 px-4 sm:px-5"
            >
              Book Free Call
            </Button>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-background/60 text-foreground hover:bg-white/5 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="absolute top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-white/10 bg-background/95 backdrop-blur-xl px-4 py-4 shadow-xl">
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavigate(link.id)}
                  className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 text-left text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavigate("schedule")}
                className="col-span-2 rounded-xl border border-primary/30 bg-primary/10 px-3 py-3 text-sm font-semibold text-primary hover:bg-primary/15 transition-colors"
              >
                Book Free Strategy Call
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
