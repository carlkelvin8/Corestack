import { ScrollReveal } from '@/components/common/ScrollReveal';

interface LegalSection {
  title: string;
  content: string;
}

interface LegalContentProps {
  sections: LegalSection[];
}

export function LegalContent({ sections }: LegalContentProps) {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-gray">
      <div className="max-w-3xl mx-auto space-y-8">
        {sections.map((section, i) => (
          <ScrollReveal key={section.title} index={i % 3}>
            <div className="glass-card p-8 rounded-2xl border border-outline-variant/30">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">{section.title}</h2>
              <p className="text-on-surface-variant font-body-md text-body-md whitespace-pre-line">{section.content}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
