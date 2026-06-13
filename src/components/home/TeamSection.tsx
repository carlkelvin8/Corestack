'use client';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { teamMembersData as teamMembers } from '@/data/companyData';

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Meet the Team Behind CoreStack</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our multidisciplinary team of engineers, strategists, and creatives are dedicated to pushing the boundaries of what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} index={index % 3} className="glass-card rounded-2xl overflow-hidden group">
              <div className="aspect-[4/5] overflow-hidden bg-surface-container-high relative">
                <img 
                  src={member.image} 
                  alt={`Portrait of ${member.name}, ${member.role}`} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        const el = document.getElementById('contact');
                        if (!el) return;
                        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                      }}
                      aria-label="Contact this team member"
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-lg font-semibold text-on-surface mb-1">
                  {member.name}
                </h3>
                <p className="text-label-sm font-label-sm text-primary mb-1 uppercase tracking-wider">{member.role}</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant opacity-70 mb-3">{member.department}</p>
                <p className="text-body-md text-on-surface-variant text-sm">
                  {member.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
