import { ScrollReveal } from '@/components/common/ScrollReveal';

export function StatusExtraSections() {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-8">
        <ScrollReveal index={0}>
          <div className="glass-card p-8 rounded-3xl border border-primary/10 h-full">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
              <span className="material-symbols-outlined text-[24px]">speed</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Uptime Goal</h3>
            <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
            <p className="text-on-surface-variant text-sm">Annual service availability target for hosted solutions.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal index={1}>
          <div className="glass-card p-8 rounded-3xl border border-outline-variant/30 h-full">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-5">
              <span className="material-symbols-outlined text-[24px]">build</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Scheduled Maintenance</h3>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Maintenance activities may be conducted periodically to improve performance, security, and reliability. Advance notice will be provided whenever possible.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal index={2}>
        <div className="max-w-container-max mx-auto mt-8 glass-card p-8 rounded-3xl border border-outline-variant/30">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Incident Reporting</h3>
          <p className="text-on-surface-variant font-body-md text-body-md mb-4">If you encounter technical issues, please contact us directly:</p>
          <a href="mailto:corestacktechph@gmail.com" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <span className="material-symbols-outlined text-[20px]">mail</span>
            corestacktechph@gmail.com
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
