'use client';

import Link from 'next/link';
import { Building2, Zap, Bot, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function ServicesSection() {
  const { t } = useLanguage();

  const tiers = [
    {
      tier: 1,
      icon: Building2,
      badge: t('tier1.badge'),
      title: t('tier1.title'),
      subtitle: t('tier1.subtitle'),
      features: [
        t('tier1.feature1'),
        t('tier1.feature2'),
        t('tier1.feature3'),
        t('tier1.feature4'),
      ],
      cta: t('tier1.cta'),
      price: t('tier1.price'),
      className: 'tier-1',
    },
    {
      tier: 2,
      icon: Zap,
      badge: t('tier2.badge'),
      title: t('tier2.title'),
      subtitle: t('tier2.subtitle'),
      features: [
        t('tier2.feature1'),
        t('tier2.feature2'),
        t('tier2.feature3'),
        t('tier2.feature4'),
      ],
      cta: t('tier2.cta'),
      price: t('tier2.price'),
      className: 'tier-2',
    },
    {
      tier: 3,
      icon: Bot,
      badge: t('tier3.badge'),
      title: t('tier3.title'),
      subtitle: t('tier3.subtitle'),
      features: [
        t('tier3.feature1'),
        t('tier3.feature2'),
        t('tier3.feature3'),
        t('tier3.feature4'),
      ],
      cta: t('tier3.cta'),
      price: t('tier3.price'),
      className: 'tier-3',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('servicesSection.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('servicesSection.subtitle')}
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`tier-card ${tier.className} card-hover`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                {tier.badge}
              </span>

              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <tier.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">{tier.title}</h3>
              </div>

              {/* Subtitle */}
              <p className="text-muted-foreground mb-6">{tier.subtitle}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="text-secondary shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <p className="text-sm text-muted-foreground mb-4">{tier.price}</p>

              {/* CTA */}
              <Link href="/contact" className="block">
                <Button variant="gradient" className="w-full">
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
