import type { Metadata } from 'next';
import ProfessionalServices from '@/components/pages/ProfessionalServices';

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
  return <ProfessionalServices />;
}