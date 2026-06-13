import { ScrollReveal } from '@/components/common/ScrollReveal';

interface Phase {
  number: string;
  title: string;
  desc: string;
  items: string[];
}

interface ProjectLifecycleProps {
  phases: Phase[];
}

export function ProjectLifecycle({ phases }: ProjectLifecycleProps) {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-gray">
      <div className="max-w-container-max mx-auto">
        <ScrollReveal index={0}>
          <div className="text-center mb-14">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-3 block">Process</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Project Lifecycle</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.number} index={i % 3}>
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-primary/20 font-display-lg">{phase.number}</span>
                  <h3 className="font-headline-md text-on-surface font-semibold">{phase.title}</h3>
                </div>
                <p className="text-on-surface-variant text-sm">{phase.desc}</p>
                <ul className="space-y-2 mt-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-on-surface text-sm">
                      <span className="material-symbols-outlined text-primary text-[16px]">arrow_right</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
