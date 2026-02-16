import type { Metadata } from 'next';
import CustomSoftware from '@/components/pages/CustomSoftware';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Custom Software Development - Business Applications | Digital Frog',
  description: 'Custom software development with business applications, AI integration, and scalable systems. Full-stack development solutions.',
  keywords: 'custom software development, business applications, AI integration, full-stack development, custom applications',
  alternates: {
    canonical: '/services/custom-software',
    languages: { en: '/services/custom-software', es: '/es/servicios/software-a-medida' },
  },
};

export default function CustomSoftwarePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Custom Software Development",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Custom software development with business applications, AI integration, and scalable systems. Full-stack development solutions.",
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
      <CustomSoftware />
    </>
  );
}