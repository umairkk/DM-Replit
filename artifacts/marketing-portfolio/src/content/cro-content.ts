export type IndustryFilter = "all" | "ecommerce" | "leadgen" | "saas" | "local" | "b2b";

export type CaseStudy = {
  id: string;
  category: Exclude<IndustryFilter, "all">;
  label: string;
  industry: string;
  platform: string;
  color: "primary" | "secondary";
  gradient: string;
  border: string;
  challenge: string;
  strategy: string;
  execution: string[];
  results: { label: string; before: string; after: string; up: boolean }[];
  duration: string;
};

export type ServiceOffering = {
  id: string;
  title: string;
  tagline: string;
  icon: "google" | "meta" | "leads" | "ecommerce" | "tracking" | "consulting";
  included: string[];
  outcomes: string[];
  deliverables: string[];
  platforms: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  role: string;
  rating: number;
  source: "Upwork" | "Google Review" | "Agency Partner";
  initials: string;
};

export const HERO_STATS = [
  { value: "$12M+", label: "Revenue Generated" },
  { value: "$2.5M+", label: "Ad Spend Managed" },
  { value: "15K+", label: "Leads Generated" },
  { value: "50+", label: "Businesses Served" },
] as const;

export const RESULTS_METRICS = [
  { value: 12, prefix: "$", suffix: "M+", label: "Revenue Generated", decimals: 0 },
  { value: 2.5, prefix: "$", suffix: "M+", label: "Ad Spend Managed", decimals: 1 },
  { value: 15, prefix: "", suffix: "K+", label: "Leads Generated", decimals: 0 },
  { value: 68, prefix: "", suffix: "%", label: "Avg. Conversion Lift", decimals: 0 },
  { value: 94, prefix: "", suffix: "%", label: "Client Retention Rate", decimals: 0 },
] as const;

export const INDUSTRY_FILTERS: { id: IndustryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "leadgen", label: "Lead Generation" },
  { id: "saas", label: "SaaS" },
  { id: "local", label: "Local Businesses" },
  { id: "b2b", label: "B2B" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fashion-shopping",
    category: "ecommerce",
    label: "E-commerce · Google Shopping",
    industry: "Fashion & Apparel",
    platform: "Google Ads",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/30",
    challenge: "Brand spending $18K/mo with stagnant 2.1× ROAS. Shopping feed unstructured, bidding on broad match terms.",
    strategy: "Margin-tier feed segmentation + Performance Max migration with audience signals and negative keyword sculpting.",
    execution: [
      "Restructured Shopping feed with custom labels by margin tier",
      "Migrated to Performance Max with first-party audience signals",
      "Added negative keyword sculpting and ROAS-based bid tiers",
    ],
    results: [
      { label: "ROAS", before: "2.1×", after: "8.2×", up: true },
      { label: "Monthly Revenue", before: "$38K", after: "$150K", up: true },
      { label: "CPC", before: "$1.82", after: "$0.94", up: false },
    ],
    duration: "90 days",
  },
  {
    id: "real-estate-meta",
    category: "leadgen",
    label: "Lead Gen · Meta Ads",
    industry: "Real Estate",
    platform: "Meta Ads",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
    border: "border-secondary/30",
    challenge: "20 leads/mo at $180 CPL. Low-intent cold traffic with poor follow-through and no retargeting.",
    strategy: "3-stage funnel with CRM lookalikes, lead magnet retargeting, and pre-qualified Instant Forms.",
    execution: [
      "Built awareness video → lead magnet → retarget sequence",
      "Created custom audiences from CRM and 1% lookalikes",
      "Switched to Instant Forms with pre-qualification questions",
    ],
    results: [
      { label: "CPL", before: "$180", after: "$68", up: false },
      { label: "Monthly Leads", before: "20", after: "74", up: true },
      { label: "Qualified Rate", before: "22%", after: "61%", up: true },
    ],
    duration: "60 days",
  },
  {
    id: "legal-search",
    category: "leadgen",
    label: "Lead Gen · Google Search",
    industry: "Personal Injury Law",
    platform: "Google Ads",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/30",
    challenge: "$25K/mo spend in high-CPC market ($45–90/click), 2.8% CVR, zero call tracking.",
    strategy: "Intent-only keyword architecture with GTM call tracking and case-type landing pages.",
    execution: [
      "Deployed GTM call-tracking + GA4 funnel events",
      "Pruned to exact/phrase match on highest-intent terms",
      "Built dedicated landing pages per case type",
    ],
    results: [
      { label: "Conversion Rate", before: "2.8%", after: "7.4%", up: true },
      { label: "Cost Per Lead", before: "$312", after: "$127", up: false },
      { label: "Cases/mo", before: "18", after: "52", up: true },
    ],
    duration: "75 days",
  },
  {
    id: "saas-linkedin",
    category: "saas",
    label: "B2B · LinkedIn Ads",
    industry: "SaaS — HR Tech",
    platform: "LinkedIn Ads",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
    border: "border-secondary/30",
    challenge: "Broad awareness campaigns, no retargeting. CAC $1,200 with only 8 demo bookings/mo.",
    strategy: "Job title + company size segmentation with retargeting and gated whitepaper lead gen.",
    execution: [
      "Layered job title + company size audience segmentation",
      "Built retargeting sequence for website visitors",
      "Introduced lead gen forms with gated whitepaper offer",
    ],
    results: [
      { label: "Demo Bookings/mo", before: "8", after: "31", up: true },
      { label: "CAC", before: "$1,200", after: "$680", up: false },
      { label: "Pipeline Value", before: "$48K", after: "$186K", up: true },
    ],
    duration: "120 days",
  },
  {
    id: "electronics-bing",
    category: "ecommerce",
    label: "E-commerce · Google + Bing",
    industry: "Electronics",
    platform: "Google + Bing Ads",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/30",
    challenge: "Google-only at 3.1× ROAS. No Bing presence despite high-intent buyers on Microsoft.",
    strategy: "Cross-network expansion with target ROAS smart bidding and RLSA for cart abandoners.",
    execution: [
      "Imported campaigns to Microsoft Advertising with bid adjustments",
      "Set up smart bidding with target ROAS goals",
      "Added remarketing lists to Search (RLSA) for cart abandoners",
    ],
    results: [
      { label: "Combined ROAS", before: "3.1×", after: "6.8×", up: true },
      { label: "Monthly Revenue", before: "$68K", after: "$279K", up: true },
      { label: "Blended CPC", before: "$1.54", after: "$0.88", up: false },
    ],
    duration: "45 days",
  },
  {
    id: "hvac-local",
    category: "local",
    label: "Lead Gen · Google Local",
    industry: "HVAC & Plumbing",
    platform: "Google Ads + LSA",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
    border: "border-secondary/30",
    challenge: "$85 per call through agency. No Local Service Ads. Reviews not leveraged.",
    strategy: "LSA-first local strategy with hyper-local ad groups and call-only mobile campaigns.",
    execution: [
      "Set up and optimised Google Local Service Ads",
      "Built hyper-local ad groups by neighbourhood and service type",
      "Added call extensions with call-only campaigns for mobile",
    ],
    results: [
      { label: "Cost Per Call", before: "$85", after: "$19", up: false },
      { label: "Monthly Calls", before: "28", after: "140", up: true },
      { label: "Booked Jobs/mo", before: "11", after: "58", up: true },
    ],
    duration: "30 days",
  },
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "google-ads",
    title: "Google Ads Management",
    tagline: "Search, Shopping, PMax & Display",
    icon: "google",
    included: ["Search Campaigns", "Shopping Campaigns", "Performance Max", "Display & Remarketing", "Bid Strategy Optimization"],
    outcomes: ["Lower CPL & CPA", "Higher ROAS", "More qualified conversions"],
    deliverables: ["Account restructure", "Keyword architecture", "Monthly performance report", "Conversion tracking audit"],
    platforms: ["Google Ads", "Google Merchant Center", "GA4"],
  },
  {
    id: "meta-ads",
    title: "Meta Ads Management",
    tagline: "Facebook, Instagram & Advantage+",
    icon: "meta",
    included: ["Campaign Setup & Scaling", "Pixel + CAPI Tracking", "Creative Testing", "Lookalike Audiences", "Lead Form Ads"],
    outcomes: ["Lower cost per lead", "Higher lead quality", "Scalable acquisition funnels"],
    deliverables: ["Funnel strategy", "Audience segmentation", "Ad creative briefs", "Weekly optimization log"],
    platforms: ["Meta Ads Manager", "Facebook", "Instagram"],
  },
  {
    id: "lead-gen",
    title: "Lead Generation",
    tagline: "High-intent leads across verticals",
    icon: "leads",
    included: ["Landing Page Strategy", "Multi-channel Funnels", "CRM Integration", "Call Tracking", "Lead Scoring Setup"],
    outcomes: ["More booked appointments", "Lower cost per qualified lead", "Predictable pipeline"],
    deliverables: ["Funnel map", "Campaign launch plan", "Lead quality dashboard", "Optimization roadmap"],
    platforms: ["Google", "Meta", "LinkedIn", "Bing"],
  },
  {
    id: "ecommerce",
    title: "Ecommerce Marketing",
    tagline: "Shopify, WooCommerce & DTC growth",
    icon: "ecommerce",
    included: ["Feed Optimization", "Shopping & PMax", "Dynamic Remarketing", "Catalog Ads", "Seasonal Campaigns"],
    outcomes: ["Revenue growth", "Improved ROAS", "Higher AOV & repeat purchases"],
    deliverables: ["Feed audit", "Campaign architecture", "ROAS reporting", "Creative testing plan"],
    platforms: ["Google Shopping", "Meta Catalog", "Shopify", "WooCommerce"],
  },
  {
    id: "tracking",
    title: "Conversion Tracking",
    tagline: "GA4, GTM & attribution setup",
    icon: "tracking",
    included: ["GA4 Configuration", "GTM Container Setup", "Event & Goal Tracking", "Server-side Tagging", "Attribution Modeling"],
    outcomes: ["Accurate conversion data", "Better budget decisions", "Full-funnel visibility"],
    deliverables: ["Tracking plan", "GTM implementation", "QA documentation", "Dashboard setup"],
    platforms: ["GA4", "GTM", "Google Ads", "Meta Pixel"],
  },
  {
    id: "consulting",
    title: "Performance Marketing Consulting",
    tagline: "Strategy, audits & team guidance",
    icon: "consulting",
    included: ["Account Audits", "Media Mix Strategy", "Budget Allocation", "Team Training", "Competitive Analysis"],
    outcomes: ["Clear growth roadmap", "Reduced wasted spend", "Internal team upskilling"],
    deliverables: ["Audit report", "90-day action plan", "KPI framework", "Strategy call deck"],
    platforms: ["Google", "Meta", "LinkedIn", "Bing", "Analytics"],
  },
];

export const WHY_WORK_WITH_ME = [
  { title: "Data-Driven Strategy", desc: "Every decision backed by GA4, conversion data, and revenue metrics — not guesswork." },
  { title: "Revenue-Focused Marketing", desc: "Campaigns optimized for ROAS, CPL, and pipeline value — not vanity metrics." },
  { title: "Transparent Reporting", desc: "Clear weekly updates with before/after metrics you can share with stakeholders." },
  { title: "Conversion Tracking Expertise", desc: "GA4, GTM, Pixel, and CAPI setups that give you trustworthy data." },
  { title: "Fast Communication", desc: "Replies within 24 hours. Direct access via Slack, WhatsApp, or email." },
  { title: "Continuous Optimization", desc: "Ongoing A/B testing, bid adjustments, and funnel improvements — not set-and-forget." },
] as const;

export const CERTIFICATIONS = [
  { name: "Google Ads Certified", org: "Google", color: "#4285F4" },
  { name: "Google Analytics Certified", org: "Google", color: "#E37400" },
  { name: "Meta Certified", org: "Meta", color: "#0081FB" },
  { name: "HubSpot Certified", org: "HubSpot", color: "#FF7A59" },
] as const;

export const ENHANCED_TESTIMONIALS: Testimonial[] = [
  {
    quote: "Appreciated Umair's work so far. It has been incredible having his support setting up our CRM, including all integrations. He also built our website and has been helping with our marketing.",
    name: "Chris M.",
    company: "7 Star Portables",
    role: "Marketing & Google Ads Project",
    rating: 5,
    source: "Upwork",
    initials: "CM",
  },
  {
    quote: "Umair is very good at what he does. He takes the time to explain what he is doing and does a great job. He helped me with Google Ads and I would absolutely recommend him.",
    name: "Sarah L.",
    company: "E-commerce Brand",
    role: "Google Ads Audit Specialist",
    rating: 5,
    source: "Upwork",
    initials: "SL",
  },
  {
    quote: "Umair is very proactive with his clients and did a great job managing the account we assigned to him. He kept our client's best interest and objectives at the center of his work.",
    name: "James R.",
    company: "Digital Marketing Agency",
    role: "Paid Ads Strategist — Google, Bing & Facebook",
    rating: 5,
    source: "Agency Partner",
    initials: "JR",
  },
];

export const LEAD_MAGNET_OPTIONS = [
  { id: "google-ads", label: "Free Google Ads Audit", desc: "Find wasted spend & quick wins" },
  { id: "meta-ads", label: "Free Meta Ads Audit", desc: "Improve CPL & lead quality" },
  { id: "landing-page", label: "Free Landing Page Audit", desc: "Boost conversion rate" },
] as const;

/** Replace with your YouTube video ID when ready (e.g. "dQw4w9WgXcQ") */
export const INTRO_VIDEO_YOUTUBE_ID = "";

export const ABOUT_CREDIBILITY = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 12, prefix: "$", suffix: "M+", label: "Revenue Generated" },
  { value: 2.5, prefix: "$", suffix: "M+", label: "Ad Spend Managed", decimals: 1 },
  { value: 50, suffix: "+", label: "Businesses Served" },
] as const;

export const CALENDLY_URL = "https://calendly.com/umairkk53";
