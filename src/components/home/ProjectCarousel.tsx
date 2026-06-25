'use client';
import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '@/data/projectsData';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export function ProjectCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="hidden md:flex absolute -top-16 right-0 gap-3">
        <button 
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full border border-white/20 dark:border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-white/5 dark:hover:bg-surface-variant/50 hover:border-white/40 dark:hover:border-outline-variant/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous project"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <button 
          onClick={scrollRight}
          className="w-10 h-10 rounded-full border border-white/20 dark:border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-white/5 dark:hover:bg-surface-variant/50 hover:border-white/40 dark:hover:border-outline-variant/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next project"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>

      {/* Carousel Track */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-margin-mobile md:px-0 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projectsData.map((project, index) => (
          <ScrollReveal key={project.slug} index={index % 4}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
      
      {/* Mobile Hint */}
      <div className="md:hidden flex justify-center items-center gap-2 mt-2 text-on-surface-variant opacity-70">
        <span className="material-symbols-outlined text-[16px]">swipe</span>
        <span className="text-label-sm">Swipe to explore</span>
      </div>
    </div>
  );
}
