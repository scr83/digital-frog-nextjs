import type { Metadata } from 'next';
import WebDevelopment from '@/components/pages/WebDevelopment';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Razvoj Veb Sajtova - Next.js i Veb Aplikacije | Digital Frog',
  description: 'Profesionalan razvoj veb sajtova sa Next.js, React i modernim tehnologijama. Brze, SEO optimizovane i skalabilne aplikacije.',
  keywords: 'razvoj veb sajtova, Next.js, React, veb aplikacije, frontend razvoj, full-stack development',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/services/web-development',
    languages: { 
      en: 'https://digitalfrog.co/services/web-development', 
      es: 'https://digitalfrog.co/es/servicios/desarrollo-web', 
      sr: 'https://digitalfrog.co/sr/services/web-development' 
    },
  },
  openGraph: {
    title: 'Razvoj Veb Sajtova - Next.js i Veb Aplikacije | Digital Frog',
    description: 'Profesionalan razvoj veb sajtova sa Next.js, React i modernim tehnologijama.',
    url: 'https://digitalfrog.co/sr/services/web-development',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WebDevelopmentServicesPageSR() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Razvoj veb sajtova",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Serbia"
        },
        "description": "Profesionalan razvoj veb sajtova i aplikacija koristeći Next.js, React i moderne tehnologije za brze, SEO optimizovane i skalabilne rešenja."
      }} />
      <WebDevelopment />
    </>
  );
}