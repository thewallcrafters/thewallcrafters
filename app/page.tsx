import HeroSection from '@/components/home/HeroSection';
import SpacesSection from '@/components/home/SpacesSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import KitchensSection from '@/components/home/KitchensSection';
import SpecialtiesSection from '@/components/home/SpecialtiesSection';
import ProcessSection from '@/components/home/ProcessSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SpacesSection />
      <ProjectsSection />
      <KitchensSection />
      <SpecialtiesSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
