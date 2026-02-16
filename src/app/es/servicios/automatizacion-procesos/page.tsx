import type { Metadata } from 'next';
import ProcessAutomation from '@/components/pages/ProcessAutomation';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Automatización de Procesos - Optimización de Operaciones Empresariales | Digital Frog',
  description: 'Servicios de automatización de procesos empresariales con optimización de operaciones, ingeniería de flujos de trabajo y soluciones de automatización sistemática.',
  keywords: 'automatización procesos, operaciones empresariales, optimización flujos trabajo, procesos automatizados, ingeniería operaciones',
  alternates: {
    canonical: '/es/servicios/automatizacion-procesos',
    languages: { en: '/services/process-automation', es: '/es/servicios/automatizacion-procesos' },
  },
};

export default function ProcessAutomationPageES() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Automatización de Procesos",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Servicios de automatización de procesos empresariales con optimización de operaciones, ingeniería de flujos de trabajo y soluciones de automatización sistemática.",
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
      <ProcessAutomation />
    </>
  );
}