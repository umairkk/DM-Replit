/**
 * Site content — update partner badges and client logos here.
 *
 * Client logos live in `public/clients/`. Set `src` to `/clients/<file>` and
 * optional `href` to the client's website.
 */
export type PartnerBadgeId =
  | "google"
  | "meta"
  | "microsoft"
  | "linkedin"
  | "upwork";

export type PartnerBadge = {
  id: PartnerBadgeId;
  name: string;
  subtitle: string;
  /** Official brand hex color for the icon */
  iconColor: string;
  /** Tailwind gradient classes for the badge background */
  gradient: string;
  /** Tailwind border color class */
  border: string;
  /** Tailwind text accent class */
  accent: string;
};

export type ClientLogo = {
  name: string;
  src: string;
  href: string;
};

export const PARTNER_BADGES: PartnerBadge[] = [
  {
    id: "google",
    name: "Google Partner",
    subtitle: "Google Ads certified",
    iconColor: "#4285F4",
    gradient: "from-[#4285F4]/20 via-[#FBBC04]/10 to-[#EA4335]/10",
    border: "border-[#4285F4]/30",
    accent: "text-[#4285F4]",
  },
  {
    id: "meta",
    name: "Meta Business Partner",
    subtitle: "Meta & Instagram ads",
    iconColor: "#0081FB",
    gradient: "from-[#0081FB]/20 to-[#0064E0]/10",
    border: "border-[#0081FB]/30",
    accent: "text-[#0081FB]",
  },
  {
    id: "microsoft",
    name: "Microsoft Advertising Partner",
    subtitle: "Bing Ads certified",
    iconColor: "#00A4EF",
    gradient: "from-[#00A4EF]/20 to-[#7FBA00]/10",
    border: "border-[#00A4EF]/30",
    accent: "text-[#00A4EF]",
  },
  {
    id: "linkedin",
    name: "LinkedIn Marketing Partner",
    subtitle: "B2B lead generation",
    iconColor: "#0A66C2",
    gradient: "from-[#0A66C2]/20 to-[#0A66C2]/5",
    border: "border-[#0A66C2]/30",
    accent: "text-[#0A66C2]",
  },
  {
    id: "upwork",
    name: "Upwork Top Rated",
    subtitle: "100% Job Success",
    iconColor: "#14A800",
    gradient: "from-emerald-500/20 to-emerald-600/10",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "Remote Retrieval",
    src: "/clients/remoteretrieval.png",
    href: "https://www.remoteretrieval.com/",
  },
  {
    name: "Bulk Devices",
    src: "/clients/bulkdevices.png",
    href: "https://bulkdevices.com/",
  },
  {
    name: "Hummingbird International",
    src: "/clients/hummingbirdinternational.png",
    href: "https://hummingbirdinternational.net/",
  },
  {
    name: "911 Geeks",
    src: "/clients/911geeks.png",
    href: "https://911geeks.com/",
  },
  {
    name: "7 Star Portables",
    src: "/clients/7starportables.png",
    href: "https://7starportables.com.au/",
  },
  {
    name: "Orange Burps",
    src: "/clients/orangeburps.jpg",
    href: "https://orangeburps.com/",
  },
  {
    name: "Surf City Detail Garage",
    src: "/clients/surfcitydetailgarage.png",
    href: "https://surfcitydetailgarage.com/",
  },
  {
    name: "Veranda Assisted Living",
    src: "/clients/verandaassistedliving.jpg",
    href: "https://verandaassistedliving.com/",
  },
  {
    name: "Del Monte Village",
    src: "/clients/delmontevillage.png",
    href: "https://www.delmontevillage.com/",
  },
  {
    name: "Sunrise Senior Living",
    src: "/clients/sunriseseniorliving.png",
    href: "https://www.sunriseseniorliving.com/",
  },
  {
    name: "AZ Complete Repair",
    src: "/clients/azcompleterepair.png",
    href: "https://www.azcompleterepair.com/",
  },
  {
    name: "Toplace",
    src: "/clients/toplace.png",
    href: "https://www.toplace.com/",
  },
  {
    name: "Axcess Capital",
    src: "/clients/axcesscapital.png",
    href: "https://www.axcesscapital.com/",
  },
  {
    name: "Zillion Designs",
    src: "/clients/zilliondesigns.png",
    href: "https://www.zilliondesigns.com/",
  },
  {
    name: "Simplicity Marketing",
    src: "/clients/simplicitymarketing.png",
    href: "https://simplicitymarketingllc.com/",
  },
];

/** First row of the dual-line client carousel (8 brands). */
export const CLIENT_LOGOS_ROW_ONE = CLIENT_LOGOS.slice(0, 8);

/** Second row of the dual-line client carousel (7 brands). */
export const CLIENT_LOGOS_ROW_TWO = CLIENT_LOGOS.slice(8);
