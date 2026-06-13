'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLenis } from 'lenis/react';

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  function scrollToSection(id: string) {
    if (pathname !== '/') {
      // Store target in sessionStorage and navigate to home WITHOUT hash
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
    <footer className="w-full border-t border-outline-variant/30 bg-secondary-fixed">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
        {/* Brand */}
        <div className="col-span-2 flex flex-col gap-6">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group w-fit">
            <img
              src="/images/Corestack_Logo.png"
              alt="CoreStack Logo"
              className="h-8 w-auto opacity-90"
            />
            <span className="font-headline-md text-headline-md font-bold text-on-secondary-fixed">CoreStack</span>
          </button>
          <p className="text-on-secondary-fixed-variant text-sm max-w-xs font-body-md text-body-md">
            Empowering businesses with intelligent AI solutions, automation, and scalable software built in the Philippines.
          </p>
          <p className="text-on-secondary-fixed-variant text-sm mt-auto font-body-md text-body-md">
            © 2026 Corestack Technologies. All rights reserved.
          </p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed opacity-70">Company</h4>
          <button
            onClick={() => scrollToSection('about')}
            className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer text-left"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer text-left"
          >
            Contact
          </button>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed opacity-70">Legal</h4>
          <Link href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" onClick={(e) => handleLinkClick(e, '/terms-of-service')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="/security" onClick={(e) => handleLinkClick(e, '/security')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors">Security</Link>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed opacity-70">Support</h4>
          <Link href="/help-center" onClick={(e) => handleLinkClick(e, '/help-center')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors">Help Center</Link>
          <Link href="/status" onClick={(e) => handleLinkClick(e, '/status')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors">Status</Link>
          <Link href="/documentation" onClick={(e) => handleLinkClick(e, '/documentation')} className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors">Documentation</Link>
        </div>
      </div>
    </footer>
  );
}
