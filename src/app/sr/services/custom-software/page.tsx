import type { Metadata } from 'next';
import CustomSoftware from '@/components/pages/CustomSoftware';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Razvoj Softvera po Meri - Poslovne Aplikacije | Digital Frog',
  description: 'Razvoj prilagođenog softvera sa poslovnim aplikacijama, integracijom AI i skalabilnim sistemima. Full-stack razvojna rešenja.',
  keywords: 'razvoj softvera po meri, poslovne aplikacije, AI integracija, full-stack razvoj, prilagođene aplikacije',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/services/custom-software',
    languages: { 
      en: 'https://digitalfrog.co/services/custom-software', 
      es: 'https://digitalfrog.co/es/servicios/software-a-medida', 
      sr: 'https://digitalfrog.co/sr/services/custom-software' 
    },
  },
  openGraph: {
    title: 'Razvoj Softvera po Meri - Poslovne Aplikacije | Digital Frog',
    description: 'Razvoj prilagođenog softvera sa poslovnim aplikacijama, integracijom AI i skalabilnim sistemima.',
    url: 'https://digitalfrog.co/sr/services/custom-software',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
};

export default function CustomSoftwarePageSR() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Razvoj softvera po meri",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Serbia"
        },
        "description": "Razvoj prilagođenog softvera sa poslovnim aplikacijama, integracijom AI i skalabilnim sistemima. Full-stack razvojna rešenja.",
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
      <CustomSoftware />
    </>
  );
}