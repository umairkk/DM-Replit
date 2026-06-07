import type { ComponentType, CSSProperties } from "react";
import type { PartnerBadgeId } from "@/content/site-content";
import { FaLinkedin, FaMicrosoft } from "react-icons/fa6";
import { SiGoogleads, SiMeta, SiUpwork } from "react-icons/si";

const PARTNER_ICONS: Record<
  PartnerBadgeId,
  ComponentType<{ className?: string; style?: CSSProperties }>
> = {
  google: SiGoogleads,
  meta: SiMeta,
  microsoft: FaMicrosoft,
  linkedin: FaLinkedin,
  upwork: SiUpwork,
};

type PartnerBadgeIconProps = {
  id: PartnerBadgeId;
  className?: string;
  color?: string;
};

export function PartnerBadgeIcon({ id, className, color }: PartnerBadgeIconProps) {
  const Icon = PARTNER_ICONS[id];
  return <Icon className={className} style={color ? { color } : undefined} aria-hidden />;
}
