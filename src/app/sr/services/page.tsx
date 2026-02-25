import type { Metadata } from 'next';
import Services from '@/components/pages/Services';

export const metadata: Metadata = {
  title: 'Usluge - SEO i Razvoj Softvera po Meri | Digital Frog',
  description: 'Digital Frog nudi sveobuhvatne SEO usluge i razvoj softvera po meri. Od tehničkih audita do full-stack aplikacija.',
  keywords: 'SEO usluge, razvoj softvera po meri, veb aplikacije, tehnički SEO audit, optimizacija performansi',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/services',
    languages: { 
      en: 'https://digitalfrog.co/services', 
      es: 'https://digitalfrog.co/es/services', 
      sr: 'https://digitalfrog.co/sr/services' 
    },
  },
  openGraph: {
    title: 'Usluge - SEO i Razvoj Softvera po Meri | Digital Frog',
    description: 'Digital Frog nudi sveobuhvatne SEO usluge i razvoj softvera po meri. Od tehničkih audita do full-stack aplikacija.',
    url: 'https://digitalfrog.co/sr/services',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPageSR() {
  return <Services />;
}