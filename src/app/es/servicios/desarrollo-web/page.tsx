import type { Metadata } from 'next';
import WebDevelopment from '@/components/pages/WebDevelopment';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Desarrollo Web - Next.js y Aplicaciones Personalizadas | Digital Frog',
  description: 'Servicios profesionales de desarrollo web con Next.js, React y aplicaciones personalizadas. Sitios web de alto rendimiento y plataformas e-commerce.',
  keywords: 'desarrollo web, desarrollo Next.js, aplicaciones React, desarrollo e-commerce, sitios web personalizados',
  alternates: {
    canonical: 'https://digitalfrog.co/es/servicios/desarrollo-web',
    languages: { 
      en: 'https://digitalfrog.co/services/web-development', 
      es: 'https://digitalfrog.co/es/servicios/desarrollo-web', 
      sr: 'https://digitalfrog.co/sr/services/web-development' 
    },
  },
};

export default function WebDevelopmentPageES() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Desarrollo Web",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Servicios profesionales de desarrollo web con Next.js, React y aplicaciones personalizadas. Sitios web de alto rendimiento y plataformas e-commerce.",
        "offers": {
          "@type": "Offer",
          "price": "3000",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "3000",
            "priceCurrency": "USD",
            "unitText": "precio inicial"
          }
        }
      }} />
      <WebDevelopment />
    </>
  );
}