'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useScroll } from '@/hooks/useScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useLenis } from 'lenis/react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const isScrolled = useScroll(10);
  const activeSection = useActiveSection(navItems.map(item => item.id));
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToSection(id: string) {
    setMenuOpen(false);
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

  const isActive = (id: string) =>
    pathname === '/' &&
    (activeSection === id || (activeSection === '' && id === 'home'));

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 glass-nav transition-all duration-300 ${isScrolled ? 'shadow-sm bg-surface-bright/95' : 'bg-surface-bright/85'}`}>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group"
            aria-label="Go to Home"
          >
            <Image
              src="/images/Corestack_Logo.png"
              alt="CoreStack Logo"
              width={120}
              height={32}
              className="h-8 w-auto rounded-sm group-hover:opacity-80 transition-opacity"
            />
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">CoreStack</span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`pb-1 transition-all duration-300 hover:opacity-80 ${isActive(item.id) ? 'text-primary font-semibold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-surface-tint text-on-primary px-6 py-2.5 rounded-full font-body-md font-medium transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-on-surface p-2 rounded-lg hover:bg-surface-variant transition-colors"
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="bg-surface-bright/98 border-t border-outline-variant/20 px-margin-mobile py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive(item.id)
                    ? 'text-primary bg-primary/8 font-semibold'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-variant'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 mt-1 border-t border-outline-variant/20">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary hover:bg-surface-tint text-on-primary px-6 py-3 rounded-full font-body-md font-medium transition-all duration-300 active:scale-95 shadow-sm"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
