import { useEffect } from "react";
import { Check, Minus, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

// ── Plan definitions ────────────────────────────────────────────────────

const plans = [
  {
    name: "Starter",
    badge: null,
    tagline: "For operators with 1–2 buildings getting started.",
    price: "$499",
    priceNote: "per building / per month",
    cta: "Get Started",
    highlight: false,
    features: {
      "Referral Pipeline": true,
      "Admission Records": true,
      "Resident Roster": true,
      "Prospects & Waitlist": true,
      "Document Management": true,
      "Family Portal": true,
      "E-Signatures": true,
      "Support Tickets": true,
      "Notifications": true,
      "Insurance Authorization Tracking": false,
      "Hospital CRM": false,
      "Liaison Field Ops": false,
      "AI Routing & Win Predictor": false,
      "Payor Mix Optimizer": false,
      "Conversion Intelligence": false,
      "Discharge Network": false,
      "Relationship Graph": false,
      "Executive Command Center": false,
      "Regional Dashboard": false,
      "CarePort / PointClickCare Sync": false,
      "Availity / CPAN Authorization": false,
      "Custom Reporting": false,
      "Priority Support": false,
    },
  },
  {
    name: "Growth",
    badge: "Most Popular",
    tagline: "For multi-building operators scaling admissions. (3–10 buildings)",
    price: "$399",
    priceNote: "per building / per month",
    cta: "Talk to Us",
    highlight: true,
    features: {
      "Referral Pipeline": true,
      "Admission Records": true,
      "Resident Roster": true,
      "Prospects & Waitlist": true,
      "Document Management": true,
      "Family Portal": true,
      "E-Signatures": true,
      "Support Tickets": true,
      "Notifications": true,
      "Insurance Authorization Tracking": true,
      "Hospital CRM": true,
      "Liaison Field Ops": true,
      "AI Routing & Win Predictor": true,
      "Payor Mix Optimizer": true,
      "Conversion Intelligence": true,
      "Discharge Network": true,
      "Relationship Graph": false,
      "Executive Command Center": false,
      "Regional Dashboard": true,
      "CarePort / PointClickCare Sync": true,
      "Availity / CPAN Authorization": true,
      "Custom Reporting": false,
      "Priority Support": false,
    },
  },
  {
    name: "Enterprise",
    badge: null,
    tagline: "For regional chains with 11+ buildings.",
    price: "From $349",
    priceNote: "per building / per month · custom pricing",
    cta: "Contact Sales",
    highlight: false,
    features: {
      "Referral Pipeline": true,
      "Admission Records": true,
      "Resident Roster": true,
      "Prospects & Waitlist": true,
      "Document Management": true,
      "Family Portal": true,
      "E-Signatures": true,
      "Support Tickets": true,
      "Notifications": true,
      "Insurance Authorization Tracking": true,
      "Hospital CRM": true,
      "Liaison Field Ops": true,
      "AI Routing & Win Predictor": true,
      "Payor Mix Optimizer": true,
      "Conversion Intelligence": true,
      "Discharge Network": true,
      "Relationship Graph": true,
      "Executive Command Center": true,
      "Regional Dashboard": true,
      "CarePort / PointClickCare Sync": true,
      "Availity / CPAN Authorization": true,
      "Custom Reporting": true,
      "Priority Support": true,
    },
  },
];

const featureGroups = [
  {
    label: "Core Operations",
    keys: [
      "Referral Pipeline",
      "Admission Records",
      "Resident Roster",
      "Prospects & Waitlist",
      "Document Management",
      "Family Portal",
      "E-Signatures",
      "Support Tickets",
      "Notifications",
    ],
  },
  {
    label: "Growth & Intelligence",
    keys: [
      "Insurance Authorization Tracking",
      "Hospital CRM",
      "Liaison Field Ops",
      "AI Routing & Win Predictor",
      "Payor Mix Optimizer",
      "Conversion Intelligence",
      "Discharge Network",
    ],
  },
  {
    label: "Enterprise",
    keys: [
      "Relationship Graph",
      "Executive Command Center",
      "Regional Dashboard",
      "CarePort / PointClickCare Sync",
      "Availity / CPAN Authorization",
      "Custom Reporting",
      "Priority Support",
    ],
  },
];

// ── FAQ ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. NexusCare offers a 90-day guided pilot program for qualifying operators. After the pilot, all your data carries over automatically when you choose a plan — nothing is lost.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Plans can be upgraded at any time. Your data, settings, and integrations carry over automatically.",
  },
  {
    q: "Do you offer a BAA for HIPAA compliance?",
    a: "Yes. NexusCare signs Business Associate Agreements with all customers. Contact our team to initiate the BAA process.",
  },
  {
    q: "How does per-building pricing work for Enterprise?",
    a: "Enterprise pricing is scoped per organization and customized based on building count, user seats, and integration requirements. Talk to our team for a quote.",
  },
  {
    q: "What integrations are included?",
    a: "Growth and Enterprise plans include CarePort, PointClickCare, Availity, and CPAN integrations. See our integrations page for the full list.",
  },
];

// ── Component ────────────────────────────────────────────────────────────

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pricing — NexusCare"
        description="Simple, transparent pricing for senior living operators. Starter, Growth, and Enterprise plans. Contact sales to get started."
        canonical="https://nexuscare.io/pricing"
      />
      <SiteNav />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <ScrollReveal className="nc-container text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Plans that grow with your operation
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance">
            From single-facility operators to regional chains — NexusCare scales with your team, buildings, and patient volume.
          </p>
        </ScrollReveal>

        {/* Plan cards */}
        <div className="nc-container grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 80}>
              <div
                className={`relative flex flex-col rounded-2xl border p-8 h-full ${
                  plan.highlight
                    ? "border-accent bg-white shadow-xl shadow-accent/10 ring-1 ring-accent"
                    : "border-border bg-card shadow-sm"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-1">{plan.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{plan.tagline}</p>
                  <p className="text-3xl font-bold text-foreground">{plan.price}</p>
                  {plan.priceNote && (
                    <p className="text-xs text-muted-foreground mt-1">{plan.priceNote}</p>
                  )}
                </div>

                <Button
                  className={`w-full mb-8 ${plan.highlight ? "bg-accent hover:bg-accent/90 text-white" : ""}`}
                  variant={plan.highlight ? "default" : "outline"}
                  asChild
                >
                  <a href="/#get-started">
                    {plan.cta} <ArrowRight size={15} className="ml-1.5" />
                  </a>
                </Button>

                <ul className="space-y-2.5 mt-auto">
                  {Object.entries(plan.features)
                    .filter(([, v]) => v)
                    .slice(0, 9)
                    .map(([feat]) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                        {feat}
                      </li>
                    ))}
                  {Object.values(plan.features).filter(Boolean).length > 9 && (
                    <li className="text-sm text-muted-foreground pt-1">
                      + {Object.values(plan.features).filter(Boolean).length - 9} more features
                    </li>
                  )}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Full feature comparison */}
        <ScrollReveal className="nc-container mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Full Feature Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-5 py-4 text-left font-semibold text-foreground w-1/2">Feature</th>
                  {plans.map((p) => (
                    <th key={p.name} className={`px-4 py-4 text-center font-semibold ${p.highlight ? "text-accent" : "text-foreground"}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureGroups.map((group) => (
                  <>
                    <tr key={group.label} className="bg-muted/25">
                      <td colSpan={4} className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {group.label}
                      </td>
                    </tr>
                    {group.keys.map((feat, fi) => (
                      <tr
                        key={feat}
                        className={`border-t border-border/50 ${fi % 2 === 0 ? "bg-white" : "bg-muted/10"}`}
                      >
                        <td className="px-5 py-3 text-foreground">{feat}</td>
                        {plans.map((p) => (
                          <td key={p.name} className="px-4 py-3 text-center">
                            {p.features[feat as keyof typeof p.features] ? (
                              <Check size={16} className="mx-auto text-accent" />
                            ) : (
                              <Minus size={16} className="mx-auto text-muted-foreground/40" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal className="nc-container max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border bg-card p-6">
                <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA band */}
        <ScrollReveal className="nc-container">
          <div
            className="rounded-2xl p-10 md:p-14 text-center text-white"
            style={{ backgroundColor: "hsl(var(--nc-navy))" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to see NexusCare in action?</h2>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Request a personalized demo and we'll walk you through the platform for your team size and use case.
            </p>
            <Button size="lg" variant="hero" asChild>
              <a href="/#get-started">Request a Demo <ArrowRight size={16} className="ml-2" /></a>
            </Button>
          </div>
        </ScrollReveal>
      </main>

      <SiteFooter />
    </div>
  );
}
