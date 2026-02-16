'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

type FilterType = 'all' | 'seo' | 'webdev' | 'automation';

interface CaseStudy {
  id: string;
  company: string;
  type: FilterType;
  metric: string;
  description: string;
}

const Portfolio = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');


  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      company: language === 'es' ? 'Bufete Legal - Jorge Robles' : 'Law Firm - Jorge Robles',
      type: 'seo',
      metric: '+20%',
      description: language === 'es' 
        ? 'Sistema completo: SEO + automatización = 2x casos cerrados' 
        : 'Complete system: SEO + automation = 2x closed cases',
    },
    {
      id: '2',
      company: 'NatAxtin',
      type: 'webdev',
      metric: '75→90+',
      description: language === 'es'
        ? 'Ingeniería de rendimiento en 2.5 días'
        : 'Performance engineering in 2.5 days',
    },
    {
      id: '3',
      company: 'Felipe Cuevas',
      type: 'automation',
      metric: '15hrs',
      description: language === 'es'
        ? 'Sistemas de automatización: 60% mejora en calidad de leads'
        : 'Automation systems: 60% lead quality improvement',
    },
    {
      id: '4',
      company: 'E-Commerce Platform',
      type: 'webdev',
      metric: '3x',
      description: language === 'es'
        ? 'Conversión triplicada con nueva plataforma'
        : 'Conversion tripled with new platform',
    },
    {
      id: '5',
      company: language === 'es' ? 'Consultora Tech' : 'Tech Consultancy',
      type: 'seo',
      metric: '+150%',
      description: language === 'es'
        ? 'Tráfico orgánico en 6 meses'
        : 'Organic traffic growth in 6 months',
    },
    {
      id: '6',
      company: 'SaaS Startup',
      type: 'automation',
      metric: '-40%',
      description: language === 'es'
        ? 'Reducción de costos operativos'
        : 'Operational cost reduction',
    },
  ];

  const filters = [
    { id: 'all' as FilterType, label: t('portfolio.filter.all') },
    { id: 'seo' as FilterType, label: t('portfolio.filter.seo') },
    { id: 'webdev' as FilterType, label: t('portfolio.filter.webdev') },
    { id: 'automation' as FilterType, label: t('portfolio.filter.automation') },
  ];

  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter((study) => study.type === filter);

  const getTypeBadge = (type: FilterType) => {
    const badges = {
      seo: 'SEO',
      webdev: 'Web Dev',
      automation: 'Automation',
      all: '',
    };
    return badges[type];
  };

  return (
      <main className="min-h-screen bg-gradient-hero pt-24 pb-16">
        <div className="section-container">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('portfolio.title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up animation-delay-100">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f.id
                  ? 'bg-primary text-primary-foreground'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredStudies.map((study, index) => (
            <div
              key={study.id}
              className="glass rounded-xl p-8 card-hover cursor-pointer animate-fade-up"
              style={{ animationDelay: `${100 + index * 50}ms` }}
            >
              {/* Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                {getTypeBadge(study.type)}
              </span>

              {/* Company */}
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                {study.company}
              </p>

              {/* Metric */}
              <h3 className="text-4xl font-bold text-gradient mb-4">
                {study.metric}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">
                {study.description}
              </p>

              {/* Link */}
              <span className="inline-flex items-center text-primary text-sm font-medium group">
                {t('portfolio.view')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up">
          <Link href="/contact">
            <Button variant="hero" size="xl" className="group">
              {t('nav.cta')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </div>
      </main>
  );
};

export default Portfolio;
