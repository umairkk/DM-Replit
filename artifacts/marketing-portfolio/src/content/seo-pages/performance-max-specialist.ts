import { HERO_STATS } from "./shared";
import { ALL_SERVICE_LINKS, relatedExcept } from "./google-ads-consultant";
import type { SeoPageContent } from "./types";

export const performanceMaxSpecialistPage: SeoPageContent = {
  slug: "performance-max-specialist",
  path: "/performance-max-specialist",
  metaTitle: "Performance Max Specialist | Umair Altaf — PMax Strategy & ROAS",
  metaDescription:
    "Hire a Performance Max specialist for PMax campaign strategy, asset groups, audience signals, and ROAS optimization. 10+ years Google Ads experience. Book a free strategy call.",
  keywords: [
    "Performance Max Specialist",
    "PMax Campaign Management",
    "Performance Max Expert",
    "PMax Asset Groups",
    "Performance Max ROAS Optimization",
  ],
  schemaServiceType: "Performance Max Campaign Management",
  badge: "Performance Max Specialist",
  h1: "Performance Max Specialist for Controlled, Profitable PMax Campaigns",
  heroSubtext:
    "I build Performance Max campaigns with intentional asset groups, strong audience signals, and listing segmentation — so automation works for you, not against your margin.",
  heroStats: HERO_STATS,
  intro: [
    "Performance Max is Google's default recommendation for most advertisers — but out-of-the-box PMax setups often bleed budget into Display and Video placements with little transparency, while cannibalizing brand Search traffic. Without deliberate asset group architecture, audience signals, and listing filters, PMax becomes a black box that spends aggressively and reports inflated conversion volume.",
    "I'm Umair Altaf, a Performance Max specialist who treats PMax as a precision tool — not a set-and-forget campaign type. With 10+ years in Google Ads and deep e-commerce experience, I configure asset groups, audience signals, brand exclusions, and feed-based listing groups so Performance Max complements your Search and Shopping strategy instead of replacing strategic control.",
  ],
  sections: [
    {
      id: "pmax-challenges",
      title: "Why most Performance Max campaigns underperform",
      paragraphs: [
        "The most common PMax failure pattern: one catch-all campaign with generic assets, no audience signals, and no listing group segmentation. Google's automation fills inventory across Search, Shopping, Display, YouTube, Gmail, and Discover — but without guidance, it optimizes toward the easiest conversions, which are often low-intent or branded queries you were already capturing elsewhere.",
        "Transparency gaps make optimization harder. While asset group reporting and search term insights have improved, many advertisers still can't see where budget goes or which creative combinations drive results. Weak conversion tracking amplifies the problem — PMax will happily optimize toward micro-conversions or duplicated events if your setup isn't clean.",
        "Cannibalization is the silent budget killer. PMax can absorb branded search traffic that would convert cheaper through dedicated Search campaigns, inflating PMax ROAS while raising overall account CPA. Without brand exclusion strategies and account-level budget coordination, you're paying a premium for conversions you already own.",
      ],
    },
    {
      id: "asset-groups",
      title: "Performance Max asset group strategy",
      paragraphs: [
        "Asset groups are the control lever inside PMax. I build themed asset groups aligned to product categories, margin tiers, customer segments, or promotional periods — each with dedicated headlines, descriptions, images, and video assets that match the intent of that segment. This gives Google's machine learning clearer signals about which creative resonates with which audience.",
        "For e-commerce, listing group filters within each asset group tie creative messaging to specific product sets. Hero products get hero assets; clearance inventory gets urgency-focused copy; new arrivals get discovery-oriented creative. The goal is message-product alignment that lifts click-through and conversion rates across surfaces.",
        "I also implement structured asset testing: rotating headline and description variants, monitoring asset performance ratings, and refreshing underperforming creative before fatigue sets in. PMax rewards fresh, relevant assets — stale creative is a common reason campaigns plateau after initial learning.",
      ],
    },
    {
      id: "audience-signals",
      title: "Audience signals that guide PMax automation",
      paragraphs: [
        "Audience signals don't restrict targeting in PMax — they guide it. I configure custom segments based on search terms, competitor URLs, and in-market categories; first-party customer lists from CRM or ecommerce platforms; and remarketing pools segmented by purchase history, cart abandonment, and lifetime value. Strong signals accelerate learning and improve placement quality.",
        "For lead-gen accounts, audience signals based on high-intent search themes and converted user profiles help PMax find lookalike prospects faster than cold automation alone. I pair this with conversion action segmentation so PMax optimizes toward qualified leads — not form starts or page views miscategorized as conversions.",
        "Signal hygiene matters: outdated customer lists, overly broad in-market segments, and contaminated remarketing pools (e.g., including non-buyers in 'purchasers' lists) send wrong optimization cues. I audit and refresh signals as part of ongoing PMax management.",
      ],
    },
    {
      id: "retail-pmax",
      title: "Performance Max for e-commerce and retail",
      paragraphs: [
        "Retail PMax requires a healthy Merchant Center feed as the foundation. I configure product feeds with custom labels that map to asset groups and listing filters — enabling margin-aware automation where high-ROAS product tiers get more aggressive targets and low-margin SKUs are suppressed or isolated.",
        "Brand exclusion is critical for retail accounts running both PMax and branded Search. I implement account-level negative keyword lists, brand restriction settings where applicable, and budget allocation models that prevent PMax from consuming branded traffic at higher CPAs.",
        "For accounts transitioning from Standard Shopping to PMax, I manage the migration carefully — maintaining performance benchmarks, comparing channel reporting, and ensuring feed optimization carries over. The goal is incremental reach from PMax, not a revenue swap that hides rising CPAs.",
      ],
    },
    {
      id: "who-for",
      title: "Who should hire a Performance Max specialist",
      paragraphs: [
        "This service is for advertisers already running or considering Performance Max who want strategic control — not default automation. I work with e-commerce brands, lead-gen businesses, and agencies managing PMax at $3K–$100K+ monthly spend.",
        "If your PMax campaigns show strong reported ROAS but overall account profitability hasn't improved, you're unsure how to structure asset groups, you need brand cannibalization fixed, or you want a senior operator to build PMax alongside Search and Shopping rather than replacing them, this service is for you.",
      ],
    },
  ],
  services: [
    { title: "PMax Account Audit", description: "Asset group review, audience signal analysis, cannibalization check, conversion tracking validation, and channel performance breakdown." },
    { title: "Asset Group Architecture", description: "Themed asset groups with aligned creative, listing filters, and structured asset testing plans." },
    { title: "Audience Signal Strategy", description: "Custom segments, customer match lists, and remarketing pools configured to guide PMax learning." },
    { title: "Retail PMax & Feed Integration", description: "Listing group segmentation, custom label mapping, and Merchant Center feed optimization for retail." },
    { title: "Brand Exclusion & Cannibalization Fix", description: "Protect branded Search performance while letting PMax find incremental demand." },
    { title: "Ongoing PMax Optimization", description: "Weekly asset refreshes, signal updates, budget allocation, and ROAS/CPA tuning." },
  ],
  process: [
    { step: "01", title: "PMax forensic audit", description: "Review current campaigns, asset performance, audience signals, tracking, and account-level impact." },
    { step: "02", title: "Foundation fixes", description: "Clean conversion actions, configure brand exclusions, and validate feed health for retail accounts." },
    { step: "03", title: "Rebuild asset groups", description: "Launch structured PMax campaigns with intentional creative, signals, and listing segmentation." },
    { step: "04", title: "Monitor & optimize", description: "Track channel placement trends, refresh assets, adjust targets, and scale profitably." },
  ],
  faqs: [
    { q: "Should I replace Standard Shopping with Performance Max?", a: "Not always. For many e-commerce accounts, a hybrid approach works best — Standard Shopping for margin control and PMax for incremental reach. I evaluate your catalog, data volume, and goals before recommending a migration." },
    { q: "How do audience signals work in PMax?", a: "Audience signals suggest ideal customers to Google's algorithm — they don't restrict targeting. Strong signals based on converters, customer lists, and custom intent segments help PMax find qualified traffic faster." },
    { q: "Can you fix PMax brand cannibalization?", a: "Yes. Brand cannibalization is one of the most common PMax issues I resolve through brand exclusions, account structure changes, and budget coordination with Search campaigns." },
    { q: "How long does PMax take to optimize?", a: "PMax typically needs 2–4 weeks of learning after significant structural changes. Conversion volume affects learning speed — accounts with 30+ conversions per month per campaign optimize faster." },
    { q: "Do you manage PMax for lead generation?", a: "Yes. Lead-gen PMax requires clean conversion actions (qualified leads only), strong audience signals, and asset groups aligned to funnel stages — all core parts of my PMax workflow." },
    { q: "What's the cost of PMax management?", a: "I charge $35/hr on Upwork with hour packages. PMax audits run 5–10 hours; ongoing management typically 8–15+ hours per month depending on asset volume and account complexity." },
  ],
  relatedLinks: relatedExcept("/performance-max-specialist", ALL_SERVICE_LINKS),
};
