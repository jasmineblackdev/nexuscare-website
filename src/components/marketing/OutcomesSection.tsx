import { ScrollReveal } from "@/components/ScrollReveal";
import { TrendingUp, Clock, Target, Layers, ShieldCheck, Users } from "lucide-react";

const outcomes = [
  { icon: Clock, text: "Faster referral response times" },
  { icon: Target, text: "Higher admission conversion rates" },
  { icon: Users, text: "Stronger liaison visibility and accountability" },
  { icon: TrendingUp, text: "Improved pipeline tracking and forecasting" },
  { icon: Layers, text: "More organized, less manual workflows" },
  { icon: ShieldCheck, text: "Better operational oversight for leadership" },
];

export function OutcomesSection() {
  return (
    <section className="nc-section">
      <div className="nc-container">
        <div className="rounded-2xl p-10 md:p-16" style={{ backgroundColor: "hsl(var(--nc-teal))", color: "hsl(0 0% 100%)" }}>
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider opacity-70 mb-3">Why NexusCare</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
              Better coordination. Better outcomes. Better business.
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((o, i) => (
              <ScrollReveal key={o.text} delay={i * 70}>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <o.icon size={18} />
                  </div>
                  <p className="text-sm font-medium leading-snug pt-1.5">{o.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
