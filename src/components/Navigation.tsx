'use client';

import { useScroll } from '@/hooks/useScroll';
import { useActiveSection } from '@/hooks/useActiveSection';

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

  return (
    <nav className={`fixed top-0 w-full z-50 glass-nav transition-all duration-300 ${isScrolled ? 'shadow-sm bg-surface-bright/95' : 'bg-surface-bright/85'}`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">
        
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src="/images/Corestack_Logo.png" 
            alt="CoreStack Logo" 
            className="h-8 w-auto rounded-sm group-hover:opacity-80 transition-opacity"
          />
          <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">CoreStack</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`pb-1 transition-all duration-300 hover:opacity-80 ${activeSection === item.id || (activeSection === '' && item.id === 'home') ? 'text-primary font-semibold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a href="#contact" className="bg-primary hover:bg-surface-tint text-on-primary px-6 py-2.5 rounded-full font-body-md font-medium transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md">
            Contact Us
          </a>
        </div>

        <button className="md:hidden text-on-surface p-2 rounded-lg hover:bg-surface-variant transition-colors" aria-label="Toggle Menu">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
            menu
          </span>
        </button>
      </div>
    </nav>
  );
}
