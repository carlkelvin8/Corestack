import { ScrollReveal } from '@/components/ScrollReveal';

export function ServicesScreen() {
  return (
    <section id="services" className="py-24 bg-surface-gray px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2 block">Our Expertise</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Comprehensive Tech Capabilities</h2>
          </div>
          <a href="#contact" className="text-primary font-medium hover:underline flex items-center gap-1">
            Discuss your project <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Service 1: Large */}
          <ScrollReveal index={0} className="glass-card rounded-2xl p-8 flex flex-col justify-between group cursor-pointer lg:col-span-2 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform translate-x-1/4 translate-y-1/4">
              <span className="material-symbols-outlined text-[200px]">smart_toy</span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4 z-10">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <div className="z-10">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">AI Automation</h3>
              <p className="text-on-surface-variant text-body-md max-w-md">Custom AI models and intelligent bots designed to handle customer service, data entry, and predictive maintenance autonomously.</p>
            </div>
          </ScrollReveal>

          {/* Service 2 */}
          <ScrollReveal index={1} className="glass-card rounded-2xl p-8 flex flex-col justify-between group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">cloud</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Cloud & Tech</h3>
              <p className="text-on-surface-variant text-body-md">Secure, scalable cloud migration and infrastructure management tailored for high-availability enterprise needs.</p>
            </div>
          </ScrollReveal>

          {/* Service 3 */}
          <ScrollReveal index={2} className="glass-card rounded-2xl p-8 flex flex-col justify-between group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Digital Marketing</h3>
              <p className="text-on-surface-variant text-body-md">Data-driven marketing strategies leveraging analytics to maximize ROI and pinpoint target demographics.</p>
            </div>
          </ScrollReveal>

          {/* Service 4 */}
          <ScrollReveal index={3} className="glass-card rounded-2xl p-8 flex flex-col justify-between group cursor-pointer lg:col-span-2 relative overflow-hidden">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4 z-10">
              <span className="material-symbols-outlined">model_training</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Process Optimization</h3>
              <p className="text-on-surface-variant text-body-md">End-to-end operational auditing and restructuring using Lean principles and modern software tools.</p>
            </div>
          </ScrollReveal>

          {/* Service 5 & 6 combo in one larger block */}
          <ScrollReveal index={4} className="glass-card rounded-2xl p-0 flex flex-col md:flex-row lg:col-span-3 overflow-hidden group">
            <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">code</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Web Development</h3>
                <p className="text-on-surface-variant text-body-md">High-performance, accessible, and secure web applications built on modern JavaScript frameworks.</p>
              </div>
            </div>
            
            <div className="flex-1 p-8 flex flex-col justify-between bg-surface-bright/50">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Data Insights</h3>
                <p className="text-on-surface-variant text-body-md">Transform raw data into actionable intelligence with interactive dashboards and real-time reporting.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
