import { PageHeader } from '@/components/layout/PageHeader';
import { CTASection } from '@/components/layout/CTASection';
import { LegalContent } from '@/components/legal/LegalContent';
import { termsOfServiceSections as sections } from '@/data/legalData';

export function TermsOfServiceScreen() {
  return (
    <div className="pt-20">
      <PageHeader 
        label="Legal"
        title="Terms of Service"
        description="The terms and conditions governing the use of Corestack Technologies services."
      />
      <div className="text-center py-4 bg-surface-bright">
        <p className="text-sm text-on-surface-variant">Last updated: June 2026</p>
      </div>
      <LegalContent sections={sections} />
      <CTASection 
        title="Questions About Our Terms?"
        description="Contact our team and we will respond within 24–48 business hours."
        buttonText="Contact Us"
        buttonHref="/#contact"
      />
    </div>
  );
}
