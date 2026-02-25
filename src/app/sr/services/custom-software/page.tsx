import type { Metadata } from 'next';
import CustomSoftware from '@/components/pages/CustomSoftware';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Softver po Meri - Prilagođene Poslovne Aplikacije | Digital Frog',
  description: 'Razvoj softvera po meri za specifične poslovne potrebe. Od jednostavnih alata do kompleksnih sistema za upravljanje.',
  keywords: 'softver po meri, prilagođene aplikacije, poslovni softver, razvoj aplikacija, custom development',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/services/custom-software',
    languages: { 
      en: 'https://digitalfrog.co/services/custom-software', 
      es: 'https://digitalfrog.co/es/servicios/software-a-medida', 
      sr: 'https://digitalfrog.co/sr/services/custom-software' 
    },
  },
  openGraph: {
    title: 'Softver po Meri - Prilagođene Poslovne Aplikacije | Digital Frog',
    description: 'Razvoj softvera po meri za specifične poslovne potrebe. Od jednostavnih alata do kompleksnih sistema.',
    url: 'https://digitalfrog.co/sr/services/custom-software',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CustomSoftwareServicesPageSR() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Softver po meri",
        "provider": {
          "@type": "Organization",
          "name": "Digital Frog"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Serbia"
        },
        "description": "Razvoj prilagođenih softvera aplikacija za specifične poslovne potrebe, od jednostavnih alata do kompleksnih sistema za upravljanje."
      }} />
      <CustomSoftware />
    </>
  );
}