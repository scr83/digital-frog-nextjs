import type { Metadata } from 'next';
import AutomationServices from '@/components/pages/AutomationServices';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Servicios de Automatización de Marketing - Ingeniería de Flujos de Trabajo | Digital Frog',
  description: 'Servicios profesionales de automatización de marketing con ingeniería de flujos de trabajo, sistemas potenciados por IA y optimización de procesos empresariales.',
  keywords: 'automatización marketing, automatización flujos trabajo, optimización procesos empresariales, sistemas marketing automatizados',
  alternates: {
    canonical: '/es/servicios/automatizacion',
    languages: { en: '/services/automation', es: '/es/servicios/automatizacion' },
  },
};

export default function AutomationServicesPageES() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Automatización Empresarial",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Servicios profesionales de automatización de marketing con ingeniería de flujos de trabajo, sistemas potenciados por IA y optimización de procesos empresariales.",
        "offers": {
          "@type": "Offer",
          "price": "5000",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "5000",
            "priceCurrency": "USD",
            "unitText": "precio inicial"
          }
        }
      }} />
      <AutomationServices />
    </>
  );
}