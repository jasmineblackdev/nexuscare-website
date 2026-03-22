import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="nc-section-lg bg-nc-warm">
      <div className="nc-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              See NexusCare in action
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty max-w-md">
              Schedule a personalized demo to see how NexusCare can streamline your referral operations and improve admissions coordination.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>hello@nexuscare.io</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>United States</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <form
              className="rounded-xl bg-card p-8 shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo request submitted! We'll be in touch.");
              }}
            >
              <h3 className="font-sans text-lg font-semibold text-foreground mb-6">Request a Demo</h3>
              <div className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Work Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Organization</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message (optional)</label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full mt-2">
                  Request Demo <ArrowRight size={18} />
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
