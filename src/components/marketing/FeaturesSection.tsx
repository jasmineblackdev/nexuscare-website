import { ScrollReveal } from "@/components/ScrollReveal";
import { Eye, GitPullRequest, Bell, FileText, Building, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Referral Pipeline Visibility",
    desc: "See every referral across all communities — by status, source, liaison, and facility — in real time.",
  },
  {
    icon: GitPullRequest,
    title: "Liaison Workflow Coordination",
    desc: "Assign referrals, track follow-ups, and manage liaison schedules from a single operations view.",
  },
  {
    icon: Bell,
    title: "Real-Time Admission Updates",
    desc: "Get instant status changes as referrals progress from inquiry to admission to move-in.",
  },
  {
    icon: FileText,
    title: "Document Access & Review",
    desc: "Upload, share, and review clinical documents and admission paperwork without leaving the platform.",
  },
  {
    icon: Building,
    title: "Account & Facility Tracking",
    desc: "Maintain hospital relationships, track referral sources, and manage facility partnerships.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Team Performance",
    desc: "Measure conversion rates, response times, and liaison productivity with built-in reporting.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="nc-section bg-nc-sky">
      <div className="nc-container">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Platform Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            Everything your team needs to coordinate care transitions
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 70}>
              <div className="rounded-xl bg-card p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <f.icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
