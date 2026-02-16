'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { CTASection } from '@/components/sections/CTASection';

const HomeContent = () => {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <CaseStudiesSection />
      <CTASection />
    </main>
  );
};

export default HomeContent;
