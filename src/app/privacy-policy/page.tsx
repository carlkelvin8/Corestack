import type { Metadata } from 'next';
import { PrivacyPolicyScreen } from '@/screens/privacy-policy/PrivacyPolicyScreen';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

export const metadata: Metadata = {
  title: 'Privacy Policy — Corestack Technologies',
  description: 'Read the Corestack Technologies Privacy Policy to understand how we collect, use, and protect your information.',
  openGraph: {
    title: 'Privacy Policy — Corestack Technologies',
    description: 'Corestack Technologies Privacy Policy — how we collect, use, and protect your information.',
    url: `${siteUrl}/privacy-policy`,
  },
  twitter: {
    title: 'Privacy Policy — Corestack Technologies',
    description: 'Corestack Technologies Privacy Policy — how we collect, use, and protect your information.',
  },
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyScreen />;
}
