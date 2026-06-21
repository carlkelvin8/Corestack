import { Project } from '@/data/projectsData';
import { ScrollReveal } from '@/components/common/ScrollReveal';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="pt-32 pb-16 bg-surface px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <ScrollReveal className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-label-md font-label-md text-primary uppercase tracking-widest mb-4">
            {project.category}
          </p>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
            {project.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal index={1} className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-surface-container-high border border-white/10 shadow-2xl">
          <img 
            src={project.image} 
            alt={`${project.title} overview`}
            className="w-full h-full object-cover object-center"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
