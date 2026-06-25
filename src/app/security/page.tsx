import type { Metadata } from 'next';
import { SecurityScreen } from '@/screens/security/SecurityScreen';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

export const metadata: Metadata = {
  title: 'Security Policy — Corestack Technologies',
  description: 'Learn how Corestack Technologies protects client data, intellectual property, and digital assets.',
  openGraph: {
    title: 'Security Policy — Corestack Technologies',
    description: 'How Corestack Technologies protects client data, intellectual property, and digital assets.',
    url: `${siteUrl}/security`,
  },
  twitter: {
    title: 'Security Policy — Corestack Technologies',
    description: 'How Corestack Technologies protects client data, intellectual property, and digital assets.',
  },
  alternates: {
    canonical: `${siteUrl}/security`,
  },
};

export default function SecurityPage() {
  return <SecurityScreen />;
}
