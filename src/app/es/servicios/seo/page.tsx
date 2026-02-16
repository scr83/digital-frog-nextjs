import type { Metadata } from 'next';
import SEOServices from '@/components/pages/SEOServices';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Servicios SEO - Optimización SEO Técnica | Digital Frog',
  description: 'Servicios profesionales de SEO con optimización técnica, monitoreo de rendimiento y estrategia de contenido sistemática. Garantía de PageSpeed 90+.',
  keywords: 'servicios SEO, SEO técnico, optimización PageSpeed, auditoría SEO, optimización motores búsqueda',
  alternates: {
    canonical: '/es/servicios/seo',
    languages: { en: '/services/seo', es: '/es/servicios/seo' },
  },
};

export default function SEOServicesPageES() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Servicios SEO",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Servicios profesionales de SEO con optimización técnica, monitoreo de rendimiento y estrategia de contenido sistemática.",
        "offers": {
          "@type": "Offer",
          "price": "1800",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "1800",
            "priceCurrency": "USD",
            "unitText": "precio inicial"
          }
        }
      }} />
      <SEOServices />
    </>
  );
}