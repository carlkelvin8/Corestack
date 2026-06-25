import type { Metadata } from 'next';
import { TermsOfServiceScreen } from '@/screens/terms-of-service/TermsOfServiceScreen';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

export const metadata: Metadata = {
  title: 'Terms of Service — Corestack Technologies',
  description: 'Read the Corestack Technologies Terms of Service for our software development, AI, SaaS, and consulting services.',
  openGraph: {
    title: 'Terms of Service — Corestack Technologies',
    description: 'Corestack Technologies Terms of Service for software development, AI, and consulting services.',
    url: `${siteUrl}/terms-of-service`,
  },
  twitter: {
    title: 'Terms of Service — Corestack Technologies',
    description: 'Corestack Technologies Terms of Service for software development, AI, and consulting services.',
  },
  alternates: {
    canonical: `${siteUrl}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceScreen />;
}
