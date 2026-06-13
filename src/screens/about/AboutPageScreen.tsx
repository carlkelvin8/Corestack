import { PageHeader } from '@/components/layout/PageHeader';
import { CTASection } from '@/components/layout/CTASection';
import { CompanyOverview } from '@/components/about/CompanyOverview';
import { MissionVisionCards } from '@/components/about/MissionVisionCards';
import { CoreServicesGrid } from '@/components/about/CoreServicesGrid';
import { coreServices, companyStats as stats } from '@/data/aboutData';

export function AboutPageScreen() {
  return (
    <div className="pt-20">
      <PageHeader 
        label="About Us"
        title="Building Intelligent Software for the Future"
        description="Founded in 2026, Corestack Technologies is a Philippine-based AI Agency dedicated to transforming how businesses operate through intelligent technology."
      />
      <CompanyOverview stats={stats} />
      <MissionVisionCards />
      <CoreServicesGrid services={coreServices} />
      <CTASection 
        title="Ready to Work With Us?"
        description="Let's build something impactful together. Reach out to start the conversation."
        buttonText="Contact Us"
        buttonHref="/#contact"
      />
    </div>
  );
}
