import Link from 'next/link';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export function ProjectCTA() {
  return (
    <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
      <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12 relative overflow-hidden bg-surface-container-high border border-white/10 dark:border-outline-variant/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <ScrollReveal className="relative z-10">
          <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface mb-6">
            Interested in a similar project?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Let's discuss how we can build a tailored solution to solve your business challenges and elevate your digital presence.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-lg rounded-full hover:bg-surface-tint transition-colors shadow-lg hover:shadow-primary/25"
          >
            Contact Us
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
