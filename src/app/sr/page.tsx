import type { Metadata } from 'next';
import HomeContent from '@/components/pages/Index';

export const metadata: Metadata = {
  title: 'Digital Frog - Gde se Marketing Susreće sa Inženjeringom',
  description: 'Od SEO osnova do softvera po meri—gradimo kompletne digitalne sisteme projektovane za rast, automatizovane za skaliranje, merene sa preciznošću.',
  alternates: {
    canonical: 'https://digitalfrog.co/sr',
    languages: { 
      en: 'https://digitalfrog.co/', 
      es: 'https://digitalfrog.co/es', 
      sr: 'https://digitalfrog.co/sr' 
    },
  },
  openGraph: {
    title: 'Digital Frog - Gde se Marketing Susreće sa Inženjeringom',
    description: 'Od SEO osnova do softvera po meri—gradimo kompletne digitalne sisteme projektovane za rast, automatizovane za skaliranje, merene sa preciznošću.',
    url: 'https://digitalfrog.co/sr',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePageSR() {
  return <HomeContent />;
}