import type { Metadata } from 'next';
import ProfessionalServices from '@/components/pages/ProfessionalServices';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Servicios Profesionales - Estrategia Digital y Consultoría | Digital Frog',
  description: 'Servicios digitales profesionales con consultoría estratégica, auditorías técnicas y soluciones digitales integrales para empresas.',
  keywords: 'servicios profesionales, consultoría digital, auditorías técnicas, estrategia digital, consultoría empresarial',
  alternates: {
    canonical: '/es/soluciones/servicios-profesionales',
    languages: { en: '/solutions/professional-services', es: '/es/soluciones/servicios-profesionales' },
  },
};

export default function ProfessionalServicesPageES() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Software para Servicios Profesionales",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "description": "Servicios digitales profesionales con consultoría estratégica, auditorías técnicas y soluciones digitales integrales para empresas.",
        "offers": {
          "@type": "Offer",
          "price": "5000",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "5000",
            "priceCurrency": "USD",
            "unitText": "precio inicial"
          }
        }
      }} />
      <ProfessionalServices />
    </>
  );
}