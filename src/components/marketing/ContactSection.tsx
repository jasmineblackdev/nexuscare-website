import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

const EDGE_FN = "https://wmfluwhzpfuobxyyabjj.supabase.co/functions/v1/submit-pilot-lead";

const SUBJECTS = [
  "General Question",
  "Technical Support",
  "Partnership Inquiry",
  "Pricing & Plans",
  "Press & Media",
  "Other",
];

export function ContactSection() {
  const [form, setForm] = useState({
    first_name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(EDGE_FN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: form.first_name,
          email: form.email,
          organization: form.organization,
          message: `[${form.subject || "General"}] ${form.message}`,
        }),
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
    <section id="contact" className="nc-section bg-background">
      <div className="nc-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — info */}
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Get in touch
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty max-w-md">
              Have a question, partnership idea, or just want to learn more? Send us a message and we'll get back to you within one business day.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email us directly</p>
                  <a href="mailto:hello@nexuscare.io" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    hello@nexuscare.io
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Response time</p>
                  <p className="text-sm text-muted-foreground">Within 1 business day</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal delay={100}>
            {submitted ? (
              <div className="rounded-2xl bg-card border border-border p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[320px]">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail size={28} className="text-accent" />
                </div>
                <h3 className="font-semibold text-xl text-foreground">Message sent!</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Thanks for reaching out. We'll get back to you at <span className="font-medium">{form.email}</span> within one business day.
                </p>
              </div>
            ) : (
              <form
                className="rounded-2xl bg-card border border-border p-8 shadow-sm"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.first_name}
                        onChange={set("first_name")}
                        placeholder="Jane Smith"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={set("email")}
                        placeholder="jane@yourorg.com"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Organization</label>
                    <input
                      type="text"
                      value={form.organization}
                      onChange={set("organization")}
                      placeholder="Sunrise Senior Living"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Subject</label>
                    <select
                      value={form.subject}
                      onChange={set("subject")}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring text-foreground"
                    >
                      <option value="">Select a topic…</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="How can we help?"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <Button variant="hero" size="lg" type="submit" className="w-full mt-1" disabled={loading}>
                    {loading ? "Sending…" : <><span>Send Message</span> <ArrowRight size={18} /></>}
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
