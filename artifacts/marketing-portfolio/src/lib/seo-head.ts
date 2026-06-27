import type { SeoPageContent } from "@/content/seo-pages/types";

export function buildFaqSchema(page: SeoPageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildServiceSchema(page: SeoPageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: page.metaTitle,
    description: page.metaDescription,
    url: `https://umairaltaf.com${page.path}`,
    email: "info@umairaltaf.com",
    areaServed: "Worldwide",
    provider: {
      "@type": "Person",
      name: "Umair Altaf",
      jobTitle: "Performance Marketing Consultant",
    },
    serviceType: page.schemaServiceType,
  };
}

export function applyPageSeo(page: SeoPageContent) {
  document.title = page.metaTitle;

  const setMeta = (name: string, content: string, property = false) => {
    const attr = property ? "property" : "name";
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setMeta("description", page.metaDescription);
  setMeta("keywords", page.keywords.join(", "));
  setMeta("og:title", page.metaTitle, true);
  setMeta("og:description", page.metaDescription, true);
  setMeta("og:url", `https://umairaltaf.com${page.path}`, true);
  setMeta("og:type", "website", true);

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = `https://umairaltaf.com${page.path}`;

  const schemaId = "seo-page-schema";
  document.getElementById(schemaId)?.remove();
  const script = document.createElement("script");
  script.id = schemaId;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify([buildServiceSchema(page), buildFaqSchema(page)]);
  document.head.appendChild(script);
}

export function resetHomeSeo() {
  document.getElementById("seo-page-schema")?.remove();
}
