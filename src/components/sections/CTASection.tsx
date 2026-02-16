'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function CTASection() {
  const { t } = useLanguage();

  const trustItems = [
    t('cta.trust1'),
    t('cta.trust2'),
    t('cta.trust3'),
  ];

  return (
    <section className="py-24 bg-gradient-cta relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            {t('cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-primary-foreground/80 mb-10">
            {t('cta.subtitle')}
          </p>

          {/* CTA Button */}
          <Link href="/contact" className="inline-block mb-10">
            <Button variant="ctaWhite" size="xl" className="text-primary">
              {t('cta.button')}
            </Button>
          </Link>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                <Check size={18} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
