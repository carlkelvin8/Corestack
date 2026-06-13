import { PageHeader } from '@/components/layout/PageHeader';
import { CTASection } from '@/components/layout/CTASection';
import { LegalContent } from '@/components/legal/LegalContent';
import { privacyPolicySections as sections } from '@/data/legalData';

export function PrivacyPolicyScreen() {
  return (
    <div className="pt-20">
      <PageHeader 
        label="Legal"
        title="Privacy Policy"
        description="How Corestack Technologies collects, uses, and protects your information."
      />
      <div className="text-center py-4 bg-surface-bright">
        <p className="text-sm text-on-surface-variant">Last updated: June 2026</p>
      </div>
      <LegalContent sections={sections} />
      <CTASection 
        title="Questions About Your Privacy?"
        description="Contact our team and we will respond within 24–48 business hours."
        buttonText="Contact Us"
        buttonHref="/#contact"
      />
    </div>
  );
}
