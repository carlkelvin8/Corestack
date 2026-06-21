import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import { ProjectDetailScreen } from '@/screens/projects/ProjectDetailScreen';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailScreen project={project} />;
}
