import { Project } from '@/data/projectsData';
import { ProjectHero } from '@/components/projects/ProjectHero';
import { ProjectDetails } from '@/components/projects/ProjectDetails';
import { ProjectFeatureGrid } from '@/components/projects/ProjectFeatureGrid';
import { ProjectCTA } from '@/components/projects/ProjectCTA';

interface ProjectDetailScreenProps {
  project: Project;
}

export function ProjectDetailScreen({ project }: ProjectDetailScreenProps) {
  return (
    <main className="bg-surface min-h-screen">
      <ProjectHero project={project} />
      <ProjectFeatureGrid project={project} />
      <ProjectDetails project={project} />
      <ProjectCTA />
    </main>
  );
}
