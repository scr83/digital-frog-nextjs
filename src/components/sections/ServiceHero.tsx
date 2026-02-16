'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceHeroProps {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  ctaText: string;
  ctaSecondaryText: string;
  trustBadges?: {
    speed: string;
    delivery: string;
    satisfaction: string;
  };
}

export function ServiceHero({
  badge,
  title,
  titleAccent,
  subtitle,
  ctaText,
  ctaSecondaryText,
  trustBadges
}: ServiceHeroProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium text-cyan-400 mb-6">
            {badge}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-outfit">
            {title}{' '}
            <span className="text-gradient-hero">
              {titleAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-8 font-inter">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-400 to-lime-500 text-gray-950 font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                {ctaText}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button 
                variant="outline" 
                className="border border-cyan-400 text-cyan-400 font-semibold px-6 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors"
              >
                {ctaSecondaryText}
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          {trustBadges && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                {trustBadges.speed}
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                {trustBadges.delivery}
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                {trustBadges.satisfaction}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

ServiceHero.displayName = 'ServiceHero';