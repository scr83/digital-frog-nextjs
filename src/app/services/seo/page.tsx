import type { Metadata } from 'next';
import SEOServices from '@/components/pages/SEOServices';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'SEO Services - Technical SEO Optimization | Digital Frog',
  description: 'Professional SEO services with technical optimization, performance monitoring, and systematic content strategy. 90+ PageSpeed guarantee.',
  keywords: 'SEO services, technical SEO, PageSpeed optimization, SEO audit, search engine optimization',
  alternates: {
    canonical: '/services/seo',
    languages: { en: '/services/seo', es: '/es/servicios/seo' },
  },
};

export default function SEOServicesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "SEO Services",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Professional SEO services including technical audits, keyword strategy, on-page optimization, and performance monitoring.",
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