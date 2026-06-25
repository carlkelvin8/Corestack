import { ScrollReveal } from '@/components/common/ScrollReveal';
import { processStepsData as steps } from '@/data/homeData';

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-surface px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlN2U4ZjIiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2 block">Methodology</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">How We Work</h2>
          <p className="text-on-surface-variant text-body-md mt-4 max-w-2xl mx-auto">
            From discovery to continuous improvement — our proven process ensures every project delivers real results.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-outline-variant/30 -z-10 w-3/4 mx-auto"></div>

          {steps.map((step, index) => (
            <ScrollReveal key={index} index={index} className="text-center relative group">
              <div className="w-24 h-24 mx-auto rounded-2xl glass-card flex items-center justify-center text-primary mb-6 shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all duration-300">
                <span className="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
              </div>
              <h3 className="font-headline-md text-xl text-on-surface mb-2">{step.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{step.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
