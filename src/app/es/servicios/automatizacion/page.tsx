import type { Metadata } from 'next';
import AutomationServices from '@/components/pages/AutomationServices';

export const metadata: Metadata = {
  title: 'Servicios de Automatización de Marketing - Ingeniería de Flujos de Trabajo | Digital Frog',
  description: 'Servicios profesionales de automatización de marketing con ingeniería de flujos de trabajo, sistemas potenciados por IA y optimización de procesos empresariales.',
  keywords: 'automatización marketing, automatización flujos trabajo, optimización procesos empresariales, sistemas marketing automatizados',
  alternates: {
    canonical: '/es/servicios/automatizacion',
    languages: { en: '/services/automation', es: '/es/servicios/automatizacion' },
  },
};

export default function AutomationServicesPageES() {
  return <AutomationServices />;
}