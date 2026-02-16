'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceHero } from '@/components/sections/ServiceHero';
import { CaseStudyFeature } from '@/components/sections/CaseStudyFeature';
import { PricingTransparency } from '@/components/sections/PricingTransparency';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

// Custom section for Industries
function IndustriesSection({ title, items }: { title: string; items: Array<{ icon: string; title: string; description: string }> }) {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up animation-delay-100">
          {items.map((item, index) => {
            const IconComponent = (Icons as any)[item.icon] as LucideIcon;
            
            return (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-colors text-center"
              >
                <div className="p-4 rounded-xl bg-cyan-400/10 mb-4 w-fit mx-auto">
                  <IconComponent className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white font-outfit">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 font-inter">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Custom section for Challenges
function ChallengesSection({ title, subtitle, items }: { title: string; subtitle: string; items: Array<{ title: string; description: string }> }) {
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

        <div className="grid md:grid-cols-2 gap-8 animate-fade-up animation-delay-100">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-white font-outfit">
                {item.title}
              </h3>
              <p className="text-gray-400 font-inter">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom section for Solutions
function SolutionsSection({ title, items }: { title: string; items: Array<{ icon: string; title: string; description: string }> }) {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up animation-delay-100">
          {items.map((item, index) => {
            const IconComponent = (Icons as any)[item.icon] as LucideIcon;
            
            return (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-colors"
              >
                <div className="p-3 rounded-xl bg-cyan-400/10 mb-4 w-fit">
                  <IconComponent className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white font-outfit">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 font-inter">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Enhanced Case Study for Professional Services
function ProfessionalCaseStudy({ badge, title, client, subtitle, challenge, solution, results, quote }: {
  badge: string;
  title: string;
  client: string;
  subtitle: string;
  challenge: { title: string; description: string };
  solution: { title: string; items: string[] };
  results: { title: string; items: Array<{ metric: string; label: string; detail: string }> };
  quote: { text: string; name: string; title: string };
}) {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8 animate-fade-up">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
              {badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
              {title}
            </h2>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 font-outfit">
              {client}
            </h3>
            <p className="text-gray-400 font-inter">
              {subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Challenge */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white font-outfit">
                {challenge.title}
              </h4>
              <p className="text-gray-400 font-inter">
                {challenge.description}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white font-outfit">
                {solution.title}
              </h4>
              <ul className="space-y-2">
                {solution.items.map((item, index) => (
                  <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white font-outfit">
                {results.title}
              </h4>
              <div className="space-y-4">
                {results.items.map((result, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-300 mb-1">
                      {result.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {result.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-8 bg-gray-700 border border-gray-600 rounded-xl p-6 text-center">
            <blockquote className="text-gray-300 italic mb-4 font-inter text-lg">
              "{quote.text}"
            </blockquote>
            <div className="text-cyan-400 font-semibold">
              {quote.name}
            </div>
            <div className="text-sm text-gray-400">
              {quote.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProfessionalServices() {
  const { t, language } = useLanguage();

  // Determine which translations to use based on current language
  const translationKey = language === 'es' ? 'serviciosProfesionales' : 'professionalServices';


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
      
      <IndustriesSection 
        title={t(`${translationKey}.industries.title`)}
        items={t(`${translationKey}.industries.items`)}
      />
      
      <ChallengesSection 
        title={t(`${translationKey}.challenges.title`)}
        subtitle={t(`${translationKey}.challenges.subtitle`)}
        items={t(`${translationKey}.challenges.items`)}
      />
      
      <SolutionsSection 
        title={t(`${translationKey}.solutions.title`)}
        items={t(`${translationKey}.solutions.items`)}
      />
      
      <ProfessionalCaseStudy 
        badge={t(`${translationKey}.caseStudy.badge`)}
        title={t(`${translationKey}.caseStudy.title`)}
        client={t(`${translationKey}.caseStudy.client`)}
        subtitle={t(`${translationKey}.caseStudy.subtitle`)}
        challenge={{ title: "Challenge", description: "Challenge description" }}
        solution={{ title: "Solution", items: [] }}
        results={{ title: "Results", items: [] }}
        quote={{ text: "Quote text", name: "Client Name", title: "Client Title" }}
      />
      
      <PricingTransparency 
        title={t(`${translationKey}.pricing.title`)}
        subtitle="Industry-specific investment ranges."
        description={t(`${translationKey}.pricing.description`)}
        factors={{
          title: "What Affects Your Investment",
          items: [
            "Number of users and access levels",
            "Complexity of workflows", 
            "Integration requirements",
            "Compliance and security needs"
          ]
        }}
        cta={t(`${translationKey}.pricing.cta`)}
        note="Free consultation included."
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

ProfessionalServices.displayName = 'ProfessionalServices';
export default ProfessionalServices;