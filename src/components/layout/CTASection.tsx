import { ScrollReveal } from '@/components/common/ScrollReveal';
import Link from 'next/link';

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
  const ButtonContent = () => (
    <>
      {buttonText} <span className="material-symbols-outlined text-[20px]">{buttonIcon}</span>
    </>
  );

  const buttonClasses =
    'inline-flex items-center gap-2 bg-primary hover:bg-surface-tint text-on-primary px-8 py-3.5 rounded-full font-body-md font-medium transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md';

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
