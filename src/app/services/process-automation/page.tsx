import type { Metadata } from 'next';
import ProcessAutomation from '@/components/pages/ProcessAutomation';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Process Automation - Business Operations Optimization | Digital Frog',
  description: 'Business process automation services with operations optimization, workflow engineering, and systematic automation solutions.',
  keywords: 'process automation, business operations, workflow optimization, automated processes, operations engineering',
  alternates: {
    canonical: 'https://digitalfrog.co/services/process-automation',
    languages: { 
      en: 'https://digitalfrog.co/services/process-automation', 
      es: 'https://digitalfrog.co/es/servicios/automatizacion-procesos', 
      sr: 'https://digitalfrog.co/sr/services/process-automation' 
    },
  },
};

export default function ProcessAutomationPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Process Automation",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Business process automation services with operations optimization, workflow engineering, and systematic automation solutions.",
        "offers": {
          "@type": "Offer",
          "price": "5000",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "5000",
            "priceCurrency": "USD",
            "unitText": "starting price"
          }
        }
      }} />
      <ProcessAutomation />
    </>
  );
}