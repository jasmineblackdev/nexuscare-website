import { SiteNav } from "@/components/marketing/SiteNav";
import { HeroSection } from "@/components/marketing/HeroSection";
import { AboutSection } from "@/components/marketing/AboutSection";
import { AudienceSection } from "@/components/marketing/AudienceSection";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { FeaturesSection } from "@/components/marketing/FeaturesSection";
import { OutcomesSection } from "@/components/marketing/OutcomesSection";
import { GetStartedSection } from "@/components/marketing/GetStartedSection";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SEO, organizationSchema, websiteSchema, softwareApplicationSchema, faqSchema } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="NexusCare — Healthcare Referral Coordination Platform"
        description="NexusCare streamlines referral intake, insurance authorization, and admissions coordination for senior living operators and healthcare teams. Free pilot available."
        canonical="https://nexuscare.io"
        schema={[organizationSchema, websiteSchema, softwareApplicationSchema, faqSchema]}
      />
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <AudienceSection />
        <HowItWorksSection />
        <FeaturesSection />
        <OutcomesSection />
        <GetStartedSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
