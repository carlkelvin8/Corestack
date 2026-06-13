import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { AboutPreviewSection } from '@/components/home/AboutPreviewSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { TeamSection } from '@/components/home/TeamSection';
import { ContactPreviewSection } from '@/components/home/ContactPreviewSection';

export function HomeScreen() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutPreviewSection />
      <ProcessSection />
      <TeamSection />
      <ContactPreviewSection />
    </>
  );
}
