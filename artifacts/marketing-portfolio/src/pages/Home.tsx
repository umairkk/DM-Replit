import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { 
  ArrowRight, 
  Award,
  BarChart3, 
  Briefcase,
  Calendar,
  Car,
  Check,
  Clock,
  Cloud,
  CreditCard,
  Gem,
  GraduationCap,
  Heart,
  Home as HomeIcon,
  Instagram,
  Landmark,
  LineChart, 
  Linkedin,
  Mail, 
  MessageSquare, 
  MousePointerClick, 
  Scale,
  Search,
  Share2,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  Smartphone,
  Sofa,
  Sparkles,
  Star,
  Stethoscope,
  Terminal, 
  TrendingDown,
  TrendingUp,
  Twitter,
  Wrench,
  Zap
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { PartnerBadgeIcon } from "@/components/partner-badge-icon";
import { ClientLogoCarousel } from "@/components/client-logo-carousel";
import { SiteHeader } from "@/components/site-header";
import {
  CLIENT_LOGOS_ROW_ONE,
  CLIENT_LOGOS_ROW_TWO,
  CONTACT_EMAIL,
  PARTNER_BADGES,
  TRUST_BADGES,
} from "@/content/site-content";
import { submitContactForm } from "@/lib/submit-contact";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function isStripeCheckoutReady(link: string) {
  return Boolean(link && !link.includes("REPLACE"));
}

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const TYPED_WORDS = [
  "Digital Marketing Specialist.",
  "Google Ads Expert.",
  "Meta Ads Strategist.",
  "Performance Marketer.",
  "SEO & PPC Specialist.",
];

const MARQUEE_ITEMS = [
  "Google Ads", "Meta Ads", "LinkedIn Ads", "Bing Ads",
  "Google Shopping", "Performance Max", "SEO", "GA4",
  "Google Tag Manager", "Conversion Tracking", "A/B Testing",
  "ROAS Optimization", "Lead Generation", "Retargeting", "CRO",
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, to, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v).toString()));
  }, [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Home() {
  const { toast } = useToast();
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  const particles = useMemo(() =>
    Array.from({ length: 55 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 3,
    })), []);

  useEffect(() => {
    // Add dark mode by default on the HTML tag
    document.documentElement.classList.add("dark");

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Cursor spotlight — direct DOM update for performance
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(59,130,246,0.09), rgba(139,92,246,0.04) 40%, transparent 70%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Load Calendly inline widget script (only once)
    const CALENDLY_SRC = "https://assets.calendly.com/assets/external/widget.js";
    if (!document.querySelector(`script[src="${CALENDLY_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = CALENDLY_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Typewriter cycling effect
  useEffect(() => {
    const current = TYPED_WORDS[wordIndex];
    const pauseMs = !isDeleting && charIndex === current.length ? 1800 : 0;
    const typeMs = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setTypedText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
      }
    }, pauseMs || typeMs);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const CALENDLY_URL = "https://calendly.com/umairkk53";

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsSubmitting(true);
    try {
      await submitContactForm(values);
      toast({
        title: "Message sent successfully!",
        description:
          "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: `Please email me directly at ${CONTACT_EMAIL} or try again.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans overflow-x-hidden">
      {/* Cursor spotlight */}
      <div ref={cursorGlowRef} className="fixed inset-0 pointer-events-none z-[998]" />
      {/* Dot grid texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(rgba(59,130,246,0.15) 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />
      <SiteHeader scrolled={scrolled} onNavigate={scrollTo} />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-16 md:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <img 
            src="/hero-bg.png" 
            alt="Futuristic Grid Background" 
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        {/* Particle starfield */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.3, 1] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* Animated floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[100px] pointer-events-none"
          animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-secondary/20 blur-[100px] pointer-events-none"
          animate={{ x: [0, -25, 15, 0], y: [0, 20, -25, 0], scale: [1, 0.95, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-2/3 left-1/2 w-48 h-48 rounded-full bg-primary/10 blur-[80px] pointer-events-none"
          animate={{ x: [0, 20, -15, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left: Copy */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
            >
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Top Rated on Upwork · Available for projects
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
                style={{ textShadow: "0 0 40px rgba(59,130,246,0.15)" }}>
                Hi, I'm Umair. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[3px] h-[0.85em] bg-primary ml-0.5 align-middle rounded-sm"
                  />
                </span>
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                I run high-ROI Google, Bing, Meta and LinkedIn ad campaigns. 10+ years of paid acquisition, analytics and SEO — engineered to deliver up to 10x ROI for agencies, e-commerce and SaaS clients.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" onClick={() => scrollTo("ecommerce")} className="w-full sm:w-auto rounded-full text-base h-12 px-8 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all border border-primary/50">
                  View Industries
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="w-full sm:w-auto rounded-full text-base h-12 px-8 border-white/10 hover:bg-white/5">
                  Contact Me
                </Button>
              </motion.div>

              <motion.div
                variants={FADE_UP}
                className="md:hidden grid grid-cols-2 gap-3 mt-8"
              >
                {[
                  { value: "10+", label: "Years in paid media" },
                  { value: "100%", label: "Job Success score" },
                  { value: "8.2×", label: "Best ROAS achieved" },
                  { value: "$35/hr", label: "Freelance rate" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-background/60 backdrop-blur-sm p-4 text-center"
                  >
                    <div className="text-xl font-extrabold text-primary">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Floating stats dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden md:flex flex-col gap-4 relative"
            >
              {/* Glow blob behind card */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl -z-10 scale-110" />

              {/* Main stats card */}
              <div className="bg-background/70 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Campaign Snapshot</span>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    Live results
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Best ROAS Achieved", value: "8.2×", sub: "Google Shopping · Fashion", color: "text-primary", bar: 82 },
                    { label: "CPL Reduction", value: "−62%", sub: "Meta Ads · Real Estate", color: "text-secondary", bar: 62 },
                    { label: "Lead Volume Lift", value: "+270%", sub: "Google Search · Legal", color: "text-emerald-400", bar: 75 },
                    { label: "Job Success Score", value: "100%", sub: "Upwork · Top Rated", color: "text-amber-400", bar: 100 },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                          <div className="text-[10px] text-muted-foreground/60">{stat.sub}</div>
                        </div>
                        <div className={`text-lg font-bold tabular-nums ${stat.color}`}>{stat.value}</div>
                      </div>
                      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.bar}%` }}
                          transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                          className={`h-full rounded-full ${
                            i === 0 ? "bg-primary" :
                            i === 1 ? "bg-secondary" :
                            i === 2 ? "bg-emerald-400" : "bg-amber-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row: two mini cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/70 border border-white/10 backdrop-blur-xl rounded-xl p-4 shadow-xl">
                  <div className="text-2xl font-extrabold text-primary mb-1">10+</div>
                  <div className="text-xs text-muted-foreground leading-snug">Years running paid ads</div>
                </div>
                <div className="bg-background/70 border border-white/10 backdrop-blur-xl rounded-xl p-4 shadow-xl">
                  <div className="text-2xl font-extrabold text-secondary mb-1">$35/hr</div>
                  <div className="text-xs text-muted-foreground leading-snug">Upwork rate · Top Rated</div>
                </div>
              </div>

              {/* Platform badges */}
              <div className="flex flex-wrap gap-2">
                {["Google Ads", "Meta Ads", "LinkedIn", "Bing Ads", "GA4 + GTM", "SEO"].map((p, i) => (
                  <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
          <ArrowRight className="rotate-90" />
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="relative py-5 border-y border-white/5 bg-card/20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm text-muted-foreground font-medium px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Partner & Certification Badges */}
      <section id="partners" className="py-16 relative border-b border-white/5 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <Award size={14} /> Certifications & Partnerships
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Platform-certified performance marketer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Official partner status across the ad networks I manage daily — Google, Meta, Microsoft, LinkedIn and Upwork.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {PARTNER_BADGES.map((badge) => (
              <motion.div
                key={badge.name}
                variants={FADE_UP}
                className={`group relative rounded-2xl border ${badge.border} bg-gradient-to-br ${badge.gradient} p-5 hover:scale-[1.03] transition-transform duration-300`}
              >
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Check size={14} className={badge.accent} />
                </div>
                <div className="w-12 h-12 rounded-xl bg-background/60 border border-white/10 flex items-center justify-center mb-4">
                  <PartnerBadgeIcon
                    id={badge.id}
                    color={badge.iconColor}
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-sm font-bold leading-snug mb-1">{badge.name}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{badge.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-primary"></span>
                About Me
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a digital marketing specialist with 10+ years of hands-on experience running paid acquisition and analytics for digital agencies, NGOs and private clients. Based in Karachi, Pakistan and working with clients globally, I focus on one thing: delivering measurable returns on every dollar spent.
                </p>
                <p>
                  My core stack covers Google Ads (Search, PMax, Shopping, Display, Dynamic Remarketing), Meta Ads across Facebook and Instagram, Bing Ads, LinkedIn campaigns and SEO. I lean heavily on SPAG/SKAG structures, A/B testing and bid optimization to keep campaigns lean and conversion rates high.
                </p>
                <p>
                  On the analytics side I work daily with Google Tag Manager, Search Console, Google Analytics and third-party data tools to set up clean tracking, audit broken accounts and tie spend back to revenue. Top Rated on Upwork with a 100% Job Success score across every completed contract.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col gap-6">
              {/* Glowing profile avatar */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Spinning gradient ring */}
                  <motion.div
                    className="absolute inset-[-4px] rounded-full"
                    style={{ background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Outer glow */}
                  <div className="absolute inset-[-8px] rounded-full bg-primary/20 blur-xl" />
                  {/* Avatar face */}
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-background flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary select-none">UA</span>
                  </div>
                  {/* Online badge */}
                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-background flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping absolute" />
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground -mt-2">
                <span className="font-semibold text-foreground">Umair A.</span> · Karachi, Pakistan · <span className="text-emerald-400">Available</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl blur-3xl opacity-50 -z-10"></div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <Card className="bg-card/50 border-white/5 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-primary mb-2"><CountUp to={10} suffix="+" /></span>
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Exp</span>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-white/5 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-secondary mb-2"><CountUp to={100} suffix="%" /></span>
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Job Success</span>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-white/5 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-primary mb-2"><CountUp to={10} suffix="x" /></span>
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Avg ROI</span>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-white/5 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-secondary mb-2">Top Rated</span>
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Upwork Badge</span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_0%,transparent_50%,rgba(139,92,246,0.04)_100%)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <Zap size={14} /> Expertise Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Every channel. Every tool. One specialist.</h2>
          </motion.div>

          {/* Three large channel pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="space-y-4 mb-10"
          >
            {[
              {
                accent: "bg-primary",
                label: "Paid Search & Shopping",
                icon: MousePointerClick,
                tagline: "Google Ads · Bing Ads · PMax · Shopping",
                tools: ["Search (SPAG/SKAG)", "Performance Max", "Google Shopping", "Dynamic Remarketing", "Display & Gmail", "Bing/Microsoft Ads", "Bid Strategies", "Quality Score Optimisation"],
                proficiency: 98,
              },
              {
                accent: "bg-secondary",
                label: "Paid Social & Funnels",
                icon: Share2,
                tagline: "Meta · LinkedIn · TikTok · Retargeting",
                tools: ["Facebook & Instagram Ads", "LinkedIn Campaign Manager", "Pixel & CAPI Setup", "Lookalike Audiences", "Meta Advantage+", "Cross-platform Funnels", "Creative A/B Testing", "Lead Form Ads"],
                proficiency: 95,
              },
              {
                accent: "bg-emerald-500",
                label: "Analytics, SEO & Tracking",
                icon: LineChart,
                tagline: "GA4 · GTM · Search Console · Attribution",
                tools: ["Google Analytics 4", "Google Tag Manager", "Conversion Tracking", "Search Console", "Keyword Research", "On-page SEO", "Attribution Modelling", "Data Studio Reports"],
                proficiency: 92,
              },
            ].map((pillar, i) => (
              <motion.div key={i} variants={FADE_UP}>
                <div className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-white/8 bg-card/40 hover:border-white/15 transition-all duration-300">
                  {/* Left accent panel */}
                  <div className={`${pillar.accent} bg-opacity-10 md:w-64 shrink-0 p-6 flex flex-col justify-between border-r border-white/5`}>
                    <div>
                      <div className={`w-12 h-12 rounded-xl ${pillar.accent} bg-opacity-20 flex items-center justify-center mb-4`}>
                        <pillar.icon size={22} className="text-white" />
                      </div>
                      <h3 className="text-lg font-extrabold leading-snug mb-1">{pillar.label}</h3>
                      <p className="text-xs text-muted-foreground">{pillar.tagline}</p>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                        <span>Proficiency</span>
                        <span className="font-bold text-foreground">{pillar.proficiency}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pillar.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                          className={`h-full rounded-full ${pillar.accent}`}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Right tools grid */}
                  <div className="flex-1 p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {pillar.tools.map((tool, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * j }}
                          className="flex items-center gap-2 bg-white/3 border border-white/6 rounded-lg px-3 py-2 text-xs font-medium text-foreground/80 hover:bg-white/6 hover:text-foreground transition-colors"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${pillar.accent} shrink-0`} />
                          {tool}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom tool tags */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="flex flex-wrap gap-2 justify-center"
          >
            {["Shopify", "WooCommerce", "HubSpot", "Salesforce", "Zapier", "Hotjar", "Semrush", "Ahrefs", "Screaming Frog", "Looker Studio", "Canva", "Figma"].map((t, i) => (
              <span key={i} className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-white/4 border border-white/8 text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* E-commerce Portfolio Section */}
      <section id="ecommerce" className="py-24 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <ShoppingBag size={14} /> E-commerce
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Industries I scale on Shopify & WooCommerce</h2>
              <p className="text-muted-foreground max-w-xl">Shopping, PMax & Meta Advantage+ campaigns built around the highest-demand verticals.</p>
            </div>
            <Button variant="outline" className="rounded-full border-white/10 shrink-0" asChild>
              <a href="https://www.upwork.com/freelancers/~0174e59cfe9730a3cd" target="_blank" rel="noopener noreferrer">
                View Upwork <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              { icon: Shirt, title: "Fashion & Apparel", stat: "4–8× ROAS", desc: "DTC catalog ads, dynamic remarketing, seasonal PMax", from: "from-pink-600/20", to: "to-rose-900/10", border: "border-pink-500/20", accent: "text-pink-400", dot: "bg-pink-400" },
              { icon: Sparkles, title: "Beauty & Skincare", stat: "3× ROAS lift", desc: "Meta Advantage+ paired with Shopping to win beauty SERPs", from: "from-fuchsia-600/20", to: "to-purple-900/10", border: "border-fuchsia-500/20", accent: "text-fuchsia-400", dot: "bg-fuchsia-400" },
              { icon: Heart, title: "Health & Supplements", stat: "LTV-first", desc: "Compliance-aware funnels for vitamins and wellness brands", from: "from-emerald-600/20", to: "to-teal-900/10", border: "border-emerald-500/20", accent: "text-emerald-400", dot: "bg-emerald-400" },
              { icon: Sofa, title: "Home & Furniture", stat: "High-AOV", desc: "Merchant Center feed cleanup + PMax for big-ticket items", from: "from-amber-600/20", to: "to-orange-900/10", border: "border-amber-500/20", accent: "text-amber-400", dot: "bg-amber-400" },
              { icon: Smartphone, title: "Electronics & Gadgets", stat: "Lower CPC", desc: "Cross-network Search + Shopping for high-intent buyers", from: "from-sky-600/20", to: "to-blue-900/10", border: "border-sky-500/20", accent: "text-sky-400", dot: "bg-sky-400" },
              { icon: Gem, title: "Jewelry & Accessories", stat: "Brand + Perf.", desc: "Premium DTC funnels — branded search + Meta Catalog ads", from: "from-violet-600/20", to: "to-indigo-900/10", border: "border-violet-500/20", accent: "text-violet-400", dot: "bg-violet-400" },
            ].map((ind, i) => (
              <motion.div key={i} variants={FADE_UP}>
                <div className={`group h-full rounded-2xl border ${ind.border} bg-gradient-to-br ${ind.from} ${ind.to} p-6 hover:scale-[1.02] transition-transform duration-300 cursor-default`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center ${ind.accent}`}>
                      <ind.icon size={20} />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-widest ${ind.accent} bg-white/5 border border-white/10 rounded-full px-2.5 py-1`}>
                      {ind.stat}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold mb-2 leading-snug">{ind.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{ind.desc}</p>
                  <div className={`mt-4 h-[2px] rounded-full ${ind.dot} opacity-30 group-hover:opacity-70 transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lead Gen Portfolio Section */}
      <section id="leadgen" className="py-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
              <Briefcase size={14} /> Lead Generation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">High-intent lead gen across the most demanding verticals</h2>
            <p className="text-muted-foreground max-w-xl">Cost-per-qualified-lead campaigns with full GA4 + GTM tracking and CRM integration.</p>
          </motion.div>

          {/* Two-column numbered list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {[
              { icon: HomeIcon, num: "01", title: "Real Estate", desc: "Buyer & seller lead funnels for agents, brokerages and property developers.", tags: ["Google Search", "Meta Leads", "Local Ads"] },
              { icon: Scale, num: "02", title: "Legal Services", desc: "Personal injury, family and immigration law — high-CPC Search done profitably.", tags: ["Google Search", "Call Tracking", "LSA"] },
              { icon: Stethoscope, num: "03", title: "Healthcare & Dental", desc: "Patient acquisition for dental and specialty clinics with HIPAA-aware tracking.", tags: ["Google Ads", "Meta", "HIPAA"] },
              { icon: Landmark, num: "04", title: "Finance & Insurance", desc: "Loans, mortgage and fintech lead gen with strict compliance and quality filters.", tags: ["Compliance", "Google", "Lead Forms"] },
              { icon: Wrench, num: "05", title: "Home Services", desc: "HVAC, plumbing, roofing and solar — local Search + Call campaigns for booked jobs.", tags: ["LSA", "Local Search", "Call Ads"] },
              { icon: Car, num: "06", title: "Automotive", desc: "Dealerships, PPF, detailing and auto-service appointment funnels that convert.", tags: ["Google Ads", "Meta", "Retargeting"] },
              { icon: GraduationCap, num: "07", title: "Education & Coaching", desc: "Student enrollment and coaching webinar funnels driven by Meta and Google.", tags: ["Meta Leads", "Google", "Webinar"] },
              { icon: Cloud, num: "08", title: "B2B SaaS", desc: "Demo, trial and pipeline campaigns on Google Search and LinkedIn Ads.", tags: ["LinkedIn", "Google", "Account-Based"] },
            ].map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.floor(i / 2) * 0.1 }}
                className="group flex gap-5 py-7 border-b border-white/5 last:border-b-0"
              >
                {/* Big ghost number */}
                <div className="shrink-0 w-16 text-right">
                  <span className="text-5xl font-black text-white/5 group-hover:text-secondary/20 transition-colors leading-none select-none">
                    {ind.num}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <ind.icon size={15} />
                    </div>
                    <h3 className="text-base font-extrabold">{ind.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{ind.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary/8 border border-secondary/15 text-secondary/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom strip stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Industries Served", value: "12+" },
              { label: "Lead Quality", value: "High Intent" },
              { label: "Tracking Stack", value: "GA4 + GTM" },
              { label: "Networks", value: "Google · Meta · LinkedIn" },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl bg-secondary/5 border border-secondary/10 p-4 text-center">
                <div className="text-sm font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="casestudies" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <TrendingUp size={14} /> Case Studies
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Real campaigns. Real numbers.</h2>
                <p className="text-muted-foreground max-w-2xl text-lg">
                  Anonymised results from live client accounts across Google, Meta, Bing and LinkedIn — showing exactly what moved the needle and why.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {[
              {
                label: "E-commerce · Google Shopping",
                industry: "Fashion & Apparel",
                platform: "Google Ads",
                color: "primary",
                gradient: "from-primary/20 to-primary/5",
                border: "border-primary/30",
                challenge: "Brand was spending $18K/mo with a stagnant 2.1x ROAS. Shopping feed was unstructured and bidding on broad match terms.",
                actions: ["Restructured Shopping feed with custom labels by margin tier", "Migrated to Performance Max with audience signals", "Added negative keyword sculpting layer"],
                results: [
                  { label: "ROAS", before: "2.1×", after: "8.2×", up: true },
                  { label: "Monthly Revenue", before: "$38K", after: "$150K", up: true },
                  { label: "CPC", before: "$1.82", after: "$0.94", up: false },
                ],
                duration: "90 days",
              },
              {
                label: "Lead Gen · Meta Ads",
                industry: "Real Estate",
                platform: "Meta Ads",
                color: "secondary",
                gradient: "from-secondary/20 to-secondary/5",
                border: "border-secondary/30",
                challenge: "Agent was generating 20 leads/mo at $180 CPL. Most leads were low-intent cold traffic with poor follow-through.",
                actions: ["Built a 3-stage funnel: awareness video → lead magnet → retarget", "Created custom audiences from CRM and lookalikes", "Switched to Instant Forms with pre-qualification questions"],
                results: [
                  { label: "CPL", before: "$180", after: "$68", up: false },
                  { label: "Monthly Leads", before: "20", after: "74", up: true },
                  { label: "Qualified Rate", before: "22%", after: "61%", up: true },
                ],
                duration: "60 days",
              },
              {
                label: "Lead Gen · Google Search",
                industry: "Personal Injury Law",
                platform: "Google Ads",
                color: "primary",
                gradient: "from-primary/20 to-primary/5",
                border: "border-primary/30",
                challenge: "Legal firm spending $25K/mo in a high-CPC market ($45–90/click) with a 2.8% conversion rate and zero call tracking.",
                actions: ["Deployed GTM call-tracking + GA4 funnel events", "Pruned to exact/phrase match on highest-intent terms", "Built dedicated landing pages per case type"],
                results: [
                  { label: "Conversion Rate", before: "2.8%", after: "7.4%", up: true },
                  { label: "Cost Per Case Lead", before: "$312", after: "$127", up: false },
                  { label: "Cases Contacted/mo", before: "18", after: "52", up: true },
                ],
                duration: "75 days",
              },
              {
                label: "B2B · LinkedIn Ads",
                industry: "SaaS — HR Tech",
                platform: "LinkedIn Ads",
                color: "secondary",
                gradient: "from-secondary/20 to-secondary/5",
                border: "border-secondary/30",
                challenge: "SaaS startup running broad awareness campaigns with no retargeting. CAC was $1,200 and demo bookings were only 8/mo.",
                actions: ["Layered job title + company size audience segmentation", "Built retargeting sequence for website visitors", "Introduced lead gen forms with gated whitepaper offer"],
                results: [
                  { label: "Demo Bookings/mo", before: "8", after: "31", up: true },
                  { label: "CAC", before: "$1,200", after: "$680", up: false },
                  { label: "Pipeline Value", before: "$48K", after: "$186K", up: true },
                ],
                duration: "120 days",
              },
              {
                label: "E-commerce · Google + Bing",
                industry: "Electronics",
                platform: "Google + Bing Ads",
                color: "primary",
                gradient: "from-primary/20 to-primary/5",
                border: "border-primary/30",
                challenge: "Store running on Google only with a 3.1x ROAS. No Bing presence despite high-intent buyers on Microsoft's network.",
                actions: ["Imported campaigns to Microsoft Advertising and bid-adjusted for Bing audience", "Set up smart bidding with target ROAS goals", "Added remarketing lists to Search (RLSA) for cart abandoners"],
                results: [
                  { label: "Combined ROAS", before: "3.1×", after: "6.8×", up: true },
                  { label: "Monthly Ad Spend", before: "$22K", after: "$41K", up: true },
                  { label: "Blended CPC", before: "$1.54", after: "$0.88", up: false },
                ],
                duration: "45 days",
              },
              {
                label: "Lead Gen · Google Local",
                industry: "HVAC & Plumbing",
                platform: "Google Ads + LSA",
                color: "secondary",
                gradient: "from-secondary/20 to-secondary/5",
                border: "border-secondary/30",
                challenge: "Local contractor paying $85 per call through an agency. No Local Service Ads (LSA) set up. Reviews weren't being leveraged.",
                actions: ["Set up and optimised Google Local Service Ads (guaranteed calls)", "Built hyper-local ad groups by neighbourhood and service type", "Added call extensions with call-only campaigns for mobile"],
                results: [
                  { label: "Cost Per Call", before: "$85", after: "$19", up: false },
                  { label: "Monthly Calls", before: "28", after: "140", up: true },
                  { label: "Booked Jobs/mo", before: "11", after: "58", up: true },
                ],
                duration: "30 days",
              },
            ].map((cs, i) => (
              <motion.div key={i} variants={FADE_UP}>
                <div className={`h-full rounded-2xl border ${cs.border} bg-background/40 overflow-hidden group hover:border-opacity-80 transition-all duration-300`}>
                  {/* Hero banner: giant primary result */}
                  <div className={`bg-gradient-to-br ${cs.gradient} px-6 pt-6 pb-5 relative overflow-hidden`}>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[80px] font-black opacity-5 select-none leading-none pointer-events-none">
                      {cs.results[0].after}
                    </div>
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${
                      cs.color === "primary"
                        ? "bg-primary/15 text-primary border border-primary/25"
                        : "bg-secondary/15 text-secondary border border-secondary/25"
                    }`}>
                      <Zap size={9} /> {cs.label}
                    </div>
                    <div className="flex items-end gap-4">
                      <div>
                        <div className={`text-5xl font-black leading-none mb-1 ${cs.color === "primary" ? "text-primary" : "text-secondary"}`}>
                          {cs.results[0].after}
                        </div>
                        <div className="text-xs text-muted-foreground">{cs.results[0].label} · was {cs.results[0].before}</div>
                      </div>
                      <div className="ml-auto text-right pb-1">
                        <div className="text-sm font-bold">{cs.industry}</div>
                        <div className="text-[10px] text-muted-foreground">{cs.platform} · {cs.duration}</div>
                      </div>
                    </div>
                  </div>

                  {/* Body: two columns — challenge/actions | metrics */}
                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Left: challenge + actions */}
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Challenge</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">What I Did</p>
                        <ul className="space-y-1.5">
                          {cs.actions.map((action, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-foreground/75">
                              <span className={`mt-1.5 shrink-0 w-1 h-1 rounded-full ${cs.color === "primary" ? "bg-primary" : "bg-secondary"}`} />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: all 3 metrics */}
                    <div className="flex flex-col gap-2 justify-center">
                      {cs.results.map((r, j) => (
                        <div key={j} className="flex items-center gap-3 rounded-xl bg-white/3 border border-white/6 px-4 py-3">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${r.up ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
                            {r.up ? <TrendingUp size={13} className="text-emerald-400" /> : <TrendingDown size={13} className="text-rose-400" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider truncate">{r.label}</div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className="text-[11px] text-muted-foreground line-through">{r.before}</span>
                              <span className="text-muted-foreground/40 text-[10px]">→</span>
                              <span className={`text-sm font-bold ${r.up ? "text-emerald-400" : "text-rose-400"}`}>{r.after}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="mt-14 text-center"
          >
            <p className="text-muted-foreground mb-6 text-base">
              Want results like these for your campaigns?
            </p>
            <Button
              onClick={() => scrollTo("schedule")}
              size="lg"
              className="rounded-full px-8 h-12 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] transition-all border border-primary/40"
            >
              Book a Free Strategy Call <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section id="clients" className="py-24 relative overflow-hidden border-y border-white/5 bg-card/15">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_0%,transparent_50%,rgba(139,92,246,0.03)_100%)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
              <Briefcase size={14} /> Trusted By
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Brands & agencies I've worked with</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From DTC e-commerce to high-ticket lead gen — delivering measurable growth across industries.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="-mx-6 md:-mx-0"
          >
            <ClientLogoCarousel rowOne={CLIENT_LOGOS_ROW_ONE} rowTwo={CLIENT_LOGOS_ROW_TWO} />
          </motion.div>
        </div>
      </section>

      {/* Calendly Schedule Section */}
      <section id="schedule" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <Calendar size={14} /> Schedule a Meeting
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a free 30-minute strategy call</h2>
            <p className="text-muted-foreground text-lg">
              Pick a time that works for you. We'll review your current campaigns, audit any wasted spend and outline a clear plan to scale ROAS.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-card/40 border-white/10 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-2 md:p-4">
                <div
                  className="calendly-inline-widget rounded-xl overflow-hidden"
                  data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=3b82f6`}
                  style={{ minWidth: "280px", height: "min(700px, 75vh)" }}
                />
              </CardContent>
            </Card>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Prefer email?{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Feedback</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Real 5-star reviews from completed Upwork contracts.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Appreciated Umair's work so far. It has been incredible having his support setting up our CRM, including all integrations. He also built our website and has been helping with our marketing.",
                name: "7StarPortables",
                role: "Marketing & Google Ads Project"
              },
              {
                quote: "Umair is very good at what he does. He takes the time to explain what he is doing and does a great job. He helped me with Google Ads and I would absolutely recommend him.",
                name: "Upwork Client",
                role: "Google Ads Audit Specialist"
              },
              {
                quote: "Umair is very proactive with his clients and did a great job in managing the account we assigned to him. He kept our client's best interest and objectives at the center of his work.",
                name: "Marketing Agency",
                role: "Paid Ads Strategist — Google, Bing & Facebook"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="bg-card/50 border-white/5 h-full relative">
                  <div className="absolute top-6 left-6 text-primary/20">
                    <MessageSquare size={40} />
                  </div>
                  <CardContent className="p-8 pt-12">
                    <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section id="hire" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <CreditCard size={14} /> Buy Hours
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hire me by the hour — no retainers, no surprises</h2>
            <p className="text-muted-foreground text-lg">
              Pick a package, pay securely via Stripe, and I'll get started within 24 hours. Hours roll over — use them across any service.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                name: "Starter",
                hours: 5,
                price: 175,
                perHour: 35,
                color: "primary",
                popular: false,
                desc: "Perfect for a quick audit, account setup, or a campaign review with a clear action plan.",
                features: [
                  "Google or Meta account audit",
                  "Keyword / audience research",
                  "Campaign setup or fix",
                  "Written recommendations report",
                  "1 revision round",
                ],
                stripeLink: "https://buy.stripe.com/REPLACE_STARTER",
              },
              {
                name: "Growth",
                hours: 10,
                price: 350,
                perHour: 35,
                color: "secondary",
                popular: true,
                desc: "Ideal for ongoing campaign management, A/B testing and one full optimization cycle.",
                features: [
                  "Everything in Starter",
                  "Multi-channel campaign management",
                  "A/B ad copy & creative testing",
                  "Bid strategy optimization",
                  "GA4 + GTM event setup",
                  "Weekly progress update",
                ],
                stripeLink: "https://buy.stripe.com/REPLACE_GROWTH",
              },
              {
                name: "Scale",
                hours: 20,
                price: 700,
                perHour: 35,
                color: "primary",
                popular: false,
                desc: "Full strategy build — from zero to running across Google, Meta, Bing and LinkedIn.",
                features: [
                  "Everything in Growth",
                  "Full multi-channel strategy",
                  "Landing page CRO recommendations",
                  "Competitor & SERP analysis",
                  "Attribution & funnel reporting",
                  "Priority Slack / WhatsApp access",
                  "Bi-weekly strategy calls",
                ],
                stripeLink: "https://buy.stripe.com/REPLACE_SCALE",
              },
            ].map((pkg, i) => (
              <motion.div key={i} variants={FADE_UP} className="relative">
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      <Star size={10} fill="currentColor" /> Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full flex flex-col transition-all duration-300 ${
                  pkg.popular
                    ? "border-secondary/50 shadow-[0_0_30px_rgba(139,92,246,0.2)] bg-card/80"
                    : "border-white/10 bg-background/60 hover:border-white/20"
                }`}>
                  <CardContent className="p-5 sm:p-8 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${
                        pkg.color === "secondary"
                          ? "bg-secondary/10 text-secondary border border-secondary/20"
                          : "bg-primary/10 text-primary border border-primary/20"
                      }`}>
                        <Clock size={10} /> {pkg.hours} Hours
                      </div>
                      <h3 className="text-2xl font-extrabold mb-1">{pkg.name}</h3>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className={`text-4xl font-extrabold ${pkg.color === "secondary" ? "text-secondary" : "text-primary"}`}>
                          ${pkg.price}
                        </span>
                        <span className="text-muted-foreground text-sm">${pkg.perHour}/hr</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{pkg.desc}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm">
                          <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                            pkg.color === "secondary" ? "bg-secondary/20 text-secondary" : "bg-primary/20 text-primary"
                          }`}>
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span className="text-foreground/80">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {isStripeCheckoutReady(pkg.stripeLink) ? (
                      <a
                        href={pkg.stripeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 w-full h-12 rounded-xl font-semibold text-sm transition-all ${
                          pkg.popular
                            ? "bg-secondary text-secondary-foreground hover:opacity-90 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                            : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
                        }`}
                      >
                        <CreditCard size={16} />
                        Buy {pkg.hours} Hours — ${pkg.price}
                      </a>
                    ) : (
                      <Button
                        type="button"
                        onClick={() => scrollTo("contact")}
                        className={`w-full h-12 rounded-xl font-semibold text-sm ${
                          pkg.popular
                            ? "bg-secondary text-secondary-foreground hover:opacity-90 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                            : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
                        }`}
                      >
                        <Mail size={16} className="mr-2" />
                        Contact to Purchase
                      </Button>
                    )}

                    <p className="text-[11px] text-muted-foreground text-center mt-3">
                      {isStripeCheckoutReady(pkg.stripeLink)
                        ? "Secure checkout via Stripe · Hours never expire"
                        : "Stripe checkout coming soon · Contact me to get started"}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            {[
              { icon: CreditCard, text: "Stripe-secured payment" },
              { icon: Clock, text: "Work starts within 24 hrs" },
              { icon: Check, text: "100% Job Success on Upwork" },
              { icon: Star, text: "Top Rated freelancer" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon size={15} className="text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-card/30 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to scale? <br/>Let's talk.</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Currently accepting select freelance projects at $35/hr. Free consultation — drop a message about your project and I'll get back to you within 24 hours.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors mb-10 group"
              >
                <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/30 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Email me directly</p>
                  <p className="text-foreground">{CONTACT_EMAIL}</p>
                </div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Star, ...TRUST_BADGES[0] },
                  { icon: Award, ...TRUST_BADGES[1] },
                  { icon: TrendingUp, ...TRUST_BADGES[2] },
                  { icon: BarChart3, ...TRUST_BADGES[3] },
                  { icon: Clock, ...TRUST_BADGES[4] },
                  { icon: ShieldCheck, ...TRUST_BADGES[5] },
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4 hover:border-white/15 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <badge.icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-snug">{badge.title}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{badge.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-background/80 border-white/10 backdrop-blur-xl">
                <CardContent className="p-5 sm:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus-visible:border-primary" {...field} />
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
                              <Input placeholder="john@example.com" className="bg-background/50 border-white/10 focus-visible:border-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell me about your project goals..." 
                                className="min-h-[120px] bg-background/50 border-white/10 focus-visible:border-primary resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 text-base font-semibold shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all disabled:opacity-70"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 bg-background">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-2 font-bold tracking-tight">
            <Terminal size={16} className="text-primary" />
            <span>Umair A<span className="text-primary">.</span></span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Umair A. — Digital Marketing Specialist. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://www.upwork.com/freelancers/~0174e59cfe9730a3cd" target="_blank" rel="noopener noreferrer" aria-label="Upwork" className="hover:text-primary transition-colors p-2"><MessageSquare size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors p-2"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors p-2"><Twitter size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors p-2"><Instagram size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
