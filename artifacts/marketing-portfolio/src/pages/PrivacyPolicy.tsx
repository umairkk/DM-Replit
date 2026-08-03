import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CONTACT_EMAIL } from "@/content/site-content";
import { PRIVACY_POLICY } from "@/content/privacy-policy";
import { applyPageSeo, resetHomeSeo } from "@/lib/page-seo";

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    applyPageSeo({
      title: "Privacy Policy | Umair Altaf",
      description:
        "Privacy Policy for umairaltaf.com — how Umair Altaf collects, uses, and protects personal information submitted through contact forms, audits, and scheduling.",
      path: "/privacy-policy",
      ogTitle: "Privacy Policy | Umair Altaf",
      ogDescription:
        "Learn how personal information is collected and used on umairaltaf.com.",
    });

    return () => {
      resetHomeSeo();
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateHomeSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <SiteHeader scrolled={scrolled} onNavigate={navigateHomeSection} />

      <main className="relative z-10 pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{PRIVACY_POLICY.title}</h1>
              <p className="text-sm text-muted-foreground mt-1">Last updated: {PRIVACY_POLICY.lastUpdated}</p>
            </div>
          </div>

          <article className="prose prose-invert prose-headings:scroll-mt-28 prose-headings:font-semibold prose-a:text-primary prose-li:marker:text-primary/70 max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed not-prose mb-10">{PRIVACY_POLICY.intro}</p>

            {PRIVACY_POLICY.sections.map((section) => (
              <section key={section.id} id={section.id} className="not-prose mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc pl-5 space-y-2">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.paragraphsAfterList?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.id === "contact" && (
                    <p>
                      <strong className="text-foreground">Umair Altaf</strong>
                      <br />
                      Email:{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                        {CONTACT_EMAIL}
                      </a>
                      <br />
                      Website:{" "}
                      <a href="https://umairaltaf.com" className="text-primary hover:underline">
                        https://umairaltaf.com
                      </a>
                    </p>
                  )}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
