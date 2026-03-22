import { ScrollReveal } from "@/components/ScrollReveal";
import { Building2, ClipboardCheck, Users, Activity } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Senior Living Operators",
    desc: "Track every referral across your communities. See pipeline health, conversion rates, and liaison performance in real time.",
  },
  {
    icon: ClipboardCheck,
    title: "Admissions & Intake Teams",
    desc: "Coordinate admissions without spreadsheets. Manage documents, status updates, and move-in timelines from one place.",
  },
  {
    icon: Users,
    title: "Liaison Teams",
    desc: "Stay connected in the field with mobile access to referral assignments, facility info, and real-time updates.",
  },
  {
    icon: Activity,
    title: "Healthcare Referral Organizations",
    desc: "Connect hospitals, discharge planners, and post-acute providers through a shared referral coordination platform.",
  },
];

export function AudienceSection() {
  return (
    <section id="audience" className="nc-section bg-nc-slate">
      <div className="nc-container">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Who It's For</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            Built for the teams that move patients forward
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            NexusCare serves every role in the referral-to-admission journey.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 80}>
              <div className="flex gap-5 rounded-xl bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <a.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground text-pretty">{a.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
