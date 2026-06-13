import { ScrollReveal } from '@/components/ScrollReveal';

export function ProcessScreen() {
  return (
    <section id="process" className="py-24 bg-surface px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlN2U4ZjIiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2 block">Methodology</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">How We Work</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-outline-variant/30 -z-10 w-3/4 mx-auto"></div>

          {/* Step 1 */}
          <ScrollReveal index={0} className="text-center relative">
            <div className="w-24 h-24 mx-auto rounded-2xl glass-card flex items-center justify-center text-primary mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]">search</span>
            </div>
            <h3 className="font-headline-md text-xl text-on-surface mb-2">1. Discover</h3>
            <p className="text-on-surface-variant text-sm">We analyze your current systems, data structures, and business goals.</p>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal index={1} className="text-center relative">
            <div className="w-24 h-24 mx-auto rounded-2xl glass-card flex items-center justify-center text-primary mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]">architecture</span>
            </div>
            <h3 className="font-headline-md text-xl text-on-surface mb-2">2. Plan</h3>
            <p className="text-on-surface-variant text-sm">Developing a strategic roadmap and architectural blueprint for implementation.</p>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal index={2} className="text-center relative">
            <div className="w-24 h-24 mx-auto rounded-2xl glass-card flex items-center justify-center text-primary mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]">terminal</span>
            </div>
            <h3 className="font-headline-md text-xl text-on-surface mb-2">3. Build</h3>
            <p className="text-on-surface-variant text-sm">Agile development, seamless integration, and rigorous quality assurance testing.</p>
          </ScrollReveal>

          {/* Step 4 */}
          <ScrollReveal index={3} className="text-center relative">
            <div className="w-24 h-24 mx-auto rounded-2xl glass-card flex items-center justify-center text-primary mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]">trending_up</span>
            </div>
            <h3 className="font-headline-md text-xl text-on-surface mb-2">4. Improve</h3>
            <p className="text-on-surface-variant text-sm">Continuous monitoring, optimization, and scaling as your business evolves.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
