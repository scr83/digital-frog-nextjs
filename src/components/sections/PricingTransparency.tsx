'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PricingTransparencyProps {
  title: string;
  subtitle: string;
  description: string;
  factors: {
    title: string;
    items: string[];
  };
  cta: string;
  note: string;
}

export function PricingTransparency({ 
  title, 
  subtitle, 
  description, 
  factors, 
  cta, 
  note 
}: PricingTransparencyProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-6 font-inter">
            {subtitle}
          </p>
          <p className="text-gray-300 font-inter">
            {description}
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-up animation-delay-100">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white font-outfit">
              {factors.title}
            </h3>
            <ul className="space-y-3">
              {factors.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 font-inter">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-400 to-lime-500 text-gray-950 font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity mb-4">
                {cta}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <p className="text-sm text-gray-400 font-inter">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

PricingTransparency.displayName = 'PricingTransparency';