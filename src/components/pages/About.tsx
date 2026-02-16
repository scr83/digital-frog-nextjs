'use client';

import Link from 'next/link';
import { Target, Settings, Cpu, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();


  const values = [
    { icon: Target, text: t('about.value1') },
    { icon: Settings, text: t('about.value2') },
    { icon: Cpu, text: t('about.value3') },
    { icon: TrendingUp, text: t('about.value4') },
  ];

  const techStack = [
    'Next.js', 'TypeScript', 'React', 'PostgreSQL', 
    'Tailwind CSS', 'Vercel', 'Node.js', 'Python'
  ];

  return (
      <main className="min-h-screen bg-gradient-hero pt-24 pb-16">
        <div className="section-container">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-hero">{t('about.title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-24 animate-fade-up animation-delay-100">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('about.story.title')}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.story.content')}
            </p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto mb-24 animate-fade-up animation-delay-200">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {t('about.philosophy.title')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 flex items-center gap-4 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <value.icon className="text-primary" size={24} />
                </div>
                <span className="text-lg font-medium">{value.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-4xl mx-auto mb-24 animate-fade-up animation-delay-300">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('about.tech.title')}</h2>
            <p className="text-muted-foreground">{t('about.tech.subtitle')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-full glass text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up animation-delay-400">
          <Link href="/contact">
            <Button variant="hero" size="xl" className="group">
              {t('about.cta')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </div>
      </main>
  );
};

export default About;
