import type { Metadata } from 'next';
import { StatusScreen } from '@/screens/status/StatusScreen';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

export const metadata: Metadata = {
  title: 'System Status — Corestack Technologies',
  description: 'Current platform status and service availability for Corestack Technologies.',
  openGraph: {
    title: 'System Status — Corestack Technologies',
    description: 'Current platform status and service availability for Corestack Technologies.',
    url: `${siteUrl}/status`,
  },
  twitter: {
    title: 'System Status — Corestack Technologies',
    description: 'Current platform status and service availability for Corestack Technologies.',
  },
  alternates: {
    canonical: `${siteUrl}/status`,
  },
};

export default function StatusPage() {
  return <StatusScreen />;
}
