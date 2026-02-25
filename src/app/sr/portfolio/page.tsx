import type { Metadata } from 'next';
import Portfolio from '@/components/pages/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio - Digital Frog Priče o Uspešnosti',
  description: 'Pogledajte kako je Digital Frog pomogao preduzećima da rastu sa SEO optimizacijom, softverom po meri i rešenjima za automatizaciju.',
  keywords: 'digital frog portfolio, SEO studije slučaja, projekti razvoja softvera, priče o uspešnosti klijenata',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/portfolio',
    languages: { 
      en: 'https://digitalfrog.co/portfolio', 
      es: 'https://digitalfrog.co/es/portfolio', 
      sr: 'https://digitalfrog.co/sr/portfolio' 
    },
  },
  openGraph: {
    title: 'Portfolio - Digital Frog Priče o Uspešnosti',
    description: 'Pogledajte kako je Digital Frog pomogao preduzećima da rastu sa SEO optimizacijom i softverom po meri.',
    url: 'https://digitalfrog.co/sr/portfolio',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPageSR() {
  return <Portfolio />;
}