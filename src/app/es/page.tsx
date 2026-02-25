import type { Metadata } from 'next';
import HomeContent from '@/components/pages/Index';

export const metadata: Metadata = {
  title: 'Digital Frog - Donde el Marketing se Encuentra con la Ingeniería',
  description: 'Agencia de marketing digital que diseña sistemas completos para el crecimiento.',
  alternates: {
    canonical: 'https://digitalfrog.co/es',
    languages: { 
      en: 'https://digitalfrog.co/', 
      es: 'https://digitalfrog.co/es', 
      sr: 'https://digitalfrog.co/sr' 
    },
  },
};

export default function HomePageES() {
  return <HomeContent />;
}