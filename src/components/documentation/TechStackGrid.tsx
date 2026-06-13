import { ScrollReveal } from '@/components/common/ScrollReveal';

interface TechStackItem {
  category: string;
  icon: string;
  items: string[];
}

interface TechStackGridProps {
  techStack: TechStackItem[];
}

export function TechStackGrid({ techStack }: TechStackGridProps) {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto">
        <ScrollReveal index={0}>
          <div className="text-center mb-14">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-3 block">Technologies</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Technology Stack</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stack, i) => (
            <ScrollReveal key={stack.category} index={i % 3}>
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">{stack.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-on-surface font-semibold">{stack.category}</h3>
                </div>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-on-surface-variant text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
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
