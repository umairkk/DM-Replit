import { motion } from "framer-motion";
import type { ClientLogo } from "@/content/site-content";

type ClientLogoCarouselProps = {
  rowOne: ClientLogo[];
  rowTwo: ClientLogo[];
};

function LogoTile({ client }: { client: ClientLogo }) {
  const tile = (
    <div className="group flex h-20 w-44 md:h-24 md:w-52 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] px-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
      {client.src ? (
        <img
          src={client.src}
          alt={`${client.name} logo`}
          className="max-h-10 md:max-h-12 w-auto max-w-full object-contain opacity-75 grayscale brightness-110 contrast-90 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
          loading="lazy"
        />
      ) : (
        <span className="text-sm font-semibold text-muted-foreground text-center leading-tight">
          {client.name}
        </span>
      )}
    </div>
  );

  if (client.href) {
    return (
      <a
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={client.name}
        className="shrink-0"
      >
        {tile}
      </a>
    );
  }

  return tile;
}

function MarqueeRow({
  clients,
  direction,
  duration,
}: {
  clients: ClientLogo[];
  direction: "left" | "right";
  duration: number;
}) {
  const track = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-2">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex w-max gap-4 md:gap-6"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {track.map((client, i) => (
          <LogoTile key={`${client.name}-${i}`} client={client} />
        ))}
      </motion.div>
    </div>
  );
}

export function ClientLogoCarousel({ rowOne, rowTwo }: ClientLogoCarouselProps) {
  return (
    <div className="space-y-4 md:space-y-6">
      <MarqueeRow clients={rowOne} direction="left" duration={38} />
      <MarqueeRow clients={rowTwo} direction="right" duration={42} />
    </div>
  );
}
