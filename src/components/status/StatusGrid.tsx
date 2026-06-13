import { ScrollReveal } from '@/components/common/ScrollReveal';

interface StatusService {
  name: string;
  status: string;
}

interface StatusGridProps {
  services: StatusService[];
}

export function StatusGrid({ services }: StatusGridProps) {
  return (
    <section className="py-10 px-margin-mobile md:px-margin-desktop bg-surface-gray">
      <div className="max-w-container-max mx-auto">
        {/* Overall Banner */}
        <ScrollReveal index={0}>
          <div className="glass-card rounded-3xl p-8 flex items-center gap-6 border border-success-green/30 mb-10">
            <div className="w-16 h-16 rounded-full bg-success-green/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-success-green text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">All Systems Operational</h2>
              <p className="text-on-surface-variant text-sm mt-1">All services are running normally.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Service Table */}
        <ScrollReveal index={1}>
          <div className="glass-card rounded-3xl overflow-hidden border border-outline-variant/30">
            <div className="px-8 py-5 border-b border-outline-variant/30 grid grid-cols-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              <span>Service</span>
              <span>Status</span>
            </div>
            {services.map((svc) => (
              <div key={svc.name} className="px-8 py-5 border-b border-outline-variant/20 last:border-0 grid grid-cols-2 items-center">
                <span className="font-body-md text-on-surface font-medium">{svc.name}</span>
                <span className="inline-flex items-center gap-2 text-success-green font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-success-green inline-block" />
                  {svc.status}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
