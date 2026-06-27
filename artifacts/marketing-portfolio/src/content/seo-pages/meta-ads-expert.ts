import { HERO_STATS, relatedExcept } from "./shared";
import type { SeoPageContent } from "./types";

export const metaAdsExpertPage: SeoPageContent = {
  slug: "meta-ads-expert",
  path: "/meta-ads-expert",
  targetKeyword: "Meta Ads Expert",
  metaTitle: "Meta Ads Expert | Umair Altaf — Facebook & Instagram",
  metaDescription:
    "Meta ads expert for Facebook and Instagram campaign management, CAPI setup, and lead gen optimization. 10+ years experience. Book a free strategy call.",
  keywords: [
    "Meta Ads Expert",
    "Facebook ads expert",
    "Instagram ads expert",
    "Meta ads management",
    "lead generation ads",
  ],
  schemaServiceType: "Meta Ads Management",
  badge: "Meta Ads Expert",
  h1: "Meta Ads Expert",
  heroSubtext:
    "I build and optimize Meta ad campaigns with clean Conversions API tracking, audience strategy, and creative testing — so Facebook and Instagram drive measurable leads and revenue, not just clicks.",
  heroStats: [...HERO_STATS],
  intro: [
    "Meta advertising offers unmatched reach — but iOS privacy changes, attribution shifts, and rising CPMs have made profitable Facebook and Instagram campaigns harder than ever. Most accounts struggle with broken pixel tracking, broad audiences that waste budget, creative fatigue, and reporting that can't reconcile with CRM or GA4.",
    "I'm Umair Altaf, a Meta ads expert with 10+ years managing Facebook and Instagram campaigns for e-commerce brands, real estate teams, legal firms, healthcare providers, and B2B companies. As a Facebook ads expert and Instagram ads expert, I specialize in Conversions API implementation, lead generation ads, and cross-platform strategy paired with Google Ads.",
    "Whether you need Meta ads management for scaling ROAS or fixing under-reporting conversions, you work directly with a senior operator focused on CPL, CPA, and revenue — not vanity engagement metrics.",
  ],
  painPoints: [
    {
      title: "Pixel-only tracking misses conversions",
      description:
        "Browser restrictions and ad blockers mean pixel-only setups capture a fraction of actual conversions — Meta's algorithm bids on incomplete data.",
    },
    {
      title: "Rising CPL without clear cause",
      description:
        "Creative fatigue, audience saturation, and weak landing pages compound — but without CAPI and proper diagnostics, the root cause stays hidden.",
    },
    {
      title: "Outdated interest targeting",
      description:
        "Accounts still running 2020-era detailed targeting with static creative underperform those using creative-led prospecting and broad audiences.",
    },
    {
      title: "Attribution confusion",
      description:
        "Meta's 7-day click window reports differently than GA4 or Google Ads — stakeholders lose trust and cut budget based on bad comparisons.",
    },
    {
      title: "No creative testing cadence",
      description:
        "Meta's algorithm rewards fresh creative. Monthly ad updates can't keep pace — fatigue sets in and CPMs climb while conversion rates drop.",
    },
    {
      title: "Lead quality not optimized",
      description:
        "Optimizing toward form opens instead of qualified leads trains the algorithm to deliver cheap, low-intent submissions.",
    },
  ],
  solution: {
    title: "Meta ads expert strategy: tracking, creative, and funnel alignment",
    paragraphs: [
      "Since Apple's ATT framework, Conversions API is non-negotiable. I implement server-side tracking via GTM server containers, CRM integrations, or platform-native connectors — with event deduplication and enhanced matching so Meta receives complete, clean conversion data.",
      "Creative is the primary targeting lever on Meta. I build structured testing frameworks: hook variations, format tests (static vs. carousel vs. UGC video), and message angle tests. Winners get budget; losers get killed fast. Audience strategy layers first-party data — customer lists, lookalikes from high-LTV buyers, and segmented remarketing pools.",
      "Campaign structure follows your funnel: prospecting with strong creative, retargeting segmented by cart abandonment and product views, and catalog sales tied to product feeds. For lead generation ads, I configure qualification built into forms and offline conversion imports so Meta optimizes toward leads that close.",
    ],
    bullets: [
      "Meta ads account audit: pixel/CAPI diagnostics, structure, creative, and attribution gaps",
      "Conversions API setup with event deduplication and enhanced matching",
      "Lead generation ads with instant forms, landing pages, and CRM offline imports",
      "E-commerce catalog campaigns with dynamic product ads and ROAS optimization",
      "Creative testing framework with weekly iteration cadence",
      "Cross-platform coordination with Google Ads for unified acquisition reporting",
    ],
  },
  servicesIncluded: [
    {
      title: "Meta Ads Account Audit",
      description:
        "Pixel/CAPI diagnostics, campaign structure, audience review, creative analysis, and attribution gap assessment.",
    },
    {
      title: "Conversions API Setup",
      description:
        "Server-side tracking via GTM, CRM integration, event deduplication, and enhanced matching configuration.",
    },
    {
      title: "Lead Generation Campaigns",
      description:
        "Instant form and landing page funnels with qualification, offline conversion imports, and CPL optimization.",
    },
    {
      title: "E-Commerce & Catalog Ads",
      description:
        "Dynamic product ads, catalog sales campaigns, retargeting layers, and ROAS optimization.",
    },
    {
      title: "Creative Testing Framework",
      description:
        "Structured ad tests across hooks, formats, and messaging with weekly iteration cadence.",
    },
    {
      title: "Cross-Platform Strategy",
      description:
        "Coordinate Meta with Google Ads for full-funnel acquisition and unified reporting.",
    },
  ],
  whyChoose: [
    {
      title: "CAPI implementation specialist",
      description:
        "Server-side tracking is the single biggest technical gap I fix in Meta accounts — before any scaling happens.",
    },
    {
      title: "Lead gen and e-commerce expertise",
      description:
        "From real estate CPL reduction to DTC catalog ROAS — proven across high-spend verticals.",
    },
    {
      title: "Creative-led prospecting",
      description:
        "Structured testing frameworks that treat creative as the primary targeting lever — not legacy interest stacks.",
    },
    {
      title: "CRM reconciliation built in",
      description:
        "Meta reporting validated against CRM lead counts so optimization targets leads that actually close.",
    },
    {
      title: "Google + Meta unified strategy",
      description:
        "Full-funnel acquisition across Search, Shopping, and social — with reconciled cross-platform reporting.",
    },
    {
      title: "Direct senior access",
      description:
        "No agency layers. You work with me — a Meta ads expert who owns outcomes.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Audit & discovery",
      description:
        "Review tracking stack, campaign history, creative assets, and business goals across Meta platforms.",
    },
    {
      step: "02",
      title: "Tracking foundation",
      description:
        "Implement or fix CAPI, pixel events, enhanced matching, and attribution reconciliation.",
    },
    {
      step: "03",
      title: "Campaign launch",
      description:
        "Build funnel-aligned campaign structure with creative tests and audience strategy.",
    },
    {
      step: "04",
      title: "Optimize & scale",
      description:
        "Weekly creative refreshes, audience refinement, budget shifts, and CPL/ROAS optimization.",
    },
  ],
  caseResults: [
    {
      headline: "62% CPL reduction for real estate lead gen",
      industry: "Real Estate",
      metrics: [
        { label: "Cost per lead", before: "$89", after: "$34" },
        { label: "CRM qualified leads", before: "41%", after: "68%" },
      ],
      summary:
        "CAPI implementation, landing page rebuild, and lead form qualification improved both cost and lead quality within 45 days.",
    },
    {
      headline: "4.8× ROAS on Meta catalog campaigns",
      industry: "DTC Consumer Goods",
      metrics: [
        { label: "ROAS", before: "1.9×", after: "4.8×" },
        { label: "Creative test velocity", before: "Monthly", after: "Weekly" },
      ],
      summary:
        "UGC video hooks, catalog retargeting layers, and audience signals from purchaser lists transformed Meta from break-even to primary growth channel.",
    },
  ],
  faqs: [
    {
      q: "Do I need Conversions API if I already have the Meta pixel?",
      a: "Yes. The pixel alone misses a significant portion of conversions due to browser restrictions and ad blockers. CAPI sends server-side events that complement the pixel — with deduplication, Meta gets much more complete data.",
    },
    {
      q: "How much does Meta ads management cost?",
      a: "My rate is $35/hr on Upwork with hour packages available. A CAPI setup project typically runs 5–8 hours; ongoing Meta ads management is 10–20+ hours per month depending on creative volume.",
    },
    {
      q: "Can you reduce my Facebook lead cost?",
      a: "CPL reduction comes from fixing tracking, improving creative relevance, tightening audience signals, and optimizing landing pages. I've achieved 40–60%+ CPL reductions after implementing these fundamentals.",
    },
    {
      q: "Do you manage Instagram ads too?",
      a: "Yes. Instagram ads run through Meta Ads Manager — same campaigns, placements, and tracking. I optimize placement mix based on where your audience converts best.",
    },
    {
      q: "Can Meta ads work alongside Google Ads?",
      a: "Absolutely. Meta excels at demand generation and retargeting; Google captures high-intent search. I coordinate both channels with unified reporting.",
    },
    {
      q: "How quickly will I see Meta ads results?",
      a: "Tracking fixes can show impact within 1–2 weeks. Meaningful CPL or ROAS improvements typically emerge within 30–60 days as CAPI data improves optimization and creative tests identify winners.",
    },
  ],
  conclusion: [
    "Profitable Meta advertising in 2025 requires three things: server-side tracking through Conversions API, creative that does the targeting, and conversion actions aligned to business outcomes — not vanity form opens. As a Meta ads expert, I fix the technical foundation first, then scale what works.",
    "I'm Umair Altaf — Facebook ads expert, Instagram ads expert, and performance consultant for businesses spending $3K–$100K+ monthly. Pair Meta with Google Ads consulting or AI automation for reporting — or book a free strategy call to audit your account.",
  ],
  relatedLinks: relatedExcept("/meta-ads-expert"),
};
