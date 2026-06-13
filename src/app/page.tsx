import { Navigation } from '@/components/Navigation';
import { HeroScreen } from '@/screens/HeroScreen';
import { ServicesScreen } from '@/screens/ServicesScreen';
import { AboutScreen } from '@/screens/AboutScreen';
import { ProcessScreen } from '@/screens/ProcessScreen';
import { TeamScreen } from '@/screens/TeamScreen';
import { ContactScreen } from '@/screens/ContactScreen';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroScreen />
      <ServicesScreen />
      <AboutScreen />
      <ProcessScreen />
      <TeamScreen />
      <ContactScreen />
      <Footer />
    </main>
  );
}
