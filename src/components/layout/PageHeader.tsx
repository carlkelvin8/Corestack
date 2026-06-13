import { ScrollReveal } from '@/components/common/ScrollReveal';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  subtitle?: string;
}

export function PageHeader({ label, title, description, subtitle }: PageHeaderProps) {
  return (
    <section className="relative py-24 px-margin-mobile md:px-margin-desktop bg-surface-bright overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] -z-10" />
      <div className="max-w-container-max mx-auto text-center">
        <ScrollReveal index={0}>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-4 block">
            {label}
          </span>
        </ScrollReveal>
        <ScrollReveal index={1}>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-3xl mx-auto">
            {title}
          </h1>
        </ScrollReveal>
        {(description || subtitle) && (
          <ScrollReveal index={2}>
            {description && (
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                {description}
              </p>
            )}
            {subtitle && (
              <p className="text-sm text-on-surface-variant mt-4">
                {subtitle}
              </p>
            )}
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
