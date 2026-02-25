import type { Metadata } from 'next';
import WebDevelopment from '@/components/pages/WebDevelopment';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Web Development - Next.js & Custom Applications | Digital Frog',
  description: 'Professional web development services with Next.js, React, and custom applications. High-performance websites and e-commerce platforms.',
  keywords: 'web development, Next.js development, React applications, e-commerce development, custom websites',
  alternates: {
    canonical: 'https://digitalfrog.co/services/web-development',
    languages: { 
      en: 'https://digitalfrog.co/services/web-development', 
      es: 'https://digitalfrog.co/es/servicios/desarrollo-web', 
      sr: 'https://digitalfrog.co/sr/services/web-development' 
    },
  },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Development",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Professional web development services with Next.js, React, and custom applications. High-performance websites and e-commerce platforms.",
        "offers": {
          "@type": "Offer",
          "price": "3000",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "3000",
            "priceCurrency": "USD",
            "unitText": "starting price"
          }
        }
      }} />
      <WebDevelopment />
    </>
  );
}