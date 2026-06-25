import type { MetadataRoute } from 'next';
import { projectsData } from '@/data/projectsData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    ...projectsData.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${siteUrl}/help-center`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${siteUrl}/documentation`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${siteUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteUrl}/security`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteUrl}/status`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.4 },
  ];

  return staticPages;
}
