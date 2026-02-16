'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { WhatWeBuild } from '@/components/sections/WhatWeBuild';
import { TechStack } from '@/components/sections/TechStack';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { CaseStudyFeature } from '@/components/sections/CaseStudyFeature';
import { PricingTransparency } from '@/components/sections/PricingTransparency';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { FinalCTA } from '@/components/sections/FinalCTA';

export function SEOServices() {
  const { t, language } = useLanguage();

  // Determine which translations to use based on current language
  const translationKey = language === 'es' ? 'serviciosSEO' : 'seoServices';



  return (
      <main className="min-h-screen bg-gray-950 pt-20">
      <ServiceHero 
        badge={t(`${translationKey}.hero.badge`)}
        title={t(`${translationKey}.hero.title`)}
        titleAccent={t(`${translationKey}.hero.titleAccent`)}
        subtitle={t(`${translationKey}.hero.subtitle`)}
        ctaText={t(`${translationKey}.hero.cta`)}
        ctaSecondaryText={t(`${translationKey}.hero.ctaSecondary`)}
        trustBadges={{
          speed: t(`${translationKey}.hero.trustBadges.speed`),
          delivery: t(`${translationKey}.hero.trustBadges.delivery`),
          satisfaction: t(`${translationKey}.hero.trustBadges.satisfaction`)
        }}
      />
      
      <ProblemSection 
        title={t(`${translationKey}.problem.title`)}
        subtitle={t(`${translationKey}.problem.subtitle`)}
        items={t(`${translationKey}.problem.items`)}
      />
      
      <SolutionSection 
        title={t(`${translationKey}.solution.title`)}
        subtitle={t(`${translationKey}.solution.subtitle`)}
        items={t(`${translationKey}.solution.items`)}
        differentiator={t(`${translationKey}.solution.differentiator`)}
      />
      
      <WhatWeBuild 
        title={t(`${translationKey}.whatWeBuild.title`)}
        subtitle={t(`${translationKey}.whatWeBuild.subtitle`)}
        items={t(`${translationKey}.whatWeBuild.items`)}
      />
      
      <TechStack 
        title={t(`${translationKey}.techStack.title`)}
        subtitle={t(`${translationKey}.techStack.subtitle`)}
        description={t(`${translationKey}.techStack.description`)}
        technologies={t(`${translationKey}.techStack.technologies`)}
      />
      
      <ProcessTimeline 
        title={t(`${translationKey}.process.title`)}
        subtitle={t(`${translationKey}.process.subtitle`)}
        steps={t(`${translationKey}.process.steps`)}
      />
      
      <CaseStudyFeature 
        title={t(`${translationKey}.caseStudy.title`)}
        subtitle={t(`${translationKey}.caseStudy.subtitle`)}
        featured={t(`${translationKey}.caseStudy.featured`)}
        additionalMetrics={t(`${translationKey}.caseStudy.additionalMetrics`)}
      />
      
      <PricingTransparency 
        title={t(`${translationKey}.pricing.title`)}
        subtitle={t(`${translationKey}.pricing.subtitle`)}
        description={t(`${translationKey}.pricing.description`)}
        factors={t(`${translationKey}.pricing.factors`)}
        cta={t(`${translationKey}.pricing.cta`)}
        note={t(`${translationKey}.pricing.note`)}
      />
      
      <FAQAccordion 
        title={t(`${translationKey}.faq.title`)}
        items={t(`${translationKey}.faq.items`)}
      />
      
      <FinalCTA 
        title={t(`${translationKey}.finalCta.title`)}
        subtitle={t(`${translationKey}.finalCta.subtitle`)}
        ctaText={t(`${translationKey}.finalCta.cta`)}
        note={t(`${translationKey}.finalCta.note`)}
      />
      </main>
  );
}

SEOServices.displayName = 'SEOServices';
export default SEOServices;