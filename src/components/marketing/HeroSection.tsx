import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users, Activity, FileText, Building } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden bg-gradient-to-b from-[#F5F9FC] via-[#EDF4FA] to-background">
      {/* Subtle decorative shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#18A7B5]/[0.04] blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0B3A66]/[0.03] blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="nc-container relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Healthcare Referral Intelligence
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight text-balance text-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Full visibility into your{" "}
              <span className="text-accent">referral pipeline.</span>
            </h1>

            <p
              className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty max-w-lg opacity-0 animate-fade-up"
              style={{ animationDelay: "350ms" }}
            >
              NexusCare gives senior care operators, admissions teams, and liaisons one platform to track referrals, coordinate admissions, and see what's working — in real time.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "500ms" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="https://app.nexuscare.io/pilot">
                  Request a Demo <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="https://app.nexuscare.io/login">Log In to Your Account</a>
              </Button>
            </div>

            <p
              className="mt-4 text-sm text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "600ms" }}
            >
              Free plan available · No credit card required
            </p>
          </div>

          {/* Right — Product UI Mockup */}
          <div
            className="relative opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="rounded-2xl bg-white shadow-xl shadow-[#0B3A66]/[0.08] border border-[#D6E2EC] p-5 md:p-6">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dashboard Overview</p>
                  <p className="text-sm text-muted-foreground/60 mt-0.5">Today · All Communities</p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28CA42]" />
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <MetricCard
                  icon={<Activity size={16} />}
                  label="Active Referrals"
                  value="47"
                  change="+12 this week"
                  positive
                />
                <MetricCard
                  icon={<TrendingUp size={16} />}
                  label="Conversion Rate"
                  value="68.4%"
                  change="+3.2% vs last month"
                  positive
                />
                <MetricCard
                  icon={<Clock size={16} />}
                  label="Avg Response Time"
                  value="1.8 hrs"
                  change="-22% improvement"
                  positive
                />
                <MetricCard
                  icon={<Building size={16} />}
                  label="Occupancy Rate"
                  value="91.2%"
                  change="Across 6 communities"
                />
              </div>

              {/* Recent activity */}
              <div className="rounded-xl border border-[#D6E2EC] bg-[#F5F9FC]/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Recent Pipeline Activity</p>
                <div className="space-y-2.5">
                  <ActivityRow
                    icon={<FileText size={14} />}
                    text="New referral from Memorial Health"
                    time="8 min ago"
                    accent
                  />
                  <ActivityRow
                    icon={<Users size={14} />}
                    text="Liaison assigned — Sarah M. → Sunrise Community"
                    time="23 min ago"
                  />
                  <ActivityRow
                    icon={<TrendingUp size={14} />}
                    text="Admission confirmed — Oakwood Residence"
                    time="1 hr ago"
                  />
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -bottom-4 -left-4 md:-left-8 rounded-xl bg-white shadow-lg shadow-[#0B3A66]/[0.06] border border-[#D6E2EC] p-3.5 opacity-0 animate-fade-up"
              style={{ animationDelay: "700ms" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Pipeline Value</p>
                  <p className="text-sm font-bold text-foreground tabular-nums">$2.4M <span className="text-xs font-medium text-green-600">↑ 18%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-16 pt-10 border-t border-border opacity-0 animate-fade-up"
          style={{ animationDelay: "800ms" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">33%</p>
              <p className="mt-1 text-sm text-muted-foreground">of referrals lost without the right tools</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">$8.2B</p>
              <p className="mt-1 text-sm text-muted-foreground">annual industry loss from missed referrals</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent tabular-nums">20–30%</p>
              <p className="mt-1 text-sm text-muted-foreground">conversion rate improvement with NexusCare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  icon,
  label,
  value,
  change,
  positive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#D6E2EC] bg-white p-3.5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-accent">{icon}</span>
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
      </div>
      <p className="text-xl font-bold text-foreground tabular-nums">{value}</p>
      <p className={`text-xs mt-0.5 ${positive ? "text-green-600" : "text-muted-foreground/70"}`}>
        {change}
      </p>
    </div>
  );
}

function ActivityRow({
  icon,
  text,
  time,
  accent,
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span className={accent ? "text-accent mt-0.5" : "text-muted-foreground mt-0.5"}>{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-foreground truncate">{text}</p>
        <p className="text-[11px] text-muted-foreground/60">{time}</p>
      </div>
    </div>
  );
}
