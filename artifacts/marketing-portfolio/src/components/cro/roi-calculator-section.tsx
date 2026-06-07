import { useEffect, useMemo, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { Calculator } from "lucide-react";
import { SectionBadge } from "@/components/cro/section-badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RoiCalculatorSection() {
  const [visitors, setVisitors] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2.5);
  const [aov, setAov] = useState(150);
  const [displayGrowth, setDisplayGrowth] = useState(0);

  const currentRevenue = useMemo(
    () => visitors * (conversionRate / 100) * aov,
    [visitors, conversionRate, aov],
  );

  const improvedRate = conversionRate * 1.35;
  const projectedRevenue = visitors * (improvedRate / 100) * aov;
  const revenueGrowth = projectedRevenue - currentRevenue;
  const additionalLeads = Math.round(visitors * ((improvedRate - conversionRate) / 100));
  const estimatedReturn = currentRevenue > 0 ? Math.round((revenueGrowth / currentRevenue) * 100) : 0;

  const springGrowth = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    springGrowth.set(revenueGrowth);
  }, [revenueGrowth, springGrowth]);

  useEffect(() => {
    return springGrowth.on("change", (v) => setDisplayGrowth(Math.round(v)));
  }, [springGrowth]);

  return (
    <section id="roi-calculator" className="py-24 relative overflow-hidden border-y border-white/5 bg-card/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <SectionBadge icon={Calculator}>ROI Calculator</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Estimate your growth potential</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              See what a 35% conversion lift could mean for your revenue — based on industry benchmarks from optimized campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-5">
              <div>
                <Label className="text-muted-foreground text-sm mb-2 block">Monthly Visitors</Label>
                <Input
                  type="number"
                  min={100}
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value) || 0)}
                  className="bg-background/50 border-white/10 h-12 text-lg"
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-sm mb-2 block">Conversion Rate (%)</Label>
                <Input
                  type="number"
                  min={0.1}
                  step={0.1}
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value) || 0)}
                  className="bg-background/50 border-white/10 h-12 text-lg"
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-sm mb-2 block">Average Order Value ($)</Label>
                <Input
                  type="number"
                  min={1}
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value) || 0)}
                  className="bg-background/50 border-white/10 h-12 text-lg"
                />
              </div>
            </div>

            <motion.div
              layout
              className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 to-secondary/5 p-6 md:p-8 space-y-5"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Potential Revenue Growth</p>
                <p className="text-3xl md:text-4xl font-extrabold text-primary tabular-nums">
                  +${displayGrowth.toLocaleString()}
                  <span className="text-lg text-muted-foreground font-normal">/mo</span>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-background/50 border border-white/10 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Additional Conversions</p>
                  <p className="text-2xl font-bold text-emerald-400">+{additionalLeads.toLocaleString()}</p>
                </div>
                <div className="rounded-xl bg-background/50 border border-white/10 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Est. Return</p>
                  <p className="text-2xl font-bold text-secondary">+{estimatedReturn}%</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Assumes a 35% conversion rate improvement from optimized landing pages, tracking, and campaign structure — typical for accounts I audit.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
