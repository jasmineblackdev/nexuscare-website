import { SiteNav } from "@/components/marketing/SiteNav";
import { HeroSection } from "@/components/marketing/HeroSection";
import { AboutSection } from "@/components/marketing/AboutSection";
import { AudienceSection } from "@/components/marketing/AudienceSection";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { FeaturesSection } from "@/components/marketing/FeaturesSection";
import { OutcomesSection } from "@/components/marketing/OutcomesSection";
import { ContactSection } from "@/components/marketing/ContactSection";
import { SiteFooter } from "@/components/marketing/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <AudienceSection />
        <HowItWorksSection />
        <FeaturesSection />
        <OutcomesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
