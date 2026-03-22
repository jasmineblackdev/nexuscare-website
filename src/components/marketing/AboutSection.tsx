import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutSection() {
  return (
    <section className="nc-section" style={{ backgroundColor: "hsl(var(--nc-navy))", color: "hsl(0 0% 100%)" }}>
      <div className="nc-container">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(var(--nc-teal-light))" }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
              Senior care teams lose referrals not because they lack effort — but because they lack visibility.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-pretty" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              Referrals arrive by fax, phone, and email with no central tracking. Liaisons log visits manually — if they log them at all. Admissions teams chase updates across disconnected tools. NexusCare fixes this.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
