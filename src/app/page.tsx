import type { Metadata } from 'next';
import { HomeScreen } from '@/screens/home/HomeScreen';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

export const metadata: Metadata = {
  title: "CoreStack | AI & Web Development Agency Philippines",
  description: "Top web development and AI agency in Philippines. Expert in AI agents, custom software, SaaS, and automation. We build intelligent digital solutions for growing businesses.",
  openGraph: {
    title: "CoreStack | AI & Web Development Agency Philippines",
    description: "Top web development and AI agency in Philippines. Expert in AI agents, custom software, SaaS, and automation.",
    url: siteUrl,
  },
  twitter: {
    title: "CoreStack | AI & Web Development Agency Philippines",
    description: "Top web development and AI agency in Philippines. Expert in AI agents, custom software, SaaS, and automation.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return <HomeScreen />;
}
