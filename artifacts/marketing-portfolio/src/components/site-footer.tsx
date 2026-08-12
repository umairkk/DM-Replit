import { Facebook, Instagram, Linkedin, MessageSquare, Terminal } from "lucide-react";
import { Link } from "wouter";
import { BookCallButton } from "@/components/cro/book-call-button";

type SiteFooterProps = {
  onBookCall?: () => void;
};

export function SiteFooter({ onBookCall }: SiteFooterProps) {
  const handleBookCall = onBookCall ?? (() => {
    window.location.href = "/#schedule";
  });

  return (
    <footer className="py-10 border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-2 font-bold tracking-tight">
          <Terminal size={16} className="text-primary" />
          <span>
            Umair A<span className="text-primary">.</span>
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Umair Altaf — Performance Marketing Consultant. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <BookCallButton onClick={handleBookCall} size="sm" label="Book Strategy Call" />
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href="https://www.upwork.com/freelancers/~0174e59cfe9730a3cd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className="hover:text-primary transition-colors p-2"
            >
              <MessageSquare size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/umairkk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors p-2"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.facebook.com/umairaltaf24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary transition-colors p-2"
            >
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors p-2">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
