import { ScrollReveal } from '@/components/common/ScrollReveal';
import Link from 'next/link';

interface ContactInfoItem {
  label: string;
  value: string;
  icon: string;
}

interface ContactInfoCardsProps {
  contactInfo: ContactInfoItem[];
}

export function ContactInfoCards({ contactInfo }: ContactInfoCardsProps) {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-gray">
      <div className="max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal index={0}>
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/30 h-full">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Contact Information</h3>
              <div className="space-y-4 text-sm">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">{item.icon}</span>
                    <span className="text-on-surface-variant">{item.label}:</span>
                    <span className="text-on-surface font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1}>
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/30 h-full">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Business Hours</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                  <div>
                    <p className="text-on-surface font-semibold">Monday to Friday</p>
                    <p className="text-on-surface-variant">9:00 AM – 6:00 PM GMT+8</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">support_agent</span>
                  <div>
                    <p className="text-on-surface font-semibold">Support Response Time</p>
                    <p className="text-on-surface-variant">24–48 Business Hours</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-surface-tint text-on-primary px-6 py-3 rounded-full font-body-md font-medium transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md text-sm">
                  Start a Project <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
