'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function CaseStudiesSection() {
  const { t } = useLanguage();

  const cases = [
    {
      company: t('case1.company'),
      result: t('case1.result'),
      description: t('case1.description'),
    },
    {
      company: t('case2.company'),
      result: t('case2.result'),
      description: t('case2.description'),
    },
    {
      company: t('case3.company'),
      result: t('case3.result'),
      description: t('case3.description'),
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('cases.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('cases.subtitle')}
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 border border-border/50 card-hover cursor-pointer"
            >
              {/* Company name */}
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">
                {caseStudy.company}
              </p>

              {/* Result - Large gradient text */}
              <h3 className="text-3xl font-bold text-gradient mb-4">
                {caseStudy.result}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm">
                {caseStudy.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="group">
              {t('cases.cta')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
