import Link from 'next/link';
import { Project } from '@/data/projectsData';
import { ScrollReveal } from '@/components/common/ScrollReveal';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="py-16 bg-surface px-margin-mobile md:px-margin-desktop">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-headline-md text-3xl text-on-surface mb-6">About the Project</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            {project.fullDescription}
          </p>
          <Link 
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-label-lg rounded-full hover:bg-primary-light transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back to Projects
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
