import type { Metadata } from 'next';
import WebDevelopment from '@/components/pages/WebDevelopment';

export const metadata: Metadata = {
  title: 'Desarrollo Web - Next.js y Aplicaciones Personalizadas | Digital Frog',
  description: 'Servicios profesionales de desarrollo web con Next.js, React y aplicaciones personalizadas. Sitios web de alto rendimiento y plataformas e-commerce.',
  keywords: 'desarrollo web, desarrollo Next.js, aplicaciones React, desarrollo e-commerce, sitios web personalizados',
  alternates: {
    canonical: '/es/servicios/desarrollo-web',
    languages: { en: '/services/web-development', es: '/es/servicios/desarrollo-web' },
  },
};

export default function WebDevelopmentPageES() {
  return <WebDevelopment />;
}