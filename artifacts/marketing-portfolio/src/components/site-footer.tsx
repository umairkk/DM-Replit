import { Instagram, Linkedin, MessageSquare, Terminal, Twitter } from "lucide-react";
import { Link } from "wouter";

export function SiteFooter() {
  return (
    <footer className="py-10 border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight hover:opacity-90 transition-opacity">
          <Terminal size={16} className="text-primary" />
          <span>
            Umair A<span className="text-primary">.</span>
          </span>
        </Link>

        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} Umair A. — Digital Marketing Specialist. All rights reserved.
        </p>

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
          <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors p-2">
            <Linkedin size={18} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors p-2">
            <Twitter size={18} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors p-2">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
