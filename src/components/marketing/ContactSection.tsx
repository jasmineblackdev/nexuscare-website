import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, CheckCircle2 } from "lucide-react";

const EDGE_FN = "https://wmfluwhzpfuobxyyabjj.supabase.co/functions/v1/submit-pilot-lead";

export function ContactSection() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(EDGE_FN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us at hello@nexuscare.io.");
    } finally {
      setLoading(false);
    }
  };

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
            {submitted ? (
              <div className="rounded-xl bg-card p-8 shadow-sm flex flex-col items-center justify-center text-center gap-4 min-h-[320px]">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-accent" />
                </div>
                <h3 className="font-semibold text-xl text-foreground">Request received!</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  We'll review your request and send you a personal invite code to access the NexusCare pilot — usually within 1 business day.
                </p>
                <p className="text-xs text-muted-foreground">Check your inbox at <span className="font-medium">{form.email}</span></p>
              </div>
            ) : (
              <form
                className="rounded-xl bg-card p-8 shadow-sm"
                onSubmit={handleSubmit}
              >
                <h3 className="font-sans text-lg font-semibold text-foreground mb-6">Request a Demo</h3>
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">First Name</label>
                      <input
                        type="text"
                        required
                        value={form.first_name}
                        onChange={set("first_name")}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Last Name</label>
                      <input
                        type="text"
                        required
                        value={form.last_name}
                        onChange={set("last_name")}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Work Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Organization</label>
                    <input
                      type="text"
                      value={form.organization}
                      onChange={set("organization")}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Message (optional)</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={set("message")}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <Button variant="hero" size="lg" type="submit" className="w-full mt-2" disabled={loading}>
                    {loading ? "Sending…" : <><span>Request Demo</span> <ArrowRight size={18} /></>}
                  </Button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
