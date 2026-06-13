import { ScrollReveal } from '@/components/common/ScrollReveal';

export function MissionVisionCards() {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto">
        <ScrollReveal index={0}>
          <div className="text-center mb-14">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-3 block">Our Direction</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Mission & Vision</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal index={0}>
            <div className="glass-card p-10 rounded-3xl border border-primary/10 h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Our Mission</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                To empower businesses through innovative artificial intelligence, software development, and automation solutions that enhance productivity, efficiency, and long-term growth.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1}>
            <div className="glass-card p-10 rounded-3xl border border-primary/10 h-full">
              <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-6">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Our Vision</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                To become one of the leading technology and AI solution providers in Southeast Asia by building impactful digital products that transform industries and improve lives.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
