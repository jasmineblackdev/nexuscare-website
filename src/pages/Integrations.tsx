import { useEffect } from "react";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

// ── Integration definitions ──────────────────────────────────────────────

type IntegrationStatus = "live" | "beta" | "coming-soon";

interface Integration {
  name: string;
  description: string;
  status: IntegrationStatus;
  logoText: string; // initials/short text for placeholder logo block
  logoColor: string;
}

const integrationGroups: { label: string; description: string; items: Integration[] }[] = [
  {
    label: "Referral Platforms",
    description: "Sync referrals automatically from the platforms hospitals already use.",
    items: [
      {
        name: "CarePort",
        description: "Bi-directional referral sync from CarePort Health. Referrals flow in automatically, eliminating manual entry.",
        status: "live",
        logoText: "CP",
        logoColor: "#1565C0",
      },
      {
        name: "PointClickCare",
        description: "Pull referrals and patient data directly from PointClickCare's referral management workflow.",
        status: "live",
        logoText: "PCC",
        logoColor: "#00897B",
      },
      {
        name: "PatientPing",
        description: "Real-time patient event notifications from PatientPing's care coordination network.",
        status: "beta",
        logoText: "PP",
        logoColor: "#6A1B9A",
      },
      {
        name: "Epic FHIR",
        description: "FHIR R4 integration with Epic for clinical data exchange and referral tracking.",
        status: "beta",
        logoText: "Epic",
        logoColor: "#C62828",
      },
    ],
  },
  {
    label: "Insurance & Authorization",
    description: "Automate eligibility checks and prior authorization workflows.",
    items: [
      {
        name: "Availity",
        description: "Real-time eligibility verification and benefit checks through Availity's clearinghouse network.",
        status: "live",
        logoText: "AV",
        logoColor: "#00796B",
      },
      {
        name: "CPAN / X12 278",
        description: "Submit and track prior authorization requests via X12 278 transaction set. Status updates arrive as webhooks.",
        status: "live",
        logoText: "278",
        logoColor: "#1565C0",
      },
      {
        name: "Clearinghouse Connect",
        description: "Address and identity verification for patient intake across major clearinghouse networks.",
        status: "live",
        logoText: "CH",
        logoColor: "#37474F",
      },
    ],
  },
  {
    label: "Billing & Payments",
    description: "Subscription management and payment processing for your organization.",
    items: [
      {
        name: "Stripe",
        description: "Subscription billing, invoice management, and automated dunning for NexusCare plans.",
        status: "live",
        logoText: "S",
        logoColor: "#6772E5",
      },
    ],
  },
  {
    label: "Communication",
    description: "Keep your team and patients informed at every step.",
    items: [
      {
        name: "Resend",
        description: "Transactional and lifecycle email delivery. Powers onboarding sequences, SLA alerts, and billing notifications.",
        status: "live",
        logoText: "R",
        logoColor: "#000000",
      },
      {
        name: "Slack",
        description: "Internal Slack alerts for SLA breaches, high-priority referrals, and ops escalations.",
        status: "live",
        logoText: "Sl",
        logoColor: "#4A154B",
      },
      {
        name: "SMS / Push Notifications",
        description: "Mobile push and SMS alerts for liaison field ops and time-sensitive referral events.",
        status: "coming-soon",
        logoText: "SMS",
        logoColor: "#455A64",
      },
    ],
  },
  {
    label: "Coming Soon",
    description: "Integrations on the roadmap based on customer demand.",
    items: [
      {
        name: "MatrixCare",
        description: "EMR integration with MatrixCare for clinical data sync and resident records.",
        status: "coming-soon",
        logoText: "MC",
        logoColor: "#546E7A",
      },
      {
        name: "Salesforce Health Cloud",
        description: "CRM sync for regional operators managing referral relationships in Salesforce.",
        status: "coming-soon",
        logoText: "SF",
        logoColor: "#00A1E0",
      },
      {
        name: "Google Calendar",
        description: "Sync tour schedules, follow-up appointments, and admission milestones with Google Calendar.",
        status: "coming-soon",
        logoText: "GCal",
        logoColor: "#4285F4",
      },
    ],
  },
];

const statusConfig: Record<IntegrationStatus, { label: string; color: string }> = {
  live:          { label: "Live",         color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  beta:          { label: "Beta",         color: "text-blue-700 bg-blue-50 border-blue-200" },
  "coming-soon": { label: "Coming Soon",  color: "text-muted-foreground bg-muted border-border" },
};

// ── Component ────────────────────────────────────────────────────────────

export default function Integrations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const liveCount = integrationGroups
    .flatMap((g) => g.items)
    .filter((i) => i.status === "live" || i.status === "beta").length;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Integrations — NexusCare"
        description="NexusCare connects with CarePort, PointClickCare, Epic FHIR, Availity, CPAN, Stripe, and more. See the full integration ecosystem."
        canonical="https://nexuscare.io/integrations"
      />
      <SiteNav />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <ScrollReveal className="nc-container text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Integrations</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Works with the tools your team already uses
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance">
            NexusCare connects directly to referral platforms, clearinghouses, EMRs, and communication tools — so referrals flow in automatically, no manual re-entry required.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle size={15} className="text-emerald-600" />
            <span>{liveCount} integrations live or in beta</span>
          </div>
        </ScrollReveal>

        {/* Integration groups */}
        <div className="nc-container space-y-14 mb-20">
          {integrationGroups.map((group, gi) => (
            <ScrollReveal key={group.label} delay={gi * 60}>
              <div>
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-1">{group.label}</h2>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => {
                    const status = statusConfig[item.status];
                    return (
                      <div
                        key={item.name}
                        className={`rounded-xl border bg-card p-5 flex flex-col gap-3 ${
                          item.status === "coming-soon" ? "opacity-60" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          {/* Logo placeholder */}
                          <div
                            className="h-10 w-10 shrink-0 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: item.logoColor }}
                          >
                            {item.logoText}
                          </div>
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full border ${status.color}`}
                          >
                            {status.label}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">{item.name}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                        {item.status === "coming-soon" && (
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-auto pt-1">
                            <Clock size={12} />
                            On the roadmap
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Custom integration request */}
        <ScrollReveal className="nc-container max-w-2xl mx-auto mb-20">
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <h3 className="text-lg font-bold text-foreground mb-2">Don't see your platform?</h3>
            <p className="text-sm text-muted-foreground mb-5">
              We add integrations based on customer demand. If your team depends on a platform that isn't listed,
              let us know and we'll evaluate it for the roadmap.
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:hello@nexuscare.io">
                Request an Integration <ArrowRight size={14} className="ml-1.5" />
              </a>
            </Button>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="nc-container">
          <div
            className="rounded-2xl p-10 md:p-14 text-center text-white"
            style={{ backgroundColor: "hsl(var(--nc-navy))" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">See NexusCare connected to your stack</h2>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Book a demo and we'll walk through how NexusCare integrates with the platforms your team already uses.
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
