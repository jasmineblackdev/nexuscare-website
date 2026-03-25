import { useEffect } from "react";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";

const EFFECTIVE_DATE = "March 24, 2026";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "scope", label: "Who This Policy Applies To" },
  { id: "information-collected", label: "Information We Collect" },
  { id: "phi", label: "Protected Health Information" },
  { id: "how-we-use", label: "How We Use Information" },
  { id: "sharing", label: "Information Sharing" },
  { id: "security", label: "Data Security" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "Your Rights" },
  { id: "hipaa", label: "HIPAA Compliance" },
  { id: "cookies", label: "Cookies & Analytics" },
  { id: "children", label: "Children's Privacy" },
  { id: "international", label: "International Data" },
  { id: "changes", label: "Policy Changes" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Page header */}
      <div className="bg-primary pt-28 pb-16">
        <div className="nc-container">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/70 text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </div>

      <div className="nc-container py-16">
        <div className="flex gap-16 items-start">

          {/* Sticky sidebar TOC */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24 space-y-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Contents</p>
              {sections.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">

            <section id="overview" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                NexusCare ("NexusCare," "we," "us," or "our") operates a healthcare referral coordination platform for senior living operators, admissions teams, and regional directors. This Privacy Policy explains how we collect, use, disclose, and protect information when you access our platform, website, or related services (collectively, the "Service").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                By using the Service, you agree to the practices described in this Privacy Policy. If you are using NexusCare on behalf of an organization, that organization is responsible for ensuring its users are informed about this policy.
              </p>
            </section>

            <section id="scope" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Who This Policy Applies To</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">This Privacy Policy applies to multiple categories of individuals who interact with NexusCare:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground text-sm shrink-0 w-44">Website visitors</span>
                  <span className="text-muted-foreground text-sm">Individuals browsing nexuscare.io who have not created an account. We collect minimal data (see Cookies & Analytics).</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground text-sm shrink-0 w-44">Demo requesters</span>
                  <span className="text-muted-foreground text-sm">Individuals who submit a contact or demo request form. We use this information solely to respond to the inquiry.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground text-sm shrink-0 w-44">Customer organizations</span>
                  <span className="text-muted-foreground text-sm">Organizations that have contracted with NexusCare to use the Service. Account, billing, and configuration data is collected and managed at the organization level.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground text-sm shrink-0 w-44">Authorized users</span>
                  <span className="text-muted-foreground text-sm">Employees or contractors of a customer organization who have been granted platform access by an administrator. User-level profile and activity data is associated with the organization's account.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-foreground text-sm shrink-0 w-44">Patients / PHI subjects</span>
                  <span className="text-muted-foreground text-sm">Individuals whose Protected Health Information may be entered into the platform by a customer organization. NexusCare processes this data solely as a Business Associate on behalf of the customer (the Covered Entity). These individuals are not NexusCare's direct customers. Patient PHI requests should be directed to the applicable healthcare organization.</span>
                </li>
              </ul>
            </section>

            <section id="information-collected" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Information We Collect</h2>

              <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Account & Organizational Data</h3>
              <p className="text-muted-foreground leading-relaxed">We collect information you provide when creating an account or onboarding your organization:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                <li>Name, email address, job title, and role</li>
                <li>Organization name, facility details, and billing information</li>
                <li>Login credentials (passwords are hashed and never stored in plaintext)</li>
                <li>Settings, preferences, and configuration choices</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Usage Data</h3>
              <p className="text-muted-foreground leading-relaxed">We automatically collect certain data when you use the Service:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                <li>Browser type, device type, operating system, and IP address</li>
                <li>Pages visited, features used, and time spent within the platform</li>
                <li>Error logs and performance data used to improve reliability</li>
                <li>Referral workflow events (e.g., referral created, decision submitted) — logged without patient-identifiable data</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Communications</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you contact us via email, demo request form, or support channels, we retain those communications to respond to your inquiry and improve our service.
              </p>
            </section>

            <section id="phi" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Protected Health Information (PHI)</h2>
              <p className="text-muted-foreground leading-relaxed">
                NexusCare is a platform designed for use in healthcare settings. When your organization uses the Service to manage patient referrals, it may input, store, and process Protected Health Information (PHI) as defined under the Health Insurance Portability and Accountability Act (HIPAA). This includes patient names, dates of birth, diagnoses, insurance information, and other identifiers.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                NexusCare acts as a <strong>Business Associate</strong> when it processes PHI on behalf of a Covered Entity. Before PHI may be entered into the Service, your organization must execute a <strong>Business Associate Agreement (BAA)</strong> with NexusCare. Please contact <a href="mailto:hello@nexuscare.io" className="text-accent hover:underline">hello@nexuscare.io</a> to obtain a BAA.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                PHI is stored with encryption at rest and in transit and is logically isolated by organization. NexusCare personnel do not access PHI except as required to provide contracted technical support. Such access is subject to role-based controls, internal authorization requirements, and audit logging.
              </p>
            </section>

            <section id="how-we-use" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">How We Use Information</h2>
              <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                <li>Provide, operate, and maintain the Service</li>
                <li>Authenticate users and enforce security controls</li>
                <li>Process referral workflows, authorizations, and census data as directed by your organization</li>
                <li>Send account-related notifications, alerts, and product updates</li>
                <li>Analyze aggregate, de-identified usage patterns to improve the platform</li>
                <li>Investigate and resolve security incidents or policy violations</li>
                <li>Comply with applicable laws and regulatory requirements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                We do not sell your personal data or PHI to third parties. We do not use PHI for advertising or marketing purposes.
              </p>
            </section>

            <section id="sharing" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">We may share information in the following limited circumstances:</p>

              <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Subprocessors</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use trusted third-party service providers to operate the Service. These providers are contractually bound to protect data and may not use it for their own purposes. Where required, subprocessors with access to PHI execute a Business Associate Agreement with NexusCare.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Provider</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Category</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Location</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">PHI Access</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 text-muted-foreground">Supabase</td>
                      <td className="px-4 py-2.5 text-muted-foreground">Cloud database &amp; infrastructure</td>
                      <td className="px-4 py-2.5 text-muted-foreground">United States</td>
                      <td className="px-4 py-2.5 text-muted-foreground">Yes — BAA executed</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 text-muted-foreground">Stripe</td>
                      <td className="px-4 py-2.5 text-muted-foreground">Payment processing</td>
                      <td className="px-4 py-2.5 text-muted-foreground">United States</td>
                      <td className="px-4 py-2.5 text-muted-foreground">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-3">
                NexusCare may add or replace subprocessors as the Service evolves. We will provide notice of material subprocessor changes through an updated policy or direct customer notification at least 30 days in advance where practicable.
              </p>

              <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Within Your Organization</h3>
              <p className="text-muted-foreground leading-relaxed">
                Data entered by your organization is accessible to authorized users within your organization as configured by your administrators. NexusCare does not share your organization's data with other organizations.
              </p>

              <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Legal Requirements</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may disclose information when required by law, court order, or governmental authority, or to protect the rights, safety, or property of NexusCare, our users, or the public.
              </p>

              <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Business Transfers</h3>
              <p className="text-muted-foreground leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will endeavor to notify affected users prior to any such transfer where permitted by law, and will require that any successor organization provide substantially equivalent protections. PHI will continue to be handled in accordance with HIPAA requirements.
              </p>
            </section>

            <section id="security" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                NexusCare implements administrative, technical, and physical safeguards designed to protect your data, including PHI, from unauthorized access, alteration, disclosure, or destruction. Specific measures include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                <li>TLS encryption for all data in transit</li>
                <li>Industry-standard encryption for data at rest (currently AES-256)</li>
                <li>Row-level security policies enforcing org-scoped data isolation</li>
                <li>Multi-factor authentication support</li>
                <li>Account lockout and brute-force protection</li>
                <li>Audit logging of access to PHI and sensitive records</li>
                <li>Role-based access controls limiting data visibility by job function</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                No security system is impenetrable. In the event of a breach involving PHI, NexusCare will notify affected Covered Entities as required under HIPAA's Breach Notification Rule.
              </p>
            </section>

            <section id="retention" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain data for as long as necessary to provide the Service, comply with legal obligations, and resolve disputes. The following schedule applies to different categories of data:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Data Category</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 text-muted-foreground">Account &amp; user profile data</td>
                      <td className="px-4 py-2.5 text-muted-foreground">Duration of subscription + 90 days</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 text-muted-foreground">Referral workflow data (including PHI)</td>
                      <td className="px-4 py-2.5 text-muted-foreground">Duration of subscription + 90-day wind-down</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 text-muted-foreground">Audit logs</td>
                      <td className="px-4 py-2.5 text-muted-foreground">6 years (aligned with HIPAA documentation standards)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 text-muted-foreground">Billing records</td>
                      <td className="px-4 py-2.5 text-muted-foreground">7 years (standard financial record requirement)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2.5 text-muted-foreground">Database backups</td>
                      <td className="px-4 py-2.5 text-muted-foreground">Rolling 30-day schedule; purged thereafter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination of your subscription, you may request export of your organization's data. Following the 90-day wind-down period, data will be deleted from production systems in accordance with HIPAA requirements. A certificate of destruction is available upon request.
              </p>
            </section>

            <section id="rights" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account data, subject to legal retention requirements</li>
                <li>Object to certain uses of your data</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                For requests related to PHI, please note that NexusCare processes PHI as a Business Associate on behalf of your organization (the Covered Entity). Requests from patients regarding their own PHI should be directed to the applicable healthcare organization, not to NexusCare.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To exercise your rights regarding your account data, contact <a href="mailto:hello@nexuscare.io" className="text-accent hover:underline">hello@nexuscare.io</a>. We will respond to verifiable requests within 30 days. We may extend this period by an additional 30 days where reasonably necessary, in which case we will notify you of the extension and the reason.
              </p>
            </section>

            <section id="hipaa" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">HIPAA Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                NexusCare is designed for use by Covered Entities as defined under HIPAA, including skilled nursing facilities, assisted living communities, and healthcare organizations. As a Business Associate, NexusCare complies with applicable HIPAA Privacy Rule and Security Rule requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                <strong>BAA requirement:</strong> Your organization must execute a Business Associate Agreement with NexusCare before using the Service to process PHI. Contact <a href="mailto:hello@nexuscare.io" className="text-accent hover:underline">hello@nexuscare.io</a> to initiate this process.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                NexusCare does not provide legal, compliance, or medical advice. Your organization remains responsible for its own HIPAA compliance obligations as a Covered Entity.
              </p>
            </section>

            <section id="cookies" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Cookies & Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our marketing website uses minimal cookies necessary for basic functionality and to understand aggregate visitor behavior. We do not use advertising cookies or cross-site tracking technologies on nexuscare.io.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                The NexusCare application (app.nexuscare.io) uses session cookies required for authentication and security. No third-party advertising cookies are used within the application.
              </p>
            </section>

            <section id="children" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service is not directed to individuals under the age of 18 and is intended solely for use by healthcare professionals and organizations. NexusCare does not knowingly collect personal data from children. If we become aware that a child under 18 has provided personal data without verified parental consent, we will promptly delete it. If you believe we have inadvertently collected such information, please contact us at <a href="mailto:hello@nexuscare.io" className="text-accent hover:underline">hello@nexuscare.io</a>.
              </p>
            </section>

            <section id="international" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">International Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                NexusCare is operated in the United States and is currently intended for use by US-based organizations. If you access the Service from outside the United States, your information may be transferred to and processed in the United States, where data protection laws may differ from those in your jurisdiction. By using the Service, you acknowledge and consent to this transfer. NexusCare maintains appropriate safeguards for any such transfers consistent with applicable law.
              </p>
            </section>

            <section id="changes" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Policy Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make material changes, we will update the effective date at the top of this page and, where appropriate, notify you via email or an in-platform notice. Your continued use of the Service after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section id="contact" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions, concerns, or requests related to this Privacy Policy or our data practices, please contact:
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="font-semibold text-foreground text-sm">General &amp; Privacy Inquiries</p>
                  <p className="text-muted-foreground text-sm mt-1">Email: <a href="mailto:hello@nexuscare.io" className="text-accent hover:underline">hello@nexuscare.io</a></p>
                  <p className="text-muted-foreground text-sm">United States</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="font-semibold text-foreground text-sm">Security Incidents &amp; Vulnerability Reports</p>
                  <p className="text-muted-foreground text-sm mt-1">Email: <a href="mailto:security@nexuscare.io" className="text-accent hover:underline">security@nexuscare.io</a></p>
                  <p className="text-muted-foreground text-sm">For urgent breach or security concerns</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
