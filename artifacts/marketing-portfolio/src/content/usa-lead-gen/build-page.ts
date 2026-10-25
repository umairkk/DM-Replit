import { HERO_STATS, relatedExcept } from "@/content/seo-pages/shared";
import type { SeoPageContent } from "@/content/seo-pages/types";
import type { UsaLeadGenIndustryInput } from "./types";

const BASE_PATH = "/usa-lead-generation";

function platformLabel(platform: UsaLeadGenIndustryInput["platform"]) {
  if (platform === "Facebook Ads") return "Facebook and Instagram (Meta)";
  if (platform === "Instagram Ads") return "Instagram and Facebook (Meta)";
  return "Meta (Facebook & Instagram)";
}

export function buildUsaLeadGenPage(input: UsaLeadGenIndustryInput): SeoPageContent {
  const path = `${BASE_PATH}/${input.slug}`;
  const targetKeyword = `${input.industry} Lead Generation`;
  const platformText = platformLabel(input.platform);

  return {
    slug: input.slug,
    path,
    targetKeyword,
    metaTitle: input.metaTitle,
    metaDescription: input.metaDescription,
    ogTitle: input.metaTitle,
    ogDescription: input.metaDescription,
    keywords: [
      targetKeyword,
      `${input.industry} ${input.platform}`,
      "USA lead generation",
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "Umair Altaf",
    ],
    schemaServiceType: `${input.industry} Digital Advertising`,
    badge: `Priority #${input.priority} · USA`,
    h1: `${input.industry} — USA Lead Generation`,
    heroSubtext: input.metaDescription,
    heroStats: [...HERO_STATS],
    intro: [
      `${input.industry} businesses across the United States compete for high-intent local leads on Google, Facebook, and Instagram. Rising costs, inconsistent tracking, and generic campaigns make it harder to turn ad spend into booked appointments, estimates, and consultations.`,
      `I help ${input.industry.toLowerCase()} teams build ${input.platform.toLowerCase()} and Google Ads funnels focused on qualified inquiries — not vanity clicks. Campaigns are structured around your service area, offer, and compliance requirements, with weekly optimization and clear reporting.`,
      `This page reflects a strategic priority for ${platformText} lead generation in the USA. It is guidance for planning and budgeting — not a verified performance ranking or guarantee of results.`,
    ],
    painPoints: [
      {
        title: "Low-quality leads from broad targeting",
        description:
          "Campaigns optimized for form fills instead of qualified inquiries waste budget on tire-kickers and out-of-area requests.",
      },
      {
        title: "Tracking gaps after iOS and cookie changes",
        description:
          "When Meta pixel and GA4 events do not match CRM outcomes, algorithms optimize toward the wrong signals.",
      },
      {
        title: "Creative fatigue in local markets",
        description:
          "Static ads burn out quickly in competitive metros, driving up CPL while conversion rates fall.",
      },
      {
        title: "Policy and compliance friction",
        description: `${input.industry} categories often face ad policy reviews, limited targeting, or restricted messaging — mistakes delay launches.`,
      },
      {
        title: "No connection between ads and sales follow-up",
        description:
          "Even strong campaigns fail when lead routing, speed-to-lead, and offer alignment are missing on the back end.",
      },
      {
        title: "Google vs. Meta budget imbalance",
        description:
          "Teams overspend on one channel without testing search intent vs. social demand for their specific services.",
      },
    ],
    solution: {
      title: `${input.platform} + Google Ads strategy for ${input.industry}`,
      paragraphs: [
        `Lead generation for ${input.industry.toLowerCase()} starts with a clear offer, service-area targeting, and landing experiences that match ad intent. I build ${input.platform} campaigns with structured testing: audiences, creative angles, and form or call flows designed for your sales process.`,
        `Google Ads captures high-intent search demand while ${platformText} builds awareness and retargeting pools. Conversion tracking via GA4, GTM, and Meta Conversions API keeps reporting trustworthy so budgets shift toward what actually books jobs.`,
        `For regulated or sensitive categories, messaging stays compliant while still highlighting expertise, social proof, and next steps — consultation requests, estimates, or appointment bookings.`,
      ],
      bullets: [
        `Market and competitor research for ${input.industry} in your target metros`,
        `${input.platform} campaign structure, creative direction, and weekly optimization`,
        "Google Search / Local / Performance Max support where search intent fits",
        "Landing page and lead form recommendations aligned to your offer",
        "Conversion tracking setup and lead quality feedback loops",
        "Monthly reporting focused on CPL, CPA, and booked outcomes",
      ],
    },
    servicesIncluded: [
      {
        title: "Account & Funnel Audit",
        description:
          "Review ads, audiences, creative, landing paths, tracking, and follow-up workflow for quick-win fixes.",
      },
      {
        title: `${input.platform} Management`,
        description:
          "Ongoing campaign management, testing, and budget allocation tuned to lead quality and service capacity.",
      },
      {
        title: "Google Ads Lead Capture",
        description:
          "Search and local campaigns for high-intent keywords that complement social prospecting and retargeting.",
      },
      {
        title: "Tracking & Attribution",
        description:
          "GA4, GTM, pixel/CAPI events, and offline lead imports so platforms optimize toward real outcomes.",
      },
      {
        title: "Creative & Offer Testing",
        description:
          "Iterative ad copy and creative tests grounded in what motivates your ideal customer to inquire.",
      },
      {
        title: "Reporting & Strategy Calls",
        description:
          "Clear performance summaries and recommendations — what to scale, pause, or fix next.",
      },
    ],
    whyChoose: [
      {
        title: "10+ years performance marketing",
        description:
          "Hands-on Google and Meta management across home services, healthcare, legal, and local lead-gen brands.",
      },
      {
        title: "Lead quality over volume",
        description:
          "Campaigns tuned for qualified inquiries that your team can actually close — not inflated form fills.",
      },
      {
        title: "Direct access to a senior operator",
        description:
          "No hand-offs to junior staff — you work with the strategist running the accounts.",
      },
      {
        title: "Cross-channel clarity",
        description:
          "Practical alignment between Google Ads and Meta so channels support each other instead of competing.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & goals",
        description:
          "Define service areas, offers, compliance constraints, target CPL/CPA, and sales follow-up workflow.",
      },
      {
        step: "02",
        title: "Tracking & foundations",
        description:
          "Fix measurement gaps, implement events, and prepare landing paths before scaling spend.",
      },
      {
        step: "03",
        title: "Launch & test",
        description:
          "Deploy structured Meta and Google campaigns with controlled tests on audiences and creative.",
      },
      {
        step: "04",
        title: "Optimize weekly",
        description:
          "Shift budget toward winning ads, keywords, and locations; cut waste and improve lead quality.",
      },
      {
        step: "05",
        title: "Scale & report",
        description:
          "Expand what works, document learnings, and align ad spend with operational capacity.",
      },
    ],
    caseResults: [
      {
        headline: "Local lead-gen account optimization",
        industry: input.industry,
        metrics: [
          { label: "Cost per lead", before: "Baseline", after: "Improved with targeting + creative tests" },
          { label: "Lead quality", before: "Mixed", after: "Higher intent after funnel alignment" },
          { label: "Tracking confidence", before: "Partial", after: "GA4 + Meta CAPI aligned" },
        ],
        summary:
          "Illustrative outcomes from structured funnel fixes, tracking, and weekly optimization — individual results vary by market, offer, and budget.",
      },
    ],
    faqs: [
      {
        q: `Do you manage ${input.platform} for ${input.industry} businesses?`,
        a: `Yes. I build and optimize ${input.platform} campaigns for ${input.industry.toLowerCase()} lead generation, alongside Google Ads when search intent is strong in your markets.`,
      },
      {
        q: "Is this priority list a guarantee of performance?",
        a: "No. The priority list reflects strategic focus areas for Google, Facebook, and Instagram lead generation planning — not verified rankings or guaranteed results.",
      },
      {
        q: "What budget do I need to start?",
        a: "Budget depends on metro competition and service margins. We align ad spend and management scope after a short strategy call and audit of your market.",
      },
      {
        q: "Can you help with landing pages and follow-up?",
        a: "I advise on landing page messaging, forms, and speed-to-lead best practices. Full web design can be scoped separately if needed.",
      },
      {
        q: "Do you work with agencies or only direct clients?",
        a: "Both. Direct local businesses and agency partners are supported, including white-label options for larger engagements.",
      },
    ],
    conclusion: [
      `${input.industry} growth in the USA depends on showing up where prospects search and scroll — with credible offers and clean tracking. ${input.metaDescription}`,
      `If you want ${input.platform.toLowerCase()} and Google Ads management focused on qualified lead generation, book a free strategy call to review your market, current campaigns, and next steps.`,
    ],
    relatedLinks: [
      { href: "/usa-lead-generation", label: "USA Lead Generation Hub" },
      { href: "/meta-ads-expert", label: "Meta Ads Expert" },
      { href: "/google-ads-consultant", label: "Google Ads Consultant" },
      ...relatedExcept(path).slice(0, 2),
    ],
  };
}

export function attachRelatedIndustries(
  page: SeoPageContent,
  all: UsaLeadGenIndustryInput[],
  slug: string,
): SeoPageContent {
  const current = all.find((i) => i.slug === slug);
  if (!current) return page;

  const industryLinks = all
    .filter((i) => i.slug !== slug)
    .sort((a, b) => Math.abs(a.priority - current.priority) - Math.abs(b.priority - current.priority))
    .slice(0, 4)
    .map((i) => ({
      href: `/usa-lead-generation/${i.slug}`,
      label: i.industry,
    }));

  return {
    ...page,
    relatedLinks: [
      { href: "/usa-lead-generation", label: "USA Lead Generation Hub" },
      ...industryLinks,
      { href: "/meta-ads-expert", label: "Meta Ads Expert" },
    ],
  };
}
