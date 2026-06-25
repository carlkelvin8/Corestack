import type { Metadata } from 'next';
import { DocumentationScreen } from '@/screens/documentation/DocumentationScreen';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

export const metadata: Metadata = {
  title: 'Documentation — Corestack Technologies',
  description: 'Project lifecycle documentation, technology stack, and contact information for Corestack Technologies clients.',
  openGraph: {
    title: 'Documentation — Corestack Technologies',
    description: 'Project lifecycle documentation, technology stack, and client resources.',
    url: `${siteUrl}/documentation`,
  },
  twitter: {
    title: 'Documentation — Corestack Technologies',
    description: 'Project lifecycle documentation, technology stack, and client resources.',
  },
  alternates: {
    canonical: `${siteUrl}/documentation`,
  },
};

export default function DocumentationPage() {
  return <DocumentationScreen />;
}
