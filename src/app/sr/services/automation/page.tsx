import type { Metadata } from 'next';
import AutomationServices from '@/components/pages/AutomationServices';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Automatizacija - Marketing i Poslovni Procesi | Digital Frog',
  description: 'Automatizacija marketing kampanja i poslovnih procesa. AI-powered rešenja za povećanje efikasnosti i smanjenje manuelnog rada.',
  keywords: 'automatizacija procesa, marketing automatizacija, AI automatizacija, workflow optimizacija, poslovni procesi',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/services/automation',
    languages: { 
      en: 'https://digitalfrog.co/services/automation', 
      es: 'https://digitalfrog.co/es/servicios/automatizacion', 
      sr: 'https://digitalfrog.co/sr/services/automation' 
    },
  },
  openGraph: {
    title: 'Automatizacija - Marketing i Poslovni Procesi | Digital Frog',
    description: 'Automatizacija marketing kampanja i poslovnih procesa. AI-powered rešenja za povećanje efikasnosti.',
    url: 'https://digitalfrog.co/sr/services/automation',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AutomationServicesPageSR() {
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
        "description": "Automatizacija marketing kampanja i poslovnih procesa pomoću AI i modernih tehnologija za povećanje efikasnosti i smanjenje manuelnog rada."
      }} />
      <AutomationServices />
    </>
  );
}