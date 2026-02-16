import type { Metadata } from 'next';
import Services from '@/components/pages/Services';

export const metadata: Metadata = {
  title: 'Services - SEO & Custom Software Development | Digital Frog',
  description: 'Digital Frog offers comprehensive SEO services and custom software development. From technical audits to full-stack applications.',
  keywords: 'SEO services, custom software development, web applications, technical SEO audit, performance optimization',
  alternates: {
    canonical: '/services',
    languages: { en: '/services', es: '/es/services' },
  },
};

export default function ServicesPage() {
  return <Services />;
}