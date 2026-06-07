/**
 * Site content — update partner badges and client logos here.
 *
 * Client logos: drop PNG/SVG files into `public/clients/` then set `src`
 * (e.g. `/clients/acme.png`). Optional `href` links to the client's site.
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
  /** Path under public/, e.g. `/clients/acme.png` — leave empty until you add the file */
  src?: string;
  href?: string;
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

/** Replace placeholders with your client names and logo paths when ready. */
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Client 1" },
  { name: "Client 2" },
  { name: "Client 3" },
  { name: "Client 4" },
  { name: "Client 5" },
  { name: "Client 6" },
];
