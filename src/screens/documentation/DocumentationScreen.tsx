import { PageHeader } from '@/components/layout/PageHeader';
import { ProjectLifecycle } from '@/components/documentation/ProjectLifecycle';
import { TechStackGrid } from '@/components/documentation/TechStackGrid';
import { ContactInfoCards } from '@/components/documentation/ContactInfoCards';
import { phases, techStack, contactInfo } from '@/data/documentationData';

export function DocumentationScreen() {
  return (
    <div className="pt-20">
      <PageHeader 
        label="Resources"
        title="Documentation"
        description="Welcome to Corestack Technologies Documentation — the primary resource for clients, partners, developers, and stakeholders utilizing our services and solutions."
      />
      <ProjectLifecycle phases={phases} />
      <TechStackGrid techStack={techStack} />
      <ContactInfoCards contactInfo={contactInfo} />
    </div>
  );
}
