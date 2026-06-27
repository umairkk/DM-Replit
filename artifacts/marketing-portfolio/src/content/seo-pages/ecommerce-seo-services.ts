import { HERO_STATS } from "./shared";
import { ALL_SERVICE_LINKS, relatedExcept } from "./google-ads-consultant";
import type { SeoPageContent } from "./types";

export const ecommerceSeoServicesPage: SeoPageContent = {
  slug: "ecommerce-seo-services",
  path: "/ecommerce-seo-services",
  metaTitle: "Ecommerce SEO Services | Umair Altaf — Technical & Shopify SEO",
  metaDescription:
    "Ecommerce SEO services for technical SEO, product page optimization, and Shopify SEO. Drive organic revenue alongside paid campaigns. 10+ years experience. Free strategy call.",
  keywords: [
    "Ecommerce SEO Services",
    "Shopify SEO Expert",
    "Technical SEO for Ecommerce",
    "Product Page SEO",
    "Online Store SEO Consultant",
  ],
  schemaServiceType: "Ecommerce SEO Consulting",
  badge: "Ecommerce SEO Services",
  h1: "Ecommerce SEO Services for Sustainable Organic Revenue Growth",
  heroSubtext:
    "I optimize e-commerce stores for search — technical SEO, product pages, category architecture, and Shopify-specific fixes — so organic traffic complements your paid campaigns and reduces acquisition costs.",
  heroStats: HERO_STATS,
  intro: [
    "Paid ads drive immediate revenue, but rising CPAs make organic search increasingly critical for e-commerce profitability. Most online stores underinvest in SEO — duplicate product pages, slow Core Web Vitals, thin category content, and broken internal linking leave thousands of high-intent searches uncaptured. Technical debt from theme updates and app bloat compounds the problem silently.",
    "I'm Umair Altaf, a performance marketing consultant who brings an operator's mindset to ecommerce SEO. With 10+ years working with Shopify, WooCommerce, and custom e-commerce platforms, I focus on SEO improvements that directly impact revenue: product page rankings, category visibility, technical crawlability, and site speed — not vanity keyword rankings that don't convert.",
  ],
  sections: [
    {
      id: "ecommerce-seo-priority",
      title: "What ecommerce SEO should prioritize — and what to ignore",
      paragraphs: [
        "E-commerce SEO is not the same as blog-driven content marketing. Your highest-ROI pages are product pages, category/collection pages, and brand pages — the URLs that directly generate revenue. I prioritize technical crawlability, unique product descriptions, structured data (Product, BreadcrumbList, FAQ schema), and internal linking that distributes authority to money pages.",
        "Common time-wasters I see: chasing informational blog traffic that doesn't convert, over-optimizing meta tags while ignoring site speed, and building backlinks to homepage instead of product and category pages. E-commerce SEO should reduce your dependence on paid acquisition — every hour spent should tie to indexable, rankable, revenue-generating URLs.",
        "I also coordinate SEO with paid campaigns. Pages that rank organically for high-intent product queries reduce Google Ads spend on those terms. Category pages optimized for commercial keywords capture mid-funnel demand that Shopping and Search ads pay premium CPMs to reach.",
      ],
    },
    {
      id: "technical-seo",
      title: "Technical SEO for e-commerce stores",
      paragraphs: [
        "Technical SEO is the foundation. I audit and fix crawl budget waste from faceted navigation and filter URLs, duplicate content from product variants and pagination, orphaned pages with no internal links, XML sitemap accuracy, robots.txt conflicts, and canonical tag errors that split ranking signals across duplicate URLs.",
        "Core Web Vitals directly affect rankings and conversion rates. I diagnose LCP, INP, and CLS issues caused by hero images, render-blocking apps, lazy loading misconfiguration, and third-party script bloat — common problems on Shopify and WooCommerce stores running dozens of apps. Speed fixes often lift both rankings and on-site conversion rate simultaneously.",
        "Structured data implementation ensures rich results in search: product price, availability, review stars, and breadcrumb trails. I validate schema markup, fix Merchant Center-aligned product data, and ensure JSON-LD is consistent with visible page content.",
      ],
    },
    {
      id: "product-pages",
      title: "Product page and category SEO optimization",
      paragraphs: [
        "Product pages need unique, keyword-informed content — not manufacturer descriptions duplicated across the web. I rewrite titles, meta descriptions, and on-page copy for top-revenue SKUs first, incorporating search intent, variant clarity, and conversion-focused messaging. For large catalogs, I build templated optimization frameworks that scale without sacrificing uniqueness on hero products.",
        "Category and collection page architecture determines how Google understands your site hierarchy. I optimize collection titles, descriptions, H1 tags, and faceted navigation for commercial keywords — 'women's running shoes' not just 'Shoes'. Internal linking from category pages to priority products, breadcrumb navigation, and related product modules strengthen topical authority.",
        "For Shopify stores specifically, I address platform-specific SEO constraints: collection handle optimization, tag and type cleanup, blog-to-product internal linking, and URL redirect management during theme migrations or catalog restructuring.",
      ],
    },
    {
      id: "shopify-seo",
      title: "Shopify SEO services and platform-specific fixes",
      paragraphs: [
        "Shopify has built-in SEO features but also platform limitations that hurt rankings if unmanaged. Default URL structures (/products/, /collections/), duplicate tag pages, automatic canonicalization quirks, and app-injected content that slows pages are common issues I resolve for Shopify merchants.",
        "I optimize Shopify-specific elements: theme SEO settings, meta field usage for custom product data, collection SEO descriptions, automated sitemap review, and redirect rules for discontinued products. For stores using Shopify Markets or multi-language setups, I configure hreflang and regional SEO correctly.",
        "Shopify SEO works best alongside Google Shopping and paid campaigns I also manage. Organic product rankings reduce paid CPC on branded and high-intent terms, while Shopping feed data and on-page SEO reinforce each other through consistent product titles, descriptions, and structured data.",
      ],
    },
    {
      id: "who-for",
      title: "Who should hire ecommerce SEO services",
      paragraphs: [
        "This service is for e-commerce brands on Shopify, WooCommerce, BigCommerce, or custom platforms who want organic traffic to complement paid acquisition. I work with stores doing $500K–$50M+ in annual revenue who need a consultant focused on revenue-generating SEO — not generic content packages.",
        "If your product pages aren't ranking, your site speed is hurting conversions, you're planning a migration or replatform, or you want organic search to reduce rising ad costs, this service is built for you. I also support agencies needing senior e-commerce SEO expertise for client stores.",
      ],
    },
  ],
  services: [
    { title: "Ecommerce SEO Audit", description: "Technical crawl, site speed, indexation, duplicate content, structured data, and product page analysis with prioritized fix list." },
    { title: "Technical SEO Fixes", description: "Core Web Vitals, canonicalization, sitemap, robots.txt, faceted navigation, and crawl budget optimization." },
    { title: "Product Page Optimization", description: "Unique titles, meta descriptions, on-page copy, schema markup, and internal linking for priority SKUs." },
    { title: "Category & Collection SEO", description: "Commercial keyword targeting, hierarchy optimization, and internal linking architecture." },
    { title: "Shopify SEO Services", description: "Platform-specific fixes: theme settings, URL structure, app bloat removal, redirects, and multi-market hreflang." },
    { title: "SEO & Paid Strategy Alignment", description: "Coordinate organic and paid keyword strategy to reduce acquisition costs across channels." },
  ],
  process: [
    { step: "01", title: "SEO audit & discovery", description: "Crawl site, analyze rankings, review technical health, and identify revenue-priority pages." },
    { step: "02", title: "Technical foundation", description: "Fix crawl errors, speed issues, structured data, and indexation problems blocking rankings." },
    { step: "03", title: "On-page optimization", description: "Optimize product and category pages starting with highest-revenue SKUs and collections." },
    { step: "04", title: "Monitor & iterate", description: "Track ranking and organic revenue changes, expand optimization to additional pages, refine strategy." },
  ],
  faqs: [
    { q: "How is ecommerce SEO different from regular SEO?", a: "E-commerce SEO focuses on product pages, category architecture, technical crawlability, and structured data for rich results — not blog content alone. The goal is revenue-generating organic traffic, not informational keyword volume." },
    { q: "Do you specialize in Shopify SEO?", a: "Yes. Shopify is the most common platform I optimize — including theme SEO settings, URL structure, app-related speed issues, collection optimization, and migration redirects." },
    { q: "How long does ecommerce SEO take to show results?", a: "Technical fixes can improve indexation within weeks. Product page ranking improvements typically take 60–120 days depending on competition, domain authority, and content quality. SEO is a compounding channel — results accelerate over time." },
    { q: "Can SEO reduce my Google Ads costs?", a: "Yes. When product and category pages rank organically for high-intent queries, you reduce paid spend on those terms. I coordinate SEO and paid keyword strategy to maximize total acquisition efficiency." },
    { q: "Do you write product descriptions?", a: "I optimize product page content for search intent and conversion — rewriting titles, meta descriptions, and on-page copy for priority SKUs. For large catalogs, I build scalable templates your team can apply." },
    { q: "What's the cost of ecommerce SEO services?", a: "I charge $35/hr on Upwork. A comprehensive SEO audit runs 8–12 hours; ongoing optimization is scoped based on catalog size and technical complexity." },
  ],
  relatedLinks: relatedExcept("/ecommerce-seo-services", ALL_SERVICE_LINKS),
};
