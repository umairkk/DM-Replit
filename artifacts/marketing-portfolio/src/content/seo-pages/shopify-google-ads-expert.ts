import { HERO_STATS } from "./shared";
import { ALL_SERVICE_LINKS, relatedExcept } from "./google-ads-consultant";
import type { SeoPageContent } from "./types";

export const shopifyGoogleAdsExpertPage: SeoPageContent = {
  slug: "shopify-google-ads-expert",
  path: "/shopify-google-ads-expert",
  metaTitle: "Shopify Google Ads Expert | Umair Altaf — Shopping & PMax for Shopify",
  metaDescription:
    "Shopify Google Ads expert for Shopping campaigns, Performance Max, conversion tracking, and feed integration. Scale your Shopify store with profitable PPC. Book a free strategy call.",
  keywords: [
    "Shopify Google Ads Expert",
    "Google Ads for Shopify",
    "Shopify Shopping Ads",
    "Shopify Performance Max",
    "Shopify PPC Management",
  ],
  schemaServiceType: "Shopify Google Ads Management",
  badge: "Shopify Google Ads Expert",
  h1: "Shopify Google Ads Expert for Shopping, PMax & Revenue Scaling",
  heroSubtext:
    "I connect Shopify stores to profitable Google Ads campaigns — with clean feed integration, accurate conversion tracking, and Shopping or Performance Max strategies built for e-commerce ROAS.",
  heroStats: HERO_STATS,
  intro: [
    "Shopify makes launching a store easy — but connecting it to profitable Google Ads is where most merchants struggle. The Google & YouTube app syncs products, yet feed errors, conversion tracking gaps, and generic campaign structures leave Shopify stores spending without scalable returns. Performance Max defaults absorb budget; Shopping feeds disapprove silently; and GA4 purchase events often don't match Shopify order data.",
    "I'm Umair Altaf, a Shopify Google Ads expert with 10+ years managing PPC for e-commerce brands. I've scaled Shopify stores across fashion, home goods, beauty, and DTC niches — handling everything from Google & YouTube app setup and Merchant Center feed optimization to Performance Max asset groups and Shopify-specific conversion tracking through GTM and enhanced conversions.",
  ],
  sections: [
    {
      id: "shopify-integration",
      title: "Shopify and Google Ads integration done right",
      paragraphs: [
        "The Shopify Google & YouTube app is the starting point — not the finish line. I configure the app correctly: product sync settings, automatic mark-up handling, variant grouping, and supplemental feed data for custom labels that enable margin-tier campaign segmentation. Many Shopify stores run with default settings that push incomplete product data and miss custom label opportunities entirely.",
        "Merchant Center connection requires more than clicking 'connect.' Shipping settings, return policies, business information, and tax configuration must align with your Shopify store's actual checkout experience. Mismatches here cause disapprovals and suspensions — especially for stores shipping internationally or offering complex shipping rules through Shopify apps.",
        "For stores using third-party feed apps (Feedonomics, DataFeedWatch, Mulberry) or custom API feeds, I audit the entire pipeline to ensure Shopify inventory changes, sale prices, and product updates sync accurately to Merchant Center within acceptable latency.",
      ],
    },
    {
      id: "shopify-tracking",
      title: "Conversion tracking for Shopify Google Ads campaigns",
      paragraphs: [
        "Accurate conversion tracking is the biggest technical gap in Shopify Google Ads accounts. The native Google & YouTube app tracks some events, but I implement comprehensive tracking through Google Tag Manager: purchase events with dynamic transaction values, add-to-cart, begin checkout, and enhanced conversions with hashed customer data for improved Smart Bidding match rates.",
        "Shopify's checkout extensibility (Shopify Checkout vs. third-party checkouts) affects tracking implementation. I configure GTM containers for standard Shopify checkout, Shop Pay, and common third-party checkout apps — ensuring conversion data flows reliably regardless of payment method.",
        "I reconcile Google Ads conversion data with Shopify order reports weekly. Discrepancies between platform-reported ROAS and actual Shopify revenue indicate tracking issues that must be fixed before scaling — I treat this reconciliation as non-negotiable.",
      ],
    },
    {
      id: "shopify-shopping",
      title: "Google Shopping campaigns for Shopify stores",
      paragraphs: [
        "Shopping is the highest-ROI Google Ads channel for most Shopify stores — when feeds and campaigns are configured properly. I build margin-segmented Shopping structures using custom labels pushed from Shopify: hero products, clearance, new arrivals, and high-margin tiers each get appropriate bidding strategies and budget allocation.",
        "Product title optimization in Shopify directly impacts Shopping query matching. I rewrite titles for top SKUs with front-loaded keywords, variant clarity (size, color, material), and brand positioning — changes that propagate to Merchant Center through the feed sync.",
        "For Shopify stores with large catalogs (1,000+ SKUs), I implement feed rules and supplemental feeds to manage complexity: exclude out-of-stock variants automatically, override titles for top performers, and apply promotional labels during sale events without manual SKU-by-SKU edits.",
      ],
    },
    {
      id: "shopify-pmax",
      title: "Performance Max for Shopify e-commerce",
      paragraphs: [
        "Performance Max is Google's recommended campaign type for Shopify stores — but default PMax setups often underperform. I build PMax campaigns with multiple asset groups tied to product categories or margin tiers, audience signals from Shopify customer lists and cart abandoners, and listing group filters that prevent low-margin products from consuming budget.",
        "Brand exclusion strategy protects Shopify stores running branded Search campaigns alongside PMax. Without it, PMax captures branded queries at higher CPAs — inflating reported ROAS while raising total acquisition cost. I implement brand restrictions and account-level negative keyword strategies specific to Shopify store brand names and product names.",
        "Shopify-specific PMax creative uses product photography, lifestyle images, and UGC from your store's social presence. I configure asset groups with Shopify product feed images supplemented by uploaded creative — giving Google's automation enough variety to test across Search, Shopping, Display, YouTube, and Discover placements.",
      ],
    },
    {
      id: "who-for",
      title: "Who should hire a Shopify Google Ads expert",
      paragraphs: [
        "This service is for Shopify store owners and DTC brands spending $3K–$100K+ per month on Google Ads who need platform-specific expertise. Whether you're on Shopify Basic or Shopify Plus, running a single storefront or multiple markets, I bring the integration knowledge that generalist PPC managers often lack.",
        "If your Shopify Google Ads ROAS is flat, your Merchant Center feed has persistent errors, conversion tracking doesn't match Shopify orders, or you're launching a new store and want Google Ads set up correctly from day one, this service is built for you.",
      ],
    },
  ],
  services: [
    { title: "Shopify Google Ads Audit", description: "Google & YouTube app config, feed health, conversion tracking, campaign structure, and Shopify order reconciliation." },
    { title: "Merchant Center & Feed Setup", description: "Product sync optimization, custom labels, shipping settings, and disapproval resolution for Shopify feeds." },
    { title: "Shopify Conversion Tracking", description: "GTM implementation for purchase, add-to-cart, and enhanced conversions aligned with Shopify checkout." },
    { title: "Shopping Campaign Management", description: "Margin-segmented Shopping campaigns with product title optimization and listing-level ROAS tuning." },
    { title: "Performance Max for Shopify", description: "Asset groups, audience signals from Shopify customer data, listing filters, and brand exclusion strategy." },
    { title: "Shopify Search & Retargeting", description: "Branded and non-branded Search campaigns plus Dynamic Remarketing tied to Shopify product feeds." },
  ],
  process: [
    { step: "01", title: "Shopify & Ads audit", description: "Review Google & YouTube app, feed sync, tracking setup, and current campaign performance vs. Shopify revenue." },
    { step: "02", title: "Integration & tracking", description: "Fix feed configuration, implement GTM tracking, and validate conversion data against Shopify orders." },
    { step: "03", title: "Campaign launch", description: "Build Shopping and/or PMax campaigns with margin segmentation and Shopify-optimized product data." },
    { step: "04", title: "Optimize & scale", description: "Weekly product-level tuning, feed maintenance, seasonal updates, and ROAS scaling aligned to Shopify sales data." },
  ],
  faqs: [
    { q: "Do you specialize in Shopify Google Ads?", a: "Yes. Shopify is the primary e-commerce platform I manage Google Ads for — including Google & YouTube app setup, GTM tracking, Merchant Center feeds, Shopping, PMax, and Search campaigns." },
    { q: "Can you fix my Shopify conversion tracking?", a: "Absolutely. Shopify conversion tracking gaps are one of the most common issues I resolve — implementing GTM-based purchase tracking, enhanced conversions, and reconciliation with Shopify order reports." },
    { q: "Should my Shopify store use Shopping or Performance Max?", a: "Most Shopify stores benefit from both. Shopping offers product-level control; PMax extends reach across Google surfaces. I recommend structure based on your catalog size, margin data, and current performance." },
    { q: "How do you handle Shopify product feed errors?", a: "I audit the Google & YouTube app sync, fix title/GTIN/availability issues, configure custom labels, and resolve Merchant Center disapprovals — often caused by price mismatches or missing product identifiers." },
    { q: "Do you work with Shopify Plus stores?", a: "Yes. I work with Shopify stores on all plans, including Shopify Plus with multi-store, B2B, and international market configurations." },
    { q: "What's the cost of Shopify Google Ads management?", a: "I charge $35/hr on Upwork with hour packages. Setup and audit projects typically run 8–15 hours; ongoing management is 10–20+ hours per month depending on catalog size and campaign count." },
  ],
  relatedLinks: relatedExcept("/shopify-google-ads-expert", ALL_SERVICE_LINKS),
};
