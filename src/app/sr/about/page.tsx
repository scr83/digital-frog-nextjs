import type { Metadata } from 'next';
import About from '@/components/pages/About';

export const metadata: Metadata = {
  title: 'O nama - Digital Frog | Gde se Marketing Susreće sa Inženjeringom',
  description: 'Saznajte više o Digital Frog, gde se marketing susreće sa inženjeringom. Gradimo kompletne digitalne sisteme koji rastu sa vašim biznisom.',
  keywords: 'o digital frog, marketing inženjering, tim za razvoj veba, SEO eksperti',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/about',
    languages: { 
      en: 'https://digitalfrog.co/about', 
      es: 'https://digitalfrog.co/es/about', 
      sr: 'https://digitalfrog.co/sr/about' 
    },
  },
  openGraph: {
    title: 'O nama - Digital Frog | Gde se Marketing Susreće sa Inženjeringom',
    description: 'Saznajte više o Digital Frog, gde se marketing susreće sa inženjeringom.',
    url: 'https://digitalfrog.co/sr/about',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPageSR() {
  return <About />;
}