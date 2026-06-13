import { ScrollReveal } from '@/components/common/ScrollReveal';

interface SecurityInfrastructureItem {
  title: string;
  desc: string;
  icon: string;
}

interface SecurityExtraSectionsProps {
  principles: string[];
  infrastructure: SecurityInfrastructureItem[];
  appSecurity: string[];
  incidentSteps: string[];
}

export function SecurityExtraSections({
  principles,
  infrastructure,
  appSecurity,
  incidentSteps
}: SecurityExtraSectionsProps) {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-gray">
      <div className="max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal index={0}>
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">Security Commitment</h2>
              <p className="text-on-surface-variant font-body-md text-body-md mb-6">
                At Corestack Technologies, we understand the importance of protecting client information, intellectual property, business operations, and digital assets. Security is not an afterthought — it is built into every decision we make.
              </p>
              <h3 className="font-headline-md text-on-surface mb-4">Security Principles</h3>
              <div className="flex flex-wrap gap-3">
                {principles.map((p) => (
                  <span key={p} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{p}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1}>
            <div className="glass-card p-10 rounded-3xl border border-primary/10 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface">Enterprise-Grade Security Standards</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Infrastructure */}
        <ScrollReveal index={0}>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface text-center mb-10">Infrastructure Security</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {infrastructure.map((item, i) => (
            <ScrollReveal key={item.title} index={i % 2}>
              <div className="glass-card p-8 rounded-2xl border border-outline-variant/30 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="font-headline-md text-on-surface mb-3">{item.title}</h3>
                <p className="text-on-surface-variant text-body-md">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* App Security + Incident */}
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal index={0}>
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/30 h-full">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Application Security</h3>
              <p className="text-on-surface-variant text-sm mb-4">All software solutions undergo:</p>
              <ul className="space-y-3">
                {appSecurity.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    <span className="text-on-surface font-body-md">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1}>
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/30 h-full">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Incident Response</h3>
              <p className="text-on-surface-variant text-sm mb-4">In the event of a security incident, Corestack Technologies will:</p>
              <ol className="space-y-3 list-none">
                {incidentSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-on-surface font-body-md">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
