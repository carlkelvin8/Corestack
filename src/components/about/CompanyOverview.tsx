import { ScrollReveal } from '@/components/common/ScrollReveal';

interface CompanyOverviewProps {
  stats: { label: string; value: string }[];
}

export function CompanyOverview({ stats }: CompanyOverviewProps) {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-gray">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal index={0}>
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-3 block">Who We Are</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
              A Technology Partner Built for Impact
            </h2>
            <div className="space-y-4 text-on-surface-variant font-body-md text-body-md">
              <p>
                Corestack Technologies specializes in Artificial Intelligence, AI Agents, Software Development, SaaS Platforms, Business Automation, Mobile Applications, and Digital Transformation Solutions.
              </p>
              <p>
                We help startups, enterprises, educational institutions, and growing businesses leverage modern technology to improve efficiency, automate repetitive processes, reduce operational costs, and accelerate growth through intelligent software solutions.
              </p>
              <p>
                Our mission is to bridge the gap between innovative ideas and scalable technology by delivering high-quality, secure, and future-ready digital products.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal index={1}>
          <div className="glass-card p-10 rounded-3xl border border-primary/10">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-surface/60 rounded-2xl">
                  <p className="font-headline-lg text-2xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-on-surface-variant text-sm font-label-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
