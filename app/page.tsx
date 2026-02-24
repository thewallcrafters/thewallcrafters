import HeroSection from '@/components/home/HeroSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import KeyDifferentiatorsSection from '@/components/home/KeyDifferentiatorsSection';
import HardwareSection from '@/components/home/HardwareSection';
import ScaleSection from '@/components/home/ScaleSection';
import WhyPartnerSection from '@/components/home/WhyPartnerSection';
import FunSection from '@/components/home/FunSection';
import ProcessSection from '@/components/home/ProcessSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <KeyDifferentiatorsSection />
      <ProcessSection />
      <HardwareSection />
      <ScaleSection />
      <WhyPartnerSection />
      <FunSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
