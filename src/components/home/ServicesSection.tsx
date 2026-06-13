import { ScrollReveal } from '@/components/common/ScrollReveal';
import { servicesFeaturesData as services } from '@/data/homeData';

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2 block">Our Expertise</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Comprehensive Technical Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Feature 1 */}
          <ScrollReveal index={0} className="lg:col-span-2 relative overflow-hidden glass-card rounded-3xl p-8 md:p-10 border border-outline-variant/30 group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 transition-transform duration-700 group-hover:scale-150"></div>
             <span className="material-symbols-outlined text-[120px] absolute -right-4 -bottom-8 text-primary/5 -rotate-12 transition-transform duration-700 group-hover:-rotate-0">
               {services[0].icon}
             </span>
             <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[28px]">{services[0].icon}</span>
             </div>
             <h3 className="font-headline-md text-2xl font-semibold text-on-surface mb-4">{services[0].title}</h3>
             <p className="text-on-surface-variant font-body-md text-base max-w-md">
               {services[0].description}
             </p>
          </ScrollReveal>

          {/* Feature 2 */}
          <ScrollReveal index={1} className="glass-card rounded-3xl p-8 border border-outline-variant/30 group hover:border-primary/30 transition-colors duration-300">
             <div className="w-12 h-12 rounded-2xl bg-surface-variant/50 flex items-center justify-center text-on-surface-variant mb-6 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-[24px]">{services[1].icon}</span>
             </div>
             <h3 className="font-headline-md text-xl font-semibold text-on-surface mb-3">{services[1].title}</h3>
             <p className="text-on-surface-variant font-body-md text-sm">
               {services[1].description}
             </p>
          </ScrollReveal>

          {/* Feature 3 */}
          <ScrollReveal index={2} className="glass-card rounded-3xl p-8 border border-outline-variant/30 group hover:border-primary/30 transition-colors duration-300">
             <div className="w-12 h-12 rounded-2xl bg-surface-variant/50 flex items-center justify-center text-on-surface-variant mb-6 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-[24px]">{services[2].icon}</span>
             </div>
             <h3 className="font-headline-md text-xl font-semibold text-on-surface mb-3">{services[2].title}</h3>
             <p className="text-on-surface-variant font-body-md text-sm">
               {services[2].description}
             </p>
          </ScrollReveal>

          {/* Feature 4 */}
          <ScrollReveal index={3} className="lg:col-span-2 relative overflow-hidden glass-card rounded-3xl p-8 md:p-10 border border-outline-variant/30 group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-[80px] -z-10 transition-transform duration-700 group-hover:scale-150"></div>
             <span className="material-symbols-outlined text-[120px] absolute -right-4 -bottom-8 text-secondary-fixed/10 -rotate-12 transition-transform duration-700 group-hover:-rotate-0">
               {services[3].icon}
             </span>
             <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-6">
                <span className="material-symbols-outlined text-[28px]">{services[3].icon}</span>
             </div>
             <h3 className="font-headline-md text-2xl font-semibold text-on-surface mb-4">{services[3].title}</h3>
             <p className="text-on-surface-variant font-body-md text-base max-w-md">
               {services[3].description}
             </p>
          </ScrollReveal>

          {/* Feature 5 & 6 Combo */}
          <ScrollReveal index={4} className="lg:col-span-3 overflow-hidden group">
             <div className="grid md:grid-cols-2 gap-6 h-full">
                <div className="glass-card rounded-3xl p-8 border border-outline-variant/30 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-surface-variant/50 flex items-center justify-center text-on-surface-variant mb-6">
                     <span className="material-symbols-outlined text-[24px]">{services[4].icon}</span>
                  </div>
                  <h3 className="font-headline-md text-xl font-semibold text-on-surface mb-3">{services[4].title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm">
                    {services[4].description}
                  </p>
                </div>
                <div className="glass-card rounded-3xl p-8 border border-outline-variant/30 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-surface-variant/50 flex items-center justify-center text-on-surface-variant mb-6">
                     <span className="material-symbols-outlined text-[24px]">{services[5].icon}</span>
                  </div>
                  <h3 className="font-headline-md text-xl font-semibold text-on-surface mb-3">{services[5].title}</h3>
                  <p className="text-on-surface-variant font-body-md text-sm">
                    {services[5].description}
                  </p>
                </div>
             </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
