import HeroSection from '@/components/home/HeroSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
// import SpacesSection from '@/components/home/SpacesSection';
import KeyDifferentiatorsSection from '@/components/home/KeyDifferentiatorsSection';
import KitchensSection from '@/components/home/KitchensSection';
import SpecialtiesSection from '@/components/home/SpecialtiesSection';
import HardwareSection from '@/components/home/HardwareSection';
import ScaleSection from '@/components/home/ScaleSection';
import WhyPartnerSection from '@/components/home/WhyPartnerSection';
import FunSection from '@/components/home/FunSection';
import ProcessSection from '@/components/home/ProcessSection';
import CapabilitySection from '@/components/home/CapabilitySection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      {/* <SpacesSection /> */}
      <KeyDifferentiatorsSection />
      <ProcessSection />
      <KitchensSection />
      <SpecialtiesSection />
      <HardwareSection />
      <ScaleSection />
      <WhyPartnerSection />
      <FunSection />
      {/* <CapabilitySection /> */}
      <AboutSection />
      <ContactSection />
    </>
  );
}
