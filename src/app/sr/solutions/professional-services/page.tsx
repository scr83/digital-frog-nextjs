import type { Metadata } from 'next';
import ProfessionalServices from '@/components/pages/ProfessionalServices';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Profesionalne Usluge - Digitalna Strategija i Konsalting | Digital Frog',
  description: 'Profesionalne digitalne usluge sa strateškim konsaltingom, tehničkim auditima i sveobuhvatnim digitalnim rešenjima za preduzeća.',
  keywords: 'profesionalne usluge, digitalni konsalting, tehnički auditi, digitalna strategija, poslovni konsalting',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/solutions/professional-services',
    languages: { 
      en: 'https://digitalfrog.co/solutions/professional-services', 
      es: 'https://digitalfrog.co/es/soluciones/servicios-profesionales', 
      sr: 'https://digitalfrog.co/sr/solutions/professional-services' 
    },
  },
  openGraph: {
    title: 'Profesionalne Usluge - Digitalna Strategija i Konsalting | Digital Frog',
    description: 'Profesionalne digitalne usluge sa strateškim konsaltingom, tehničkim auditima i sveobuhvatnim digitalnim rešenjima.',
    url: 'https://digitalfrog.co/sr/solutions/professional-services',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProfessionalServicesPageSR() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Profesionalne usluge softvera",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Serbia"
        },
        "description": "Profesionalne digitalne usluge sa strateškim konsaltingom, tehničkim auditima i sveobuhvatnim digitalnim rešenjima za preduzeća.",
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
      <ProfessionalServices />
    </>
  );
}