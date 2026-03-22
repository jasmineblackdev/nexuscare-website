import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Referral Received", desc: "Hospital or discharge planner sends a referral into NexusCare." },
  { num: "02", title: "Liaison Assigned", desc: "The right liaison is matched and notified instantly." },
  { num: "03", title: "Admission Coordinated", desc: "Documents, approvals, and move-in logistics handled in one place." },
  { num: "04", title: "Visibility & Reporting", desc: "Leadership sees pipeline status, conversion data, and team performance." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="nc-section">
      <div className="nc-container">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            From referral to move-in, fully coordinated
          </h2>
        </ScrollReveal>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 100} className="text-center relative">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-2xl font-bold shadow-lg shadow-primary/15">
                {s.num}
              </div>
              <h3 className="font-sans text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
