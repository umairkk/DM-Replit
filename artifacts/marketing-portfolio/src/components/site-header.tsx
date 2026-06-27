import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronDown, Menu, Terminal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_NAV_LINKS } from "@/content/seo-pages";

const NAV_LINKS = [
  { label: "Results", id: "results" },
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [servicesOpen]);

  const handleNavigate = (id: string) => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    onNavigate(id);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
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
            {NAV_LINKS.slice(0, 1).map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigate(link.id)}
                className="hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((open) => !open)}
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors whitespace-nowrap"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[280px]">
                  <div className="rounded-xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-xl py-2 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => {
                        setServicesOpen(false);
                        handleNavigate("services");
                      }}
                      className="w-full px-4 py-2.5 text-left text-sm font-semibold text-primary hover:bg-primary/10 transition-colors border-b border-white/5"
                    >
                      All Services Overview
                    </button>
                    {SERVICE_NAV_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.slice(1).map((link) => (
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
            onClick={closeMobile}
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

              {/* Mobile services accordion */}
              <div className="col-span-2 rounded-xl border border-white/8 bg-white/[0.03] overflow-hidden">
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-foreground hover:bg-primary/5 transition-colors"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="border-t border-white/8 px-2 py-2 space-y-0.5">
                    <button
                      type="button"
                      onClick={() => handleNavigate("services")}
                      className="w-full text-left px-2 py-2 text-xs font-semibold text-primary rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      All Services Overview
                    </button>
                    {SERVICE_NAV_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        className="block px-2 py-2 text-xs text-muted-foreground rounded-lg hover:text-foreground hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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
