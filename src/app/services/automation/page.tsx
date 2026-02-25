import type { Metadata } from 'next';
import AutomationServices from '@/components/pages/AutomationServices';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Marketing Automation Services - Workflow Engineering | Digital Frog',
  description: 'Professional marketing automation services with workflow engineering, AI-powered systems, and business process optimization.',
  keywords: 'marketing automation, workflow automation, business process optimization, automated marketing systems',
  alternates: {
    canonical: 'https://digitalfrog.co/services/automation',
    languages: { 
      en: 'https://digitalfrog.co/services/automation', 
      es: 'https://digitalfrog.co/es/servicios/automatizacion', 
      sr: 'https://digitalfrog.co/sr/services/automation' 
    },
  },
};

export default function AutomationServicesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Business Automation",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Professional marketing automation services with workflow engineering, AI-powered systems, and business process optimization.",
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
      <AutomationServices />
    </>
  );
}