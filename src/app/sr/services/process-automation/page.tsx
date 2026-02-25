import type { Metadata } from 'next';
import ProcessAutomation from '@/components/pages/ProcessAutomation';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Automatizacija Procesa - Optimizacija Poslovnih Tokova | Digital Frog',
  description: 'Sistematska automatizacija poslovnih procesa za povećanje efikasnosti. Workflow optimizacija i AI-powered rešenja.',
  keywords: 'automatizacija procesa, workflow optimizacija, poslovni procesi, AI automatizacija, operativna efikasnost',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/services/process-automation',
    languages: { 
      en: 'https://digitalfrog.co/services/process-automation', 
      es: 'https://digitalfrog.co/es/servicios/automatizacion-procesos', 
      sr: 'https://digitalfrog.co/sr/services/process-automation' 
    },
  },
  openGraph: {
    title: 'Automatizacija Procesa - Optimizacija Poslovnih Tokova | Digital Frog',
    description: 'Sistematska automatizacija poslovnih procesa za povećanje efikasnosti.',
    url: 'https://digitalfrog.co/sr/services/process-automation',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProcessAutomationServicesPageSR() {
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
        "description": "Sistematska automatizacija poslovnih procesa za povećanje efikasnosti kroz workflow optimizaciju i AI-powered rešenja."
      }} />
      <ProcessAutomation />
    </>
  );
}