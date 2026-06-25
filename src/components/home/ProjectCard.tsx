import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projectsData';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col min-w-[300px] w-[85vw] sm:w-[400px] snap-center shrink-0">
      <div className="aspect-[16/10] overflow-hidden bg-surface-container-high relative border-b border-white/10">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 85vw, (max-width: 768px) 400px, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow bg-surface">
        <p className="text-label-sm font-label-sm text-primary mb-2 uppercase tracking-wider">{project.category}</p>
        <h3 className="font-headline-sm text-xl font-semibold text-on-surface mb-3 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-body-md text-on-surface-variant text-sm mb-6 line-clamp-3 flex-grow">
          {project.shortDescription}
        </p>
        <Link 
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-primary font-label-lg hover:text-primary-light transition-colors mt-auto w-fit"
        >
          View Project
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
