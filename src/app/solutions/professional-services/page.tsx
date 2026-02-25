import type { Metadata } from 'next';
import ProfessionalServices from '@/components/pages/ProfessionalServices';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Professional Services - Digital Strategy & Consulting | Digital Frog',
  description: 'Professional digital services with strategic consulting, technical audits, and comprehensive digital solutions for businesses.',
  keywords: 'professional services, digital consulting, technical audits, digital strategy, business consulting',
  alternates: {
    canonical: 'https://digitalfrog.co/solutions/professional-services',
    languages: { 
      en: 'https://digitalfrog.co/solutions/professional-services', 
      es: 'https://digitalfrog.co/es/soluciones/servicios-profesionales', 
      sr: 'https://digitalfrog.co/sr/solutions/professional-services' 
    },
  },
};

export default function ProfessionalServicesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Professional Services Software",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Professional digital services with strategic consulting, technical audits, and comprehensive digital solutions for businesses.",
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
      <ProfessionalServices />
    </>
  );
}