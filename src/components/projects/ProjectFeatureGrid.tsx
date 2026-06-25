import { Project } from '@/data/projectsData';
import { ScrollReveal } from '@/components/common/ScrollReveal';

interface ProjectFeatureGridProps {
  project: Project;
}

export function ProjectFeatureGrid({ project }: ProjectFeatureGridProps) {
  if (!project.features || project.features.length === 0) return null;

  return (
    <section className="py-16 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-headline-md text-3xl text-on-surface">Key Features</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              index={index}
              className="glass-card p-8 rounded-2xl border border-white/5 dark:border-outline-variant/20 bg-surface/50 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <p className="font-label-lg text-on-surface">{feature}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
