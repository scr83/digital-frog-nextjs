'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Zap, Clock, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { detectLanguageFromPath, getTranslations, getLocalizedPath } from '@/lib/translations';

export function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    { value: '90+', label: t('stats.pagespeed'), icon: Zap },
    { value: '80%', label: t('stats.automated'), icon: Cpu },
    { value: '2.5', label: t('stats.days'), icon: Clock },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
            <span className="text-gradient-hero">{t('hero.headline')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up animation-delay-100">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-200">
            <Link href="/contact">
              <Button variant="hero" size="xl" className="group">
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="heroOutline" size="xl">
                {t('hero.cta.secondary')}
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up animation-delay-300">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card group cursor-default"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <stat.icon className="text-primary" size={20} />
                  <span className="text-3xl font-bold text-secondary">{stat.value}</span>
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
