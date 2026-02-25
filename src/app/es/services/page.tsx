import type { Metadata } from 'next';
import Services from '@/components/pages/Services';

export const metadata: Metadata = {
  title: 'Servicios - SEO y Desarrollo de Software Personalizado | Digital Frog',
  description: 'Digital Frog ofrece servicios integrales de SEO y desarrollo de software personalizado. Desde auditorías técnicas hasta aplicaciones full-stack.',
  keywords: 'servicios SEO, desarrollo software personalizado, aplicaciones web, auditoría SEO técnica, optimización rendimiento',
  alternates: {
    canonical: 'https://digitalfrog.co/es/services',
    languages: { 
      en: 'https://digitalfrog.co/services', 
      es: 'https://digitalfrog.co/es/services', 
      sr: 'https://digitalfrog.co/sr/services' 
    },
  },
};

export default function ServicesPageES() {
  return <Services />;
}