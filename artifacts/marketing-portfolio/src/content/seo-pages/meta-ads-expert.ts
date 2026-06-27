import { HERO_STATS } from "./shared";
import { ALL_SERVICE_LINKS, relatedExcept } from "./google-ads-consultant";
import type { SeoPageContent } from "./types";

export const metaAdsExpertPage: SeoPageContent = {
  slug: "meta-ads-expert",
  path: "/meta-ads-expert",
  metaTitle: "Meta Ads Expert | Umair Altaf — Facebook & Instagram Ads Specialist",
  metaDescription:
    "Hire a Meta ads expert for Facebook and Instagram campaign management, CAPI setup, and lead gen optimization. 10+ years performance marketing. Book a free strategy call.",
  keywords: [
    "Meta Ads Expert",
    "Facebook Ads Specialist",
    "Instagram Ads Management",
    "Meta Conversions API Setup",
    "Facebook Lead Generation Ads",
  ],
  schemaServiceType: "Meta Ads Management",
  badge: "Meta Ads Expert",
  h1: "Meta Ads Expert for Facebook, Instagram & Lead Generation Growth",
  heroSubtext:
    "I build and optimize Meta ad campaigns with clean Conversions API tracking, audience strategy, and creative testing — so Facebook and Instagram drive measurable leads and revenue, not just clicks.",
  heroStats: HERO_STATS,
  intro: [
    "Meta advertising offers unmatched reach and targeting precision — but iOS privacy changes, attribution window shifts, and rising CPMs have made profitable Facebook and Instagram campaigns harder than ever. Most accounts struggle with broken pixel tracking, broad audiences that waste budget, creative fatigue, and reporting that can't be reconciled with CRM or GA4 data.",
    "I'm Umair Altaf, a Meta ads expert with 10+ years managing Facebook and Instagram campaigns for e-commerce brands, real estate teams, legal firms, healthcare providers, and B2B companies. I specialize in Conversions API implementation, lead gen funnel optimization, and cross-platform strategy that pairs Meta with Google Ads for full-funnel performance.",
  ],
  sections: [
    {
      id: "meta-landscape",
      title: "The current Meta ads landscape and why expertise matters",
      paragraphs: [
        "Since Apple's ATT framework and Meta's own attribution changes, pixel-only tracking captures a fraction of actual conversions. Advertisers who haven't implemented Conversions API (CAPI) are optimizing toward incomplete data — which means Meta's algorithm bids on ghost signals while real customers convert untracked. This is the single biggest technical gap I see in Meta accounts today.",
        "Creative has also become the primary targeting lever. Meta's Andromeda update and broad targeting defaults mean your ad creative does the audience filtering — not detailed interest stacks. Accounts still running 2020-era interest targeting with static creative underperform accounts that test UGC, video hooks, and carousel formats weekly.",
        "Attribution complexity adds another layer. Meta's 7-day click / 1-day view window reports differently than GA4 last-click or Google Ads data-driven models. Without a reconciliation framework, stakeholders lose trust in ad reporting — and budget gets cut based on incomplete comparisons.",
      ],
    },
    {
      id: "capi-tracking",
      title: "Conversions API and Meta pixel setup done right",
      paragraphs: [
        "I implement server-side tracking through Meta Conversions API — via GTM server containers, direct CRM integrations, or platform-native connectors (Shopify, WordPress, HubSpot). The goal is event deduplication between browser pixel and server events, so Meta receives clean, complete conversion data without double-counting.",
        "For lead-gen accounts, I configure standard events (Lead, CompleteRegistration) and custom conversions aligned to qualified lead criteria — not just form opens. Enhanced matching with hashed email and phone data improves match rates and audience building for retargeting and lookalike seed lists.",
        "Every CAPI implementation includes QA: Meta Events Manager diagnostics, test event verification, and side-by-side comparison with CRM lead counts for at least two weeks post-launch. I won't scale campaigns until tracking integrity is confirmed.",
      ],
    },
    {
      id: "campaign-strategy",
      title: "Facebook and Instagram campaign strategy",
      paragraphs: [
        "Campaign structure follows your funnel, not Meta's default templates. For e-commerce, I build prospecting campaigns with broad or advantage+ audiences fed by strong creative, retargeting campaigns segmented by cart abandonment, product viewers, and past purchasers, and catalog sales campaigns tied to product feeds with dynamic creative.",
        "For lead generation, I design instant form or landing page funnels with qualification built in — using conditional questions, higher-intent placements, and offline conversion imports to train Meta's algorithm on leads that actually close, not just form submissions.",
        "Budget allocation follows a 70/20/10 testing framework: 70% to proven campaigns, 20% to creative and audience tests, 10% to experimental formats. This protects performance while keeping the account fresh.",
      ],
    },
    {
      id: "creative-testing",
      title: "Creative testing and audience strategy on Meta",
      paragraphs: [
        "Creative is the new targeting on Meta. I build structured testing frameworks: hook variations (first 3 seconds for video), format tests (static vs. carousel vs. UGC video), and message angle tests (pain point vs. social proof vs. offer-led). Winners get budget; losers get killed fast — no sentimental attachment to underperforming ads.",
        "Audience strategy layers first-party data on top of broad reach. Customer lists for retention, lookalikes seeded from high-LTV purchasers or qualified leads, and website custom audiences segmented by recency and page depth. Interest targeting supplements where data volume is insufficient — but never replaces creative-driven prospecting.",
        "Recent anonymized outcomes include 62% CPL reduction for a real estate client after CAPI implementation and landing page rebuild, and 4.8× ROAS on Meta catalog campaigns for a DTC brand after creative testing cadence increased from monthly to weekly.",
      ],
    },
    {
      id: "who-for",
      title: "Who should hire a Meta ads expert",
      paragraphs: [
        "This service is for businesses spending $3K–$100K+ per month on Meta who need a senior operator — not a junior media buyer. I work with e-commerce brands, lead-gen companies (real estate, legal, healthcare, home services), SaaS teams, and agencies needing white-label Meta expertise.",
        "If your Meta pixel is under-reporting conversions, your CPL has climbed without clear cause, you need CAPI implemented properly, or you want Meta coordinated with Google Ads for a unified acquisition strategy, this service is built for you.",
        "I also help teams transitioning from agency-managed Meta accounts who want direct senior oversight, transparent reporting, and faster iteration cycles without the overhead of a full-service agency retainer.",
      ],
    },
  ],
  services: [
    { title: "Meta Ads Account Audit", description: "Pixel/CAPI diagnostics, campaign structure, audience review, creative analysis, and attribution gap assessment." },
    { title: "Conversions API Setup", description: "Server-side tracking via GTM, CRM integration, event deduplication, and enhanced matching configuration." },
    { title: "Lead Generation Campaigns", description: "Instant form and landing page funnels with qualification, offline conversion imports, and CPL optimization." },
    { title: "E-Commerce & Catalog Ads", description: "Dynamic product ads, catalog sales campaigns, retargeting layers, and ROAS optimization." },
    { title: "Creative Testing Framework", description: "Structured ad tests across hooks, formats, and messaging with weekly iteration cadence." },
    { title: "Cross-Platform Strategy", description: "Coordinate Meta with Google Ads for full-funnel acquisition and unified reporting." },
  ],
  process: [
    { step: "01", title: "Audit & discovery", description: "Review tracking stack, campaign history, creative assets, and business goals across Meta platforms." },
    { step: "02", title: "Tracking foundation", description: "Implement or fix CAPI, pixel events, enhanced matching, and attribution reconciliation." },
    { step: "03", title: "Campaign launch", description: "Build funnel-aligned campaign structure with creative tests and audience strategy." },
    { step: "04", title: "Optimize & scale", description: "Weekly creative refreshes, audience refinement, budget shifts, and CPL/ROAS optimization." },
  ],
  faqs: [
    { q: "Do I need Conversions API if I already have the Meta pixel?", a: "Yes. The pixel alone misses a significant portion of conversions due to browser restrictions and ad blockers. CAPI sends server-side events that complement the pixel — with deduplication, Meta gets much more complete data for optimization." },
    { q: "How much does Meta ads management cost?", a: "My rate is $35/hr on Upwork with hour packages available. A CAPI setup project typically runs 5–8 hours; ongoing management is 10–20+ hours per month depending on creative volume and campaign count." },
    { q: "Can you reduce my Facebook lead cost?", a: "CPL reduction comes from fixing tracking, improving creative relevance, tightening audience signals, and optimizing landing pages. I've achieved 40–60%+ CPL reductions for lead-gen clients after implementing these fundamentals." },
    { q: "Do you manage Instagram ads too?", a: "Yes. Instagram ads run through Meta Ads Manager — same campaigns, placements, and tracking. I optimize placement mix based on where your audience converts best." },
    { q: "Can Meta ads work alongside Google Ads?", a: "Absolutely. Meta excels at demand generation and retargeting; Google captures high-intent search. I coordinate both channels with unified reporting so you see true cross-platform performance." },
    { q: "How quickly will I see Meta ads results?", a: "Tracking fixes can show impact within 1–2 weeks. Meaningful CPL or ROAS improvements typically emerge within 30–60 days as CAPI data improves optimization and creative tests identify winners." },
  ],
  relatedLinks: relatedExcept("/meta-ads-expert", ALL_SERVICE_LINKS),
};
