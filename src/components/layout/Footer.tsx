'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLenis } from 'lenis/react';

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  function scrollToSection(id: string) {
    if (pathname !== '/') {
      sessionStorage.setItem('scrollTarget', id);
      router.push('/');
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (pathname === href) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  return (
    <footer className="w-full bg-gradient-to-b from-secondary-fixed to-secondary-fixed/95 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-8">
        {/* Top row: Map + Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 h-[280px] md:h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.151277377195!2d121.02469827511035!3d14.816765485695573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af0022aba161%3A0xba7bfb84b030b1e0!2sCorestack%20Technologies!5e0!3m2!1sen!2sph!4v1782355596466!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Corestack Technologies Location"
              className="rounded-2xl"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="font-headline-md text-headline-md font-bold text-on-secondary-fixed mb-2">Get in Touch</h3>
              <p className="text-on-secondary-fixed-variant text-sm font-body-md text-body-md">
                Have a project in mind? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <div>
                  <p className="font-label-sm text-label-sm text-on-secondary-fixed font-semibold">Location</p>
                  <p className="text-sm text-on-secondary-fixed-variant">SJDM Bulacan, Philippines</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                <div>
                  <p className="font-label-sm text-label-sm text-on-secondary-fixed font-semibold">Email</p>
                  <a href="mailto:corestacktechnologiesph@gmail.com" className="text-sm text-on-secondary-fixed-variant hover:text-primary transition-colors">
                    corestacktechnologiesph@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                <div>
                  <p className="font-label-sm text-label-sm text-on-secondary-fixed font-semibold">Hours</p>
                  <p className="text-sm text-on-secondary-fixed-variant">Mon – Fri, 8:00 AM – 6:00 PM PHT</p>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-fit bg-primary hover:bg-surface-tint text-on-primary px-6 py-3 rounded-full font-body-md font-medium transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Send us a message
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-outline-variant/20 mb-10" />

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-5">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group w-fit">
              <Image
                src="/images/Corestack_Logo.png"
                alt="CoreStack Logo"
                width={120}
                height={32}
                className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="font-headline-md text-headline-md font-bold text-on-secondary-fixed">CoreStack</span>
            </button>
            <p className="text-on-secondary-fixed-variant text-sm max-w-xs font-body-md text-body-md leading-relaxed">
              Empowering businesses with intelligent AI solutions, automation, and scalable software built in the Philippines.
            </p>
            {/* Social placeholders */}
            <div className="flex items-center gap-3 mt-1">
              <span className="w-9 h-9 rounded-full bg-surface-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">globe</span>
              </span>
              <span className="w-9 h-9 rounded-full bg-surface-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">alternate_email</span>
              </span>
              <span className="w-9 h-9 rounded-full bg-surface-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </span>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-fixed/60 font-semibold">Company</h4>
            <button
              onClick={() => scrollToSection('about')}
              className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer text-left w-fit"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer text-left w-fit"
            >
              Contact
            </button>
            <Link href="/help-center" onClick={(e) => handleLinkClick(e, '/help-center')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors w-fit">Help Center</Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-fixed/60 font-semibold">Services</h4>
            <Link href="/documentation" onClick={(e) => handleLinkClick(e, '/documentation')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors w-fit">Documentation</Link>
            <Link href="/status" onClick={(e) => handleLinkClick(e, '/status')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors w-fit">System Status</Link>
            <Link href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors w-fit">Our Process</Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-fixed/60 font-semibold">Legal</h4>
            <Link href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors w-fit">Privacy Policy</Link>
            <Link href="/terms-of-service" onClick={(e) => handleLinkClick(e, '/terms-of-service')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors w-fit">Terms of Service</Link>
            <Link href="/security" onClick={(e) => handleLinkClick(e, '/security')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors w-fit">Security</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline-variant/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-secondary-fixed-variant/60 font-body-md text-body-md">
            © 2026 Corestack Technologies. All rights reserved.
          </p>
          <p className="text-xs text-on-secondary-fixed-variant/40 font-body-md text-body-md">
            Built with passion in the Philippines 🇵🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
