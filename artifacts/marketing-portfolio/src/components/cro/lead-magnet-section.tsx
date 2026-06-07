import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, TrendingUp } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SectionBadge } from "@/components/cro/section-badge";
import { LEAD_MAGNET_OPTIONS } from "@/content/cro-content";
import { submitLeadMagnetFormElement } from "@/lib/submit-lead-magnet";

const leadMagnetSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  website: z.string().min(3, "Website URL is required"),
  adSpend: z.string().min(1, "Please enter your monthly ad spend"),
  auditType: z.string().min(1),
});

type LeadMagnetSectionProps = {
  onBookCall: () => void;
};

export function LeadMagnetSection({ onBookCall }: LeadMagnetSectionProps) {
  const { toast } = useToast();
  const [selectedAudit, setSelectedAudit] = useState(LEAD_MAGNET_OPTIONS[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof leadMagnetSchema>>({
    resolver: zodResolver(leadMagnetSchema),
    defaultValues: { name: "", email: "", website: "", adSpend: "", auditType: LEAD_MAGNET_OPTIONS[0].id },
  });

  async function onSubmit(values: z.infer<typeof leadMagnetSchema>, event?: React.BaseSyntheticEvent) {
    setIsSubmitting(true);
    try {
      const formEl = event?.target as HTMLFormElement | undefined;
      if (!formEl) throw new Error("Form not found");
      await submitLeadMagnetFormElement(formEl);
      toast({
        title: "Audit request received!",
        description: "I'll review your account and send findings within 48 hours.",
      });
      form.reset({ ...values, name: "", email: "", website: "", adSpend: "", auditType: selectedAudit });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please book a free call instead — we'll review your account live.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="audit" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionBadge icon={Gift} variant="secondary">Free Audit</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a free marketing audit</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Uncover wasted spend, tracking gaps, and quick wins. Choose your audit type and I&apos;ll send a personalized review within 48 hours.
            </p>
            <div className="space-y-3">
              {LEAD_MAGNET_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedAudit(opt.id);
                    form.setValue("auditType", opt.id);
                  }}
                  className={`w-full text-left rounded-xl border p-4 transition-all ${
                    selectedAudit === opt.id
                      ? "border-secondary/50 bg-secondary/10"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className="font-semibold text-sm">{opt.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={onBookCall}
              className="mt-6 text-sm text-primary hover:underline inline-flex items-center gap-1"
            >
              Prefer a live walkthrough? Book a free strategy call →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-background/70 backdrop-blur-xl p-5 sm:p-8"
          >
            <Form {...form}>
              <form
                name="lead-magnet"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="lead-magnet" />
                <input type="hidden" name="auditType" value={selectedAudit} />
                <p className="hidden" aria-hidden="true">
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </p>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-background/50 border-white/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@company.com" className="bg-background/50 border-white/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Website</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yoursite.com" className="bg-background/50 border-white/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="adSpend"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Monthly Ad Spend</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. $5,000" className="bg-background/50 border-white/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl font-semibold shadow-[0_0_15px_rgba(139,92,246,0.25)]"
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Audit"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
