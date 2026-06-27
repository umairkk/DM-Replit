import { HERO_STATS } from "@/content/seo-pages/shared";
import type { SeoPageContent, SeoRelatedLink } from "./types";

function relatedExcept(currentPath: string, links: SeoRelatedLink[]): SeoRelatedLink[] {
  return links.filter((l) => l.href !== currentPath).slice(0, 5);
}

const ALL_SERVICE_LINKS: SeoRelatedLink[] = [
  { href: "/google-ads-consultant", label: "Google Ads Consultant" },
  { href: "/google-merchant-center-suspension-fix", label: "Merchant Center Suspension Fix" },
  { href: "/google-shopping-ads-expert", label: "Google Shopping Ads Expert" },
  { href: "/performance-max-specialist", label: "Performance Max Specialist" },
  { href: "/meta-ads-expert", label: "Meta Ads Expert" },
  { href: "/ai-automation-agency", label: "AI Automation Agency" },
  { href: "/ecommerce-seo-services", label: "Ecommerce SEO Services" },
  { href: "/shopify-google-ads-expert", label: "Shopify Google Ads Expert" },
];

export const googleAdsConsultantPage: SeoPageContent = {
  slug: "google-ads-consultant",
  path: "/google-ads-consultant",
  metaTitle: "Google Ads Consultant | Umair Altaf — PPC & Performance Marketing",
  metaDescription:
    "Hire a Google Ads consultant with 10+ years experience and $50M+ revenue generated. Search, Shopping, PMax, conversion tracking & ROAS optimization. Book a free strategy call.",
  keywords: [
    "Google Ads Consultant",
    "PPC Specialist",
    "Google Ads Expert",
    "Performance Marketing Consultant",
    "Google Ads Management",
  ],
  schemaServiceType: "Google Ads Consulting",
  badge: "Google Ads Consultant",
  h1: "Google Ads Consultant for High-Intent Lead & Revenue Growth",
  heroSubtext:
    "I help businesses turn Google Ads into a predictable revenue engine — with clean tracking, lean account structure, and ROAS-first optimization across Search, Shopping, and Performance Max.",
  heroStats: HERO_STATS,
  intro: [
    "If you're spending on Google Ads but struggling to prove ROI, you're not alone. Most accounts leak budget through broad match waste, broken conversion tracking, bloated campaign structures, and bidding strategies that optimize for clicks instead of revenue. That's where an experienced Google Ads consultant makes the difference.",
    "I'm Umair Altaf, a performance marketing consultant with 10+ years managing Google Ads for e-commerce brands, lead-gen businesses, agencies, and SaaS companies worldwide. I've generated $50M+ in tracked revenue and managed $15M+ in ad spend — with a 100% Job Success score on Upwork and platform certifications across Google, Meta, and Microsoft Advertising.",
  ],
  sections: [
    {
      id: "why-hire",
      title: "Why hire a Google Ads consultant instead of guessing in-house?",
      paragraphs: [
        "Google Ads changes constantly — from broad match expansion and Performance Max automation to consent-mode tracking updates and Smart Bidding behavior shifts. Without someone who lives inside the platform daily, it's easy to miss the small settings that silently drain budget or under-report conversions.",
        "A dedicated Google Ads consultant brings account architecture, keyword strategy, negative keyword sculpting, landing page alignment, and GA4/GTM validation together into one cohesive system. You get faster diagnosis of wasted spend, clearer reporting for stakeholders, and a roadmap tied to CPL, CPA, and ROAS — not vanity metrics like impressions or CTR alone.",
        "Whether you're rebuilding a messy legacy account, scaling a profitable campaign, or preparing for peak season, working with a specialist reduces trial-and-error and accelerates time-to-results.",
      ],
    },
    {
      id: "channels",
      title: "Google Ads channels I manage for clients",
      paragraphs: [
        "Search campaigns remain the backbone of high-intent acquisition for legal, home services, B2B, finance, and local businesses. I build SPAG/SKAG-inspired structures with exact and phrase match control, ad copy testing, and landing page relevance that protects Quality Score while capturing bottom-funnel demand.",
        "For e-commerce, Google Shopping and Performance Max campaigns drive scalable product-level revenue when feeds, custom labels, and audience signals are configured correctly. I optimize Merchant Center feeds, margin-tier segmentation, and remarketing layers so Shopping isn't just spending — it's profiting.",
        "Display, YouTube, Discovery, and remarketing extend reach and recover abandoned visitors. Every channel ties back to conversion tracking you can trust — because without accurate data, even the best Google Ads consultant is flying blind.",
      ],
    },
    {
      id: "results",
      title: "Results-focused Google Ads management",
      paragraphs: [
        "My approach starts with a forensic audit: conversion tracking, attribution gaps, search term waste, bid strategy fit, and landing page conversion rate. From there, I prioritize quick wins that protect budget immediately, then layer in structural improvements and scaling tests.",
        "Recent anonymized outcomes include 8.2× ROAS on Google Shopping for a fashion brand, 62% CPL reduction on Meta paired with Google Search for real estate, and 7.4% conversion rates on legal Search after call-tracking and landing page rebuilds. Results vary by industry and offer — but the methodology is consistent: measure, fix tracking, tighten intent, then scale.",
        "You'll receive transparent reporting with before/after metrics, weekly optimization notes, and recommendations you can act on — whether you manage creative in-house or need full-service support.",
      ],
    },
    {
      id: "who-for",
      title: "Who this Google Ads consulting service is for",
      paragraphs: [
        "I work best with businesses spending from $3K to $100K+ per month who need a senior operator — not a generic agency account manager. Common clients include Shopify and WooCommerce stores, lead-gen companies (legal, real estate, healthcare, home services), B2B SaaS teams, and marketing agencies needing white-label PPC expertise.",
        "If you need someone to set up GA4 and GTM properly, fix Merchant Center disapprovals, rebuild Performance Max with audience signals, or simply stop the bleeding in an inherited account, this service is built for you.",
      ],
    },
    {
      id: "difference",
      title: "What makes my Google Ads consulting different",
      paragraphs: [
        "I don't sell retainers you don't need. You can hire me by the hour on Upwork, purchase structured hour packages, or scope a fixed project for audits and rebuilds. Communication is direct — no layers of account coordinators.",
        "Every recommendation is tied to revenue impact. I focus on conversion tracking integrity first, because scaling broken data only scales problems. Then we optimize for the KPI that matters to your business: ROAS, CPL, CPA, or pipeline value.",
      ],
    },
  ],
  services: [
    { title: "Full Google Ads Audit", description: "Tracking, structure, search terms, bids, ads, extensions, and landing page alignment with prioritized fix list." },
    { title: "Search Campaign Management", description: "Keyword architecture, match type strategy, ad copy testing, negatives, and Quality Score improvement." },
    { title: "Shopping & PMax Setup", description: "Feed optimization, custom labels, asset groups, audience signals, and listing-level performance tuning." },
    { title: "Conversion Tracking (GA4 + GTM)", description: "Event setup, enhanced conversions, call tracking integration, and attribution QA." },
    { title: "Landing Page CRO Guidance", description: "Message match, form optimization, speed checks, and test ideas to lift conversion rate." },
    { title: "Monthly Reporting & Strategy", description: "Clear dashboards, insights, and next-step roadmap — not data dumps." },
  ],
  process: [
    { step: "01", title: "Discovery & audit", description: "Review goals, current spend, tracking stack, and account history. Identify leaks and quick wins." },
    { step: "02", title: "Tracking & foundation", description: "Fix GA4/GTM, conversion actions, and Merchant Center issues before scaling spend." },
    { step: "03", title: "Restructure & launch", description: "Rebuild campaigns with intent-based architecture, ad tests, and bid strategy aligned to your KPI." },
    { step: "04", title: "Optimize & scale", description: "Ongoing search term mining, creative tests, budget allocation, and ROAS/CPL optimization." },
  ],
  faqs: [
    { q: "How much does a Google Ads consultant cost?", a: "My freelance rate is $35/hr on Upwork with hour packages available. Total investment depends on account size and scope — a focused audit may take 5–10 hours, while ongoing management typically runs 10–20+ hours per month for active accounts." },
    { q: "Do you work with small budgets?", a: "Yes, if tracking and offer-market fit are solid. For budgets under $3K/month, I often recommend starting with an audit and setup project so every dollar works harder before scaling." },
    { q: "Can you fix my Google Ads conversion tracking?", a: "Absolutely. GA4, GTM, Google Ads conversion actions, enhanced conversions, and call tracking are core specialties. I won't scale campaigns until data is trustworthy." },
    { q: "Do you manage Performance Max and Shopping?", a: "Yes. I manage feed-based campaigns daily — including Merchant Center optimization, PMax asset groups, and listing-level performance analysis for e-commerce clients." },
    { q: "How quickly will I see results?", a: "Tracking fixes and waste reduction can show impact within 1–2 weeks. Meaningful CPL/ROAS improvements typically emerge within 30–90 days depending on volume, sales cycle, and landing page tests." },
    { q: "Can you work with my in-house team or agency?", a: "Yes. I collaborate with internal marketing teams, founders, and agencies needing senior PPC support on Google Ads specifically." },
  ],
  relatedLinks: relatedExcept("/google-ads-consultant", ALL_SERVICE_LINKS),
};

export { ALL_SERVICE_LINKS, relatedExcept };
