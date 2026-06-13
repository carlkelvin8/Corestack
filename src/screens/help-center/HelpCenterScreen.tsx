import { PageHeader } from '@/components/layout/PageHeader';
import { CTASection } from '@/components/layout/CTASection';
import { FAQAccordion } from '@/components/help-center/FAQAccordion';
import { faqs } from '@/data/supportData';

export function HelpCenterScreen() {
  return (
    <div className="pt-20">
      <PageHeader 
        label="Support"
        title="Help Center"
        description="Frequently Asked Questions about Corestack Technologies and our services."
      />
      <FAQAccordion faqs={faqs} />
      <CTASection 
        title="Still Have Questions?"
        description="Our team is ready to help. Reach out and we'll get back to you within 24–48 business hours."
        buttonText="Contact Us"
        buttonHref="/#contact"
      />
    </div>
  );
}
