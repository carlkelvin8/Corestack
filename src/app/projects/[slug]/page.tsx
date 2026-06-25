import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import { ProjectDetailScreen } from '@/screens/projects/ProjectDetailScreen';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

  return {
    title: `${project.title} — CoreStack Projects`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — CoreStack Projects`,
      description: project.shortDescription,
      images: [{ url: `${siteUrl}${project.image}`, alt: project.title }],
      url: `${siteUrl}/projects/${project.slug}`,
    },
    twitter: {
      title: `${project.title} — CoreStack Projects`,
      description: project.shortDescription,
      images: [`${siteUrl}${project.image}`],
    },
    alternates: {
      canonical: `${siteUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailScreen project={project} />;
}
