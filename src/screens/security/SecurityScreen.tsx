import { PageHeader } from '@/components/layout/PageHeader';
import { CTASection } from '@/components/layout/CTASection';
import { SecurityExtraSections } from '@/components/legal/SecurityExtraSections';
import { securityPrinciples as principles, securityInfrastructure as infrastructure, appSecurity, incidentSteps } from '@/data/legalData';

export function SecurityScreen() {
  return (
    <div className="pt-20">
      <PageHeader 
        label="Trust & Safety"
        title="Security Policy"
        description="Security is integrated into every stage of development at Corestack Technologies."
      />
      <SecurityExtraSections 
        principles={principles}
        infrastructure={infrastructure}
        appSecurity={appSecurity}
        incidentSteps={incidentSteps}
      />
      <CTASection 
        title="Have a Security Concern?"
        description="If you discover a vulnerability or have a security concern, please contact us immediately."
        buttonText="Report an Issue"
        buttonHref="mailto:corestacktechph@gmail.com"
        buttonIcon="mail"
      />
    </div>
  );
}
