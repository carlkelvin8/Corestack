'use client';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  buttonIcon?: string;
  isExternal?: boolean;
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
  buttonIcon = 'arrow_forward',
  isExternal = false,
}: CTASectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  function handleClick(e: React.MouseEvent) {
    if (buttonHref.startsWith('/#')) {
      e.preventDefault();
      const id = buttonHref.replace('/#', '');

      if (pathname === '/') {
        // Already on homepage — scroll directly
        const el = document.getElementById(id);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -80 });
          } else {
            window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
          }
        }
      } else {
        // Store target in sessionStorage, then navigate to home WITHOUT hash
        // This avoids conflicts between browser native hash scroll, Next.js, and Lenis
        sessionStorage.setItem('scrollTarget', id);
        router.push('/');
      }
    }
  }

  const ButtonContent = () => (
    <>
      {buttonText} <span className="material-symbols-outlined text-[20px]">{buttonIcon}</span>
    </>
  );

  const buttonClasses =
    'inline-flex items-center gap-2 bg-primary hover:bg-surface-tint text-on-primary px-8 py-3.5 rounded-full font-body-md font-medium transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md';

  const isHashLink = buttonHref.startsWith('/#');

  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface">
      <ScrollReveal index={0}>
        <div className="max-w-container-max mx-auto glass-card rounded-3xl p-10 md:p-16 text-center border border-primary/10">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            {title}
          </h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg mb-8 max-w-xl mx-auto">
            {description}
          </p>
          {isExternal ? (
            <a href={buttonHref} className={buttonClasses}>
              <ButtonContent />
            </a>
          ) : isHashLink ? (
            <button onClick={handleClick} className={buttonClasses}>
              <ButtonContent />
            </button>
          ) : (
            <Link href={buttonHref} className={buttonClasses}>
              <ButtonContent />
            </Link>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
