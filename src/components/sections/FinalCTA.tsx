'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FinalCTAProps {
  title: string;
  subtitle: string;
  ctaText: string;
  note: string;
}

export function FinalCTA({ title, subtitle, ctaText, note }: FinalCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-400/10 to-lime-500/10">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-outfit">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-8 font-inter">
            {subtitle}
          </p>
          
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-cyan-400 to-lime-500 text-gray-950 font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity mb-4 text-lg">
              {ctaText}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          
          <p className="text-sm text-gray-400 font-inter">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
}

FinalCTA.displayName = 'FinalCTA';