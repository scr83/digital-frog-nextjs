import type { Metadata } from 'next';
import CustomSoftware from '@/components/pages/CustomSoftware';

export const metadata: Metadata = {
  title: 'Desarrollo de Software a Medida - Aplicaciones Empresariales | Digital Frog',
  description: 'Desarrollo de software personalizado con aplicaciones empresariales, integración de IA y sistemas escalables. Soluciones de desarrollo full-stack.',
  keywords: 'desarrollo software personalizado, aplicaciones empresariales, integración IA, desarrollo full-stack, aplicaciones a medida',
  alternates: {
    canonical: '/es/servicios/software-a-medida',
    languages: { en: '/services/custom-software', es: '/es/servicios/software-a-medida' },
  },
};

export default function CustomSoftwarePageES() {
  return <CustomSoftware />;
}