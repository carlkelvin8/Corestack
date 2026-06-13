import { ScrollReveal } from '@/components/common/ScrollReveal';

interface CoreServicesGridProps {
  services: string[];
}

export function CoreServicesGrid({ services }: CoreServicesGridProps) {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-gray">
      <div className="max-w-container-max mx-auto text-center">
        <ScrollReveal index={0}>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-3 block">What We Do</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-12">Core Services</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={i} index={i % 3}>
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 text-left h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                </div>
                <span className="font-body-md text-on-surface font-medium">{service}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
