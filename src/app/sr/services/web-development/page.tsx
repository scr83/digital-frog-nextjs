import type { Metadata } from 'next';
import WebDevelopment from '@/components/pages/WebDevelopment';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Veb Razvoj - Next.js i Prilagođene Aplikacije | Digital Frog',
  description: 'Profesionalne usluge veb razvoja sa Next.js, React i prilagođenim aplikacijama. Visokoperformantni sajtovi i e-commerce platforme.',
  keywords: 'veb razvoj, Next.js razvoj, React aplikacije, e-commerce razvoj, prilagođeni sajtovi',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/services/web-development',
    languages: { 
      en: 'https://digitalfrog.co/services/web-development', 
      es: 'https://digitalfrog.co/es/servicios/desarrollo-web', 
      sr: 'https://digitalfrog.co/sr/services/web-development' 
    },
  },
  openGraph: {
    title: 'Veb Razvoj - Next.js i Prilagođene Aplikacije | Digital Frog',
    description: 'Profesionalne usluge veb razvoja sa Next.js, React i prilagođenim aplikacijama. Visokoperformantni sajtovi i e-commerce platforme.',
    url: 'https://digitalfrog.co/sr/services/web-development',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
};

export default function WebDevelopmentPageSR() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Veb razvoj",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Serbia"
        },
        "description": "Profesionalne usluge veb razvoja sa Next.js, React i prilagođenim aplikacijama. Visokoperformantni sajtovi i e-commerce platforme.",
        "offers": {
          "@type": "Offer",
          "price": "3000",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "3000",
            "priceCurrency": "USD",
            "unitText": "početna cena"
          }
        }
      }} />
      <WebDevelopment />
    </>
  );
}