'use client';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { ProjectCarousel } from './ProjectCarousel';

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <ScrollReveal className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-primary/50"></span>
            <span className="text-label-md font-label-md text-primary uppercase tracking-widest">
              Featured Projects
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
            Solutions We&apos;ve Built
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Explore selected digital products, platforms, and system concepts created to solve real business and user experience challenges.
          </p>
        </ScrollReveal>
      </div>

      <div className="w-full relative max-w-container-max mx-auto md:px-margin-desktop">
        <ProjectCarousel />
      </div>
    </section>
  );
}
