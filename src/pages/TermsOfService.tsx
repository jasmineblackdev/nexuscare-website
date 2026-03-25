import { useEffect } from "react";
import { SiteNav } from "@/components/marketing/SiteNav";
import { SiteFooter } from "@/components/marketing/SiteFooter";

const EFFECTIVE_DATE = "March 24, 2026";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "service", label: "The Service" },
  { id: "accounts", label: "Accounts & Access" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "healthcare-data", label: "Healthcare Data & HIPAA" },
  { id: "pilot", label: "Pilot Program" },
  { id: "billing", label: "Billing & Subscriptions" },
  { id: "ip", label: "Intellectual Property" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing Law" },
  { id: "changes", label: "Changes to Terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
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

            <section id="acceptance" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the NexusCare platform, website, and related services (collectively, the "Service") provided by NexusCare ("NexusCare," "we," "us," or "our").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                By accessing or using the Service, you agree to be bound by these Terms. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization, and "you" refers to both you and the organization. If you do not agree to these Terms, do not use the Service.
              </p>
            </section>

            <section id="service" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">The Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                NexusCare provides a software-as-a-service (SaaS) platform that enables senior living operators, admissions directors, intake coordinators, and regional teams to manage patient referral workflows, prior authorization tracking, census data, and admissions coordination.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                NexusCare reserves the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We will make reasonable efforts to provide advance notice of material changes. NexusCare is not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
              </p>
            </section>

            <section id="accounts" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Accounts & Access</h2>
              <p className="text-muted-foreground leading-relaxed">
                To use the Service, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
                <li>You must be at least 18 years old to create an account.</li>
                <li>You may not share your account credentials with others or allow unauthorized access.</li>
                <li>You must promptly notify NexusCare of any unauthorized use of your account or suspected security breach.</li>
                <li>Organizational administrators are responsible for managing user access within their organization, including provisioning and deprovisioning team members.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                NexusCare reserves the right to suspend or terminate accounts that violate these Terms, exhibit suspicious activity, or are found to be inactive for extended periods.
              </p>
            </section>

            <section id="acceptable-use" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
                <li>Use the Service to violate any applicable law or regulation, including HIPAA</li>
                <li>Input data you do not have authorization to process or share</li>
                <li>Attempt to gain unauthorized access to any part of the Service, its servers, or other systems</li>
                <li>Use automated scripts, bots, or scrapers to access or extract data from the Service</li>
                <li>Reverse engineer, decompile, or attempt to derive source code from the Service</li>
                <li>Transmit viruses, malware, or any code designed to disrupt, damage, or interfere with the Service</li>
                <li>Impersonate another user, person, or organization</li>
                <li>Use the Service in a manner that could damage, disable, or impair its availability or performance</li>
                <li>Resell, sublicense, or offer the Service to third parties without our written consent</li>
              </ul>
            </section>

            <section id="healthcare-data" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Healthcare Data & HIPAA</h2>
              <p className="text-muted-foreground leading-relaxed">
                NexusCare is designed for use by Covered Entities and their Business Associates as those terms are defined under HIPAA. If your use of the Service involves the creation, receipt, maintenance, or transmission of Protected Health Information (PHI), the following applies:
              </p>

              <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Business Associate Agreement</h3>
              <p className="text-muted-foreground leading-relaxed">
                You must execute a Business Associate Agreement (BAA) with NexusCare before entering any PHI into the Service. Using the Service to process PHI without an executed BAA is a material breach of these Terms and may expose your organization to legal liability. Contact <a href="mailto:hello@nexuscare.io" className="text-accent hover:underline">hello@nexuscare.io</a> to execute a BAA.
              </p>

              <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Your Responsibilities</h3>
              <p className="text-muted-foreground leading-relaxed">As the Covered Entity, your organization is responsible for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                <li>Ensuring all users are trained on appropriate data handling and HIPAA requirements</li>
                <li>Obtaining any required patient authorizations before inputting PHI</li>
                <li>Configuring access controls to limit data access to authorized personnel</li>
                <li>Reporting any suspected breaches involving PHI to NexusCare promptly</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-5 mb-2">No Medical Advice</h3>
              <p className="text-muted-foreground leading-relaxed">
                NexusCare is a workflow and coordination platform. It does not provide medical, clinical, legal, or compliance advice. Clinical and admission decisions remain the sole responsibility of licensed healthcare professionals at your organization.
              </p>
            </section>

            <section id="pilot" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Pilot Program</h2>
              <p className="text-muted-foreground leading-relaxed">
                NexusCare may offer access to the Service under a time-limited pilot program ("Pilot"). During a Pilot:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
                <li>Access is granted at no charge for the duration of the pilot period as specified in your pilot agreement</li>
                <li>The Service is provided "as-is" without express guarantees of uptime, feature completeness, or support response times beyond reasonable efforts</li>
                <li>NexusCare may collect feedback and usage data to improve the platform</li>
                <li>Pilot access may be revoked at any time if these Terms are violated or if the pilot program is discontinued</li>
                <li>Pilot programs do not automatically convert to paid subscriptions; you will receive advance notice before any billing begins</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Data entered during a Pilot will be retained for the duration of the pilot period. At the conclusion of the pilot, you may request an export of your organization's data before deletion.
              </p>
            </section>

            <section id="billing" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Billing & Subscriptions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Following any applicable free trial or pilot period, access to the Service requires a paid subscription. Subscription pricing, billing cycles, and included features will be presented at the time of sign-up or renewal.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
                <li>Subscriptions are billed in advance on a monthly or annual basis as selected</li>
                <li>All fees are non-refundable except as required by law or as expressly stated in your subscription agreement</li>
                <li>You authorize NexusCare to charge the payment method on file for recurring subscription fees</li>
                <li>If payment fails, NexusCare may suspend access after reasonable notice</li>
                <li>Prices may change with 30 days' written notice; continued use after a price change constitutes acceptance</li>
              </ul>
            </section>

            <section id="ip" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service, including all software, algorithms, designs, logos, text, and content created by NexusCare, is owned by NexusCare and protected by applicable intellectual property laws. These Terms do not grant you any ownership interest in the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                <strong>Your data:</strong> You retain ownership of all data your organization inputs into the Service, including patient records, workflow data, and organizational content. You grant NexusCare a limited license to store, process, and display your data solely to provide the Service to you.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                <strong>Feedback:</strong> If you provide suggestions, feedback, or ideas about the Service, you grant NexusCare a royalty-free, worldwide, perpetual license to use that feedback without obligation or compensation to you.
              </p>
            </section>

            <section id="confidentiality" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Each party agrees to keep confidential any non-public information disclosed by the other party in connection with the Service that is designated as confidential or that reasonably should be understood to be confidential given the context of disclosure ("Confidential Information").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                NexusCare will not use your Confidential Information except to provide the Service, and will not disclose it to third parties without your consent except as required by law or as permitted under the BAA. You will not disclose NexusCare's non-public product roadmap, pricing, or technical architecture without our consent.
              </p>
            </section>

            <section id="disclaimers" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                NEXUSCARE DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. HEALTHCARE ORGANIZATIONS ARE SOLELY RESPONSIBLE FOR CLINICAL DECISIONS, COMPLIANCE OBLIGATIONS, AND PATIENT CARE OUTCOMES. NEXUSCARE IS A COORDINATION TOOL AND DOES NOT REPLACE PROFESSIONAL CLINICAL OR LEGAL JUDGMENT.
              </p>
            </section>

            <section id="liability" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEXUSCARE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, BUSINESS INTERRUPTION, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF NEXUSCARE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                IN NO EVENT SHALL NEXUSCARE'S TOTAL CUMULATIVE LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE EXCEED THE GREATER OF (A) THE TOTAL FEES PAID BY YOU TO NEXUSCARE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM OR (B) ONE HUNDRED DOLLARS ($100).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability, so the above limitations may not apply to you.
              </p>
            </section>

            <section id="indemnification" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless NexusCare and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses (including reasonable attorneys' fees) arising from: (a) your use of the Service in violation of these Terms; (b) your violation of any applicable law or regulation, including HIPAA; (c) your organization's data or content; or (d) any dispute between you and another user or third party.
              </p>
            </section>

            <section id="termination" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate your use of the Service upon written notice. NexusCare may immediately suspend or terminate access if you materially breach these Terms, fail to pay applicable fees, or engage in conduct that poses a security or legal risk to NexusCare or other users.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Upon termination, your right to use the Service ceases immediately. Provisions of these Terms that by their nature should survive termination shall survive, including intellectual property, confidentiality, disclaimers, limitation of liability, and governing law.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You may request export of your organization's data within 30 days of termination. After 90 days, NexusCare may permanently delete your data in accordance with our data retention policy and applicable law.
              </p>
            </section>

            <section id="governing-law" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms or the Service shall be resolved exclusively in the state or federal courts located in Delaware, and you consent to personal jurisdiction in such courts.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Notwithstanding the foregoing, NexusCare may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent irreparable harm.
              </p>
            </section>

            <section id="changes" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                NexusCare reserves the right to modify these Terms at any time. When we make material changes, we will update the effective date and provide reasonable notice via email or an in-platform notification. Your continued use of the Service after the updated Terms take effect constitutes your acceptance of the revised Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                If you do not agree to the updated Terms, you must stop using the Service and notify us of your intent to terminate your account.
              </p>
            </section>

            <section id="contact" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms or wish to report a violation, please contact us:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-card border border-border">
                <p className="font-semibold text-foreground">NexusCare</p>
                <p className="text-muted-foreground text-sm mt-1">Email: <a href="mailto:hello@nexuscare.io" className="text-accent hover:underline">hello@nexuscare.io</a></p>
                <p className="text-muted-foreground text-sm">United States</p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
