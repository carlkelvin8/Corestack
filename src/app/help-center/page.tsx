import type { Metadata } from 'next';
import { HelpCenterScreen } from '@/screens/help-center/HelpCenterScreen';
import { faqs } from '@/data/supportData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

export const metadata: Metadata = {
  title: 'Help Center — Corestack Technologies',
  description: 'Frequently asked questions and support resources for Corestack Technologies. Learn about our AI, web development, and SaaS services.',
  openGraph: {
    title: 'Help Center — Corestack Technologies',
    description: 'Frequently asked questions about our AI, web development, and SaaS services.',
    url: `${siteUrl}/help-center`,
  },
  twitter: {
    title: 'Help Center — Corestack Technologies',
    description: 'Frequently asked questions about our AI, web development, and SaaS services.',
  },
  alternates: {
    canonical: `${siteUrl}/help-center`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function HelpCenterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HelpCenterScreen />
    </>
  );
}
