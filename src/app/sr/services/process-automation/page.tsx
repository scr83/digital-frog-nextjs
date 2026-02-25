import type { Metadata } from 'next';
import ProcessAutomation from '@/components/pages/ProcessAutomation';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Automatizacija Procesa - Optimizacija Poslovnih Operacija | Digital Frog',
  description: 'Usluge automatizacije poslovnih procesa sa optimizacijom operacija, inženjeringom tokova rada i sistematskim rešenjima automatizacije.',
  keywords: 'automatizacija procesa, poslovne operacije, optimizacija toka rada, automatizovani procesi, inženjering operacija',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/services/process-automation',
    languages: { 
      en: 'https://digitalfrog.co/services/process-automation', 
      es: 'https://digitalfrog.co/es/servicios/automatizacion-procesos', 
      sr: 'https://digitalfrog.co/sr/services/process-automation' 
    },
  },
  openGraph: {
    title: 'Automatizacija Procesa - Optimizacija Poslovnih Operacija | Digital Frog',
    description: 'Usluge automatizacije poslovnih procesa sa optimizacijom operacija, inženjeringom tokova rada i sistematskim rešenjima.',
    url: 'https://digitalfrog.co/sr/services/process-automation',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
};

export default function ProcessAutomationPageSR() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Automatizacija procesa",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Serbia"
        },
        "description": "Usluge automatizacije poslovnih procesa sa optimizacijom operacija, inženjeringom tokova rada i sistematskim rešenjima automatizacije.",
        "offers": {
          "@type": "Offer",
          "price": "5000",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "5000",
            "priceCurrency": "USD",
            "unitText": "početna cena"
          }
        }
      }} />
      <ProcessAutomation />
    </>
  );
}