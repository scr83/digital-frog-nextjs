import type { Metadata } from 'next';
import SEOServices from '@/components/pages/SEOServices';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'SEO Usluge - Tehnička SEO Optimizacija | Digital Frog',
  description: 'Profesionalne SEO usluge sa tehničkom optimizacijom, praćenjem performansi i sistematskom strategijom sadržaja. Garancija 90+ PageSpeed.',
  keywords: 'SEO usluge, tehnički SEO, PageSpeed optimizacija, SEO audit, optimizacija za pretraživače',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/services/seo',
    languages: { 
      en: 'https://digitalfrog.co/services/seo', 
      es: 'https://digitalfrog.co/es/servicios/seo', 
      sr: 'https://digitalfrog.co/sr/services/seo' 
    },
  },
  openGraph: {
    title: 'SEO Usluge - Tehnička SEO Optimizacija | Digital Frog',
    description: 'Profesionalne SEO usluge sa tehničkom optimizacijom, praćenjem performansi i sistematskom strategijom sadržaja.',
    url: 'https://digitalfrog.co/sr/services/seo',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SEOServicesPageSR() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "SEO usluge",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Serbia"
        },
        "description": "Profesionalne SEO usluge uključujući tehničke audite, strategiju ključnih reči, on-page optimizaciju i praćenje performansi.",
        "offers": {
          "@type": "Offer",
          "price": "1800",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "1800",
            "priceCurrency": "USD",
            "unitText": "starting price"
          }
        }
      }} />
      <SEOServices />
    </>
  );
}