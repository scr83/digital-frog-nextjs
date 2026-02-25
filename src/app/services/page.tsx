import type { Metadata } from 'next';
import Services from '@/components/pages/Services';

export const metadata: Metadata = {
  title: 'Services - SEO & Custom Software Development | Digital Frog',
  description: 'Digital Frog offers comprehensive SEO services and custom software development. From technical audits to full-stack applications.',
  keywords: 'SEO services, custom software development, web applications, technical SEO audit, performance optimization',
  alternates: {
    canonical: 'https://digitalfrog.co/services',
    languages: { 
      en: 'https://digitalfrog.co/services', 
      es: 'https://digitalfrog.co/es/services', 
      sr: 'https://digitalfrog.co/sr/services' 
    },
  },
};

export default function ServicesPage() {
  return <Services />;
}