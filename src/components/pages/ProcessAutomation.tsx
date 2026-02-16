'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { WhatWeBuild } from '@/components/sections/WhatWeBuild';
import { CaseStudyFeature } from '@/components/sections/CaseStudyFeature';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { FinalCTA } from '@/components/sections/FinalCTA';

// Custom section for What We Automate (different from WhatWeBuild)
function WhatWeAutomate({ title, subtitle, categories }: { title: string; subtitle: string; categories: Array<{ title: string; items: string[] }> }) {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-inter">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up animation-delay-100">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-colors">
              <h3 className="text-lg font-semibold mb-4 text-cyan-400 font-outfit">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-400 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom section for RPA vs Custom comparison
function VSRPASection({ title, subtitle, comparison, conclusion }: { 
  title: string; 
  subtitle: string; 
  comparison: Array<{ aspect: string; rpa: string; custom: string }>;
  conclusion: string;
}) {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-inter">
            {subtitle}
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8 mb-8 animate-fade-up animation-delay-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-4 px-4 text-gray-300 font-outfit">Aspect</th>
                  <th className="text-left py-4 px-4 text-red-400 font-outfit">Enterprise RPA</th>
                  <th className="text-left py-4 px-4 text-cyan-400 font-outfit">Custom Automation</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700 last:border-0">
                    <td className="py-4 px-4 font-semibold text-gray-300 font-inter">{item.aspect}</td>
                    <td className="py-4 px-4 text-gray-400 font-inter">{item.rpa}</td>
                    <td className="py-4 px-4 text-gray-400 font-inter">{item.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto animate-fade-up animation-delay-200">
          <p className="text-gray-300 font-inter">{conclusion}</p>
        </div>
      </div>
    </section>
  );
}

export function ProcessAutomation() {
  const { t, language } = useLanguage();

  // Determine which translations to use based on current language
  const translationKey = language === 'es' ? 'automatizacionProcesos' : 'processAutomation';


  return (
      <main className="min-h-screen bg-gray-950 pt-20">
      <ServiceHero 
        badge={t(`${translationKey}.hero.badge`)}
        title={t(`${translationKey}.hero.title`)}
        titleAccent={t(`${translationKey}.hero.titleAccent`)}
        subtitle={t(`${translationKey}.hero.subtitle`)}
        ctaText={t(`${translationKey}.hero.cta`)}
        ctaSecondaryText={t(`${translationKey}.hero.ctaSecondary`)}
      />
      
      <ProblemSection 
        title={t(`${translationKey}.problem.title`)}
        subtitle={t(`${translationKey}.problem.subtitle`)}
        items={[]}
      />
      
      <WhatWeAutomate 
        title={t(`${translationKey}.whatWeAutomate.title`)}
        subtitle={t(`${translationKey}.whatWeAutomate.subtitle`)}
        categories={[]}
      />
      
      <VSRPASection 
        title={t(`${translationKey}.vsRPA.title`)}
        subtitle={t(`${translationKey}.vsRPA.subtitle`)}
        comparison={[]}
        conclusion={t(`${translationKey}.vsRPA.conclusion`)}
      />
      
      <CaseStudyFeature 
        title={t(`${translationKey}.caseStudy.title`)}
        subtitle="Real automation impact from real clients."
        featured={{
          type: "Case Study",
          client: "Client Name",
          challenge: "Challenge description",
          solution: "Solution description",
          results: [],
          quote: "Quote text",
          quoteName: "Client Name"
        }}
      />
      
      <ProcessTimeline 
        title={t(`${translationKey}.process.title`)}
        subtitle="A systematic approach to automation."
        steps={[]}
      />
      
      <FAQAccordion 
        title={t(`${translationKey}.faq.title`)}
        items={[]}
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

ProcessAutomation.displayName = 'ProcessAutomation';
export default ProcessAutomation;