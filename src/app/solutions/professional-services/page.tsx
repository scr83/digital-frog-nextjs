import type { Metadata } from 'next';
import ProfessionalServices from '@/components/pages/ProfessionalServices';

export const metadata: Metadata = {
  title: 'Professional Services - Digital Strategy & Consulting | Digital Frog',
  description: 'Professional digital services with strategic consulting, technical audits, and comprehensive digital solutions for businesses.',
  keywords: 'professional services, digital consulting, technical audits, digital strategy, business consulting',
  alternates: {
    canonical: '/solutions/professional-services',
    languages: { en: '/solutions/professional-services', es: '/es/soluciones/servicios-profesionales' },
  },
};

export default function ProfessionalServicesPage() {
  return <ProfessionalServices />;
}