import type { Metadata } from 'next';
import { AboutPageScreen } from '@/screens/about/AboutPageScreen';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

export const metadata: Metadata = {
  title: 'About Corestack Technologies',
  description: 'Learn about Corestack Technologies — a Philippine-based AI and web development agency building intelligent software, automation, and SaaS solutions.',
  openGraph: {
    title: 'About Corestack Technologies',
    description: 'Philippine-based AI and web development agency building intelligent software and automation.',
    url: `${siteUrl}/about`,
  },
  twitter: {
    title: 'About Corestack Technologies',
    description: 'Philippine-based AI and web development agency building intelligent software and automation.',
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return <AboutPageScreen />;
}
