import { useEffect, useMemo, useState } from "react";
import { Link, useSearch } from "wouter";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCircle2, ClipboardList } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL } from "@/content/site-content";
import { applyPageSeo, resetHomeSeo } from "@/lib/page-seo";
import { submitOnboardingFormElement } from "@/lib/submit-onboarding";
import { useToast } from "@/hooks/use-toast";

const onboardingSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  website: z.string().url("Enter a valid website URL"),
  businessDetails: z.string().min(10, "Please share a brief business overview"),
  advertisingGoals: z.string().min(10, "Please describe your advertising goals"),
  accountAccess: z.string().min(5, "Please share account access details or preferred next steps"),
  targetLocations: z.string().min(2, "Target locations are required"),
  monthlyBudget: z.string().min(1, "Monthly ad budget is required"),
  stripeSessionId: z.string().optional(),
});

type OnboardingFormValues = z.infer<typeof onboardingSchema>;

export default function Onboarding() {
  const search = useSearch();
  const { toast } = useToast();
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sessionId = useMemo(() => new URLSearchParams(search).get("session_id") ?? "", [search]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    applyPageSeo({
      title: "Client Onboarding | Umair Altaf",
      description:
        "Complete your onboarding form after checkout so Umair Altaf can begin your Google Ads or Meta Ads management engagement.",
      path: "/onboarding",
      ogTitle: "Client Onboarding | Umair Altaf",
      ogDescription: "Share your business details and advertising goals to get started.",
    });

    return () => {
      resetHomeSeo();
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      businessDetails: "",
      advertisingGoals: "",
      accountAccess: "",
      targetLocations: "",
      monthlyBudget: "",
      stripeSessionId: sessionId,
    },
  });

  useEffect(() => {
    if (sessionId) {
      form.setValue("stripeSessionId", sessionId);
    }
  }, [sessionId, form]);

  const navigateHomeSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  async function onSubmit(values: OnboardingFormValues, event?: React.BaseSyntheticEvent) {
    setIsSubmitting(true);
    try {
      const formEl = event?.target as HTMLFormElement | undefined;
      if (!formEl) {
        throw new Error("Form element not found");
      }
      await submitOnboardingFormElement(formEl);
      setIsSubmitted(true);
      toast({
        title: "Onboarding submitted",
        description: "Thanks — I'll review your details and follow up shortly.",
      });
      form.reset();
    } catch {
      toast({
        title: "Submission failed",
        description: `Please email ${CONTACT_EMAIL} with your onboarding details.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <SiteHeader scrolled={scrolled} onNavigate={navigateHomeSection} />

      <main className="relative z-10 pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <ClipboardList size={20} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Client Onboarding</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Complete this form after checkout so we can begin your engagement.
              </p>
            </div>
          </div>

          {sessionId && (
            <div className="mb-6 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
              Payment received. Please share the details below to kick off onboarding.
            </div>
          )}

          {isSubmitted ? (
            <Card className="border-emerald-500/30 bg-emerald-500/5">
              <CardContent className="p-8 text-center">
                <CheckCircle2 size={40} className="mx-auto text-emerald-400 mb-4" />
                <h2 className="text-xl font-semibold mb-2">You&apos;re all set</h2>
                <p className="text-muted-foreground">
                  Your onboarding details were submitted successfully. I&apos;ll review everything and
                  follow up within one business day.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-white/10 bg-background/70">
              <CardContent className="p-6 sm:p-8">
                <Form {...form}>
                  <form
                    name="onboarding"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="onboarding" />
                    <input type="hidden" {...form.register("stripeSessionId")} name="stripeSessionId" />
                    <p className="hidden">
                      <label>
                        Don&apos;t fill this out: <input name="bot-field" />
                      </label>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business name</FormLabel>
                            <FormControl>
                              <Input {...field} name="businessName" placeholder="Company name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact name</FormLabel>
                            <FormControl>
                              <Input {...field} name="contactName" placeholder="Your name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} name="email" type="email" placeholder="you@company.com" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (optional)</FormLabel>
                            <FormControl>
                              <Input {...field} name="phone" placeholder="+1..." />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL</FormLabel>
                          <FormControl>
                            <Input {...field} name="website" placeholder="https://yourwebsite.com" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business details</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              name="businessDetails"
                              rows={4}
                              placeholder="What you sell, ideal customers, current marketing setup..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="advertisingGoals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Advertising goals</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              name="advertisingGoals"
                              rows={4}
                              placeholder="Leads, sales, ROAS targets, services to promote..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="accountAccess"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account access information</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              name="accountAccess"
                              rows={3}
                              placeholder="Google Ads / Meta account IDs, access status, or how you'll grant access..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="targetLocations"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Target locations</FormLabel>
                            <FormControl>
                              <Input {...field} name="targetLocations" placeholder="Countries, cities, regions" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="monthlyBudget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Monthly ad budget</FormLabel>
                            <FormControl>
                              <Input {...field} name="monthlyBudget" placeholder="e.g. $5,000/month" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 font-semibold shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Onboarding Details"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
