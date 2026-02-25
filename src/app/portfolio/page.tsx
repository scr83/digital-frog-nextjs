import type { Metadata } from 'next';
import Portfolio from '@/components/pages/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio - Digital Frog Success Stories',
  description: 'See how Digital Frog has helped businesses grow with SEO optimization, custom software, and marketing automation solutions.',
  keywords: 'digital frog portfolio, SEO case studies, software development projects, client success stories',
  alternates: {
    canonical: 'https://digitalfrog.co/portfolio',
    languages: { 
      en: 'https://digitalfrog.co/portfolio', 
      es: 'https://digitalfrog.co/es/portfolio', 
      sr: 'https://digitalfrog.co/sr/portfolio' 
    },
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}