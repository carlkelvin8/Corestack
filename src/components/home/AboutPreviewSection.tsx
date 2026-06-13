'use client';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import Link from 'next/link';
import { homeServicesList as services } from '@/data/homeData';

export function AboutPreviewSection() {
  return (
    <section id="about" className="py-24 bg-surface-gray px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary-fixed/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-container-max mx-auto">
        {/* Label */}
        <ScrollReveal index={0}>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-3 block text-center">
            About Corestack Technologies
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal index={1}>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface text-center max-w-3xl mx-auto mb-6">
            Building Intelligent Software for the Future
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal index={2}>
          <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-2xl mx-auto mb-16">
            Corestack Technologies is a Philippine-based AI Agency specializing in Artificial Intelligence, AI Agents, Software Development, SaaS Platforms, Business Automation, Mobile Applications, and Digital Transformation Solutions — helping businesses improve efficiency, automate processes, and accelerate growth.
          </p>
        </ScrollReveal>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <ScrollReveal index={0}>
            <div className="glass-card p-8 rounded-2xl border border-primary/10 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Our Mission</h3>
              <p className="text-on-surface-variant text-body-md">
                To empower businesses through innovative artificial intelligence, software development, and automation solutions that enhance productivity, efficiency, and long-term growth.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal index={1}>
            <div className="glass-card p-8 rounded-2xl border border-primary/10 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/30 rounded-full blur-2xl" />
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-5">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Our Vision</h3>
              <p className="text-on-surface-variant text-body-md">
                To become one of the leading technology and AI solution providers in Southeast Asia by building impactful digital products that transform industries and improve lives.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Services Badges */}
        <ScrollReveal index={2}>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {services.map((service) => (
              <span
                key={service}
                className="px-4 py-2 bg-surface rounded-full border border-outline-variant/40 text-on-surface-variant text-sm font-medium hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal index={3}>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary hover:bg-surface-tint text-on-primary px-8 py-3 rounded-full font-body-md font-medium transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md"
            >
              Learn More About Us
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
