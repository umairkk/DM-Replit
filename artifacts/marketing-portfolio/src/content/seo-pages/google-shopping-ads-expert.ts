import { HERO_STATS } from "./shared";
import { ALL_SERVICE_LINKS, relatedExcept } from "./google-ads-consultant";
import type { SeoPageContent } from "./types";

export const googleShoppingAdsExpertPage: SeoPageContent = {
  slug: "google-shopping-ads-expert",
  path: "/google-shopping-ads-expert",
  metaTitle: "Google Shopping Ads Expert | Umair Altaf — Feed & ROAS Optimization",
  metaDescription:
    "Hire a Google Shopping ads expert for feed optimization, campaign structure, and ROAS scaling. 10+ years managing Shopping campaigns for e-commerce brands. Book a free strategy call.",
  keywords: [
    "Google Shopping Ads Expert",
    "Google Shopping Campaign Management",
    "Shopping Feed Optimization",
    "Google Shopping ROAS",
    "Ecommerce Shopping Ads Specialist",
  ],
  schemaServiceType: "Google Shopping Ads Management",
  badge: "Google Shopping Ads Expert",
  h1: "Google Shopping Ads Expert for Profitable E-Commerce Growth",
  heroSubtext:
    "I build and optimize Google Shopping campaigns that scale revenue — with clean product feeds, margin-aware segmentation, and ROAS-first bidding across Standard Shopping and Performance Max.",
  heroStats: HERO_STATS,
  intro: [
    "Google Shopping remains one of the highest-intent channels for e-commerce — but most accounts underperform because of weak feeds, flat campaign structures, and bidding strategies that optimize for volume instead of profit. Without product-level visibility and Merchant Center discipline, Shopping ads become an expensive catalog browse instead of a revenue engine.",
    "I'm Umair Altaf, a Google Shopping ads expert with 10+ years managing product campaigns for fashion, home goods, electronics, and DTC brands. I've generated $50M+ in tracked e-commerce revenue and managed $15M+ in ad spend — with deep expertise in feed optimization, custom label segmentation, and listing-level ROAS tuning that turns Shopping into predictable growth.",
  ],
  sections: [
    {
      id: "shopping-fundamentals",
      title: "What makes Google Shopping campaigns profitable",
      paragraphs: [
        "Shopping success starts before the campaign — in Merchant Center. Your product titles, descriptions, GTINs, categories, and custom labels determine which queries you appear for and how Google ranks your listings against competitors. A well-structured feed with accurate pricing, high-quality images, and strategic custom labels gives you control that campaign settings alone cannot provide.",
        "Campaign architecture matters too. I segment by margin tier, bestsellers, seasonality, and brand vs. non-brand intent using a combination of Standard Shopping priority tiers, Performance Max asset groups, and listing filters. This prevents high-margin hero products from subsidizing unprofitable long-tail SKUs.",
        "The third pillar is conversion tracking you can trust. Enhanced conversions, accurate transaction values, and proper new vs. returning customer signals ensure Smart Bidding optimizes toward real revenue — not inflated or missing conversion data that skews automated strategies.",
      ],
    },
    {
      id: "feed-optimization",
      title: "Product feed optimization for Shopping performance",
      paragraphs: [
        "Feed optimization is ongoing, not a one-time setup. I improve product titles with front-loaded keywords and variant clarity, refine Google product categories, enrich descriptions without keyword stuffing, and configure custom labels for margin, ROAS tier, season, and inventory velocity. These labels become the segmentation backbone for campaign bidding and budget allocation.",
        "For Shopify, WooCommerce, and enterprise catalogs, I audit the entire feed pipeline: primary and supplemental feeds, sale price handling, variant grouping, and out-of-stock suppression. Common wins come from fixing disapproved products, removing stale SKUs, and aligning promotional pricing between feed and landing pages.",
        "I also leverage feed rules and supplemental data sources to push competitive advantages — like custom_title overrides for top performers, inventory-aware bid modifiers via labels, and promotional messaging that complies with Google's editorial requirements.",
      ],
    },
    {
      id: "campaign-strategy",
      title: "Google Shopping campaign strategy and structure",
      paragraphs: [
        "Every account is different, but the goal is always the same: give Google the right signals while retaining enough control to protect margin. For accounts needing granular control, Standard Shopping with priority-based funneling (low/medium/high) still delivers excellent results. For scale, Performance Max with well-configured asset groups, audience signals, and listing group filters takes over — but only when the feed and tracking foundation is solid.",
        "I build search term and product-level insights into weekly optimization: negative keyword lists for irrelevant queries, product group bid adjustments based on ROAS and impression share, and budget shifts toward proven converters. Hero products get dedicated budget protection; underperformers get suppressed or excluded until feed or landing page issues are resolved.",
        "Seasonal strategy is built into the structure — pre-launch feed updates for holiday collections, promotional custom labels for sale events, and post-peak analysis to reallocate budget toward evergreen performers.",
      ],
    },
    {
      id: "roas-scaling",
      title: "Scaling Shopping ROAS without wasting budget",
      paragraphs: [
        "Scaling Shopping is not about increasing budget blindly. I use target ROAS and target CPA bidding with realistic goals derived from margin data — not platform suggestions alone. Before scaling, I validate that conversion volume supports Smart Bidding, that feed disapproval rates are near zero, and that landing page conversion rates are stable.",
        "Recent anonymized outcomes include 8.2× ROAS on Google Shopping for a fashion brand after feed restructuring and margin-tier segmentation, and significant CPA reductions for home goods brands after listing-level analysis revealed top 20% of SKUs driving 80% of profit. Results vary — but the methodology is consistent: fix the feed, segment by profit, then scale what works.",
        "I report on product-level metrics that matter: ROAS by category, impression share for top SKUs, feed health scores, and wasted spend on zero-conversion products. You get actionable insights, not vanity dashboards.",
      ],
    },
    {
      id: "who-for",
      title: "Who should hire a Google Shopping ads expert",
      paragraphs: [
        "This service is for e-commerce brands spending $3K–$100K+ per month on Google Ads who need Shopping-specific expertise — not a generalist agency manager. Common clients include Shopify and WooCommerce stores, multi-brand retailers, and agencies needing senior Shopping support for client accounts.",
        "If your Shopping campaigns have flat ROAS, your feed has persistent disapprovals, you're unsure whether to use Standard Shopping or Performance Max, or you need someone to connect Merchant Center health with Google Ads bidding strategy, this service is built for you.",
      ],
    },
  ],
  services: [
    { title: "Shopping Campaign Audit", description: "Feed health, campaign structure, bidding strategy, search term waste, and product-level ROAS analysis." },
    { title: "Merchant Center Feed Optimization", description: "Titles, categories, custom labels, supplemental feeds, and disapproval resolution." },
    { title: "Standard Shopping Setup", description: "Priority-tier architecture, product group segmentation, and negative keyword strategy." },
    { title: "Performance Max for Retail", description: "Asset groups, listing filters, audience signals, and brand exclusions for e-commerce." },
    { title: "ROAS & Budget Scaling", description: "Bid strategy tuning, margin-aware budget allocation, and product-level performance optimization." },
    { title: "Monthly Shopping Reporting", description: "Product-level insights, feed health monitoring, and strategic recommendations." },
  ],
  process: [
    { step: "01", title: "Feed & account audit", description: "Review Merchant Center health, feed quality, tracking, and current Shopping campaign performance." },
    { step: "02", title: "Feed & tracking fixes", description: "Optimize product data, resolve disapprovals, and validate conversion tracking before scaling." },
    { step: "03", title: "Campaign rebuild", description: "Launch margin-segmented Shopping structure with aligned bidding strategy and budget plan." },
    { step: "04", title: "Optimize & scale", description: "Weekly product-level tuning, search term mining, seasonal updates, and ROAS scaling." },
  ],
  faqs: [
    { q: "Standard Shopping vs Performance Max — which should I use?", a: "It depends on your catalog size, margin data, and control needs. Standard Shopping offers granular product group control; PMax scales reach across Google surfaces. I often use both — Standard Shopping for margin control, PMax for incremental reach — when the feed and tracking support it." },
    { q: "How important is the product feed for Shopping ROAS?", a: "Critical. Feed quality directly affects which queries you match, how Google ranks your products, and how effectively you can segment by margin. Most Shopping underperformance I see starts with feed issues, not campaign settings." },
    { q: "Can you manage Shopping for Shopify stores?", a: "Yes. Shopify Google & YouTube integration, third-party feed apps, and custom supplemental feeds are core workflows I manage daily." },
    { q: "How quickly can Shopping campaigns improve?", a: "Feed fixes and structural changes can show impact within 2–4 weeks. Meaningful ROAS improvements typically emerge within 30–60 days as Smart Bidding learns from cleaner data and better segmentation." },
    { q: "Do you fix Merchant Center disapprovals?", a: "Yes. Feed disapprovals, policy violations, and account-level issues are part of my Shopping workflow. A healthy Merchant Center account is prerequisite to profitable Shopping ads." },
    { q: "What's your pricing for Shopping management?", a: "I work at $35/hr on Upwork with hour packages available. Scope depends on catalog size and account complexity — audits typically run 5–10 hours, ongoing management 10–20+ hours per month." },
  ],
  relatedLinks: relatedExcept("/google-shopping-ads-expert", ALL_SERVICE_LINKS),
};
