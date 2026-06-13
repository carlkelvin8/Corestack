'use client';

import { ScrollReveal } from '@/components/common/ScrollReveal';
import { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <ScrollReveal index={index}>
      <div className="glass-card rounded-2xl border border-outline-variant/30 overflow-hidden">
        <button
          className="w-full flex items-center justify-between p-6 text-left gap-4"
          onClick={() => setOpen(!open)}
        >
          <span className="font-body-md font-semibold text-on-surface">{q}</span>
          <span className={`material-symbols-outlined text-primary shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </button>
        {open && (
          <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant/20 pt-4">
            {a}
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-gray">
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} q={faq.q} a={faq.a} index={i % 4} />
        ))}
      </div>
    </section>
  );
}
