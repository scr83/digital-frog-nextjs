import type { Metadata } from 'next';
import CustomSoftware from '@/components/pages/CustomSoftware';

export const metadata: Metadata = {
  title: 'Custom Software Development - Business Applications | Digital Frog',
  description: 'Custom software development with business applications, AI integration, and scalable systems. Full-stack development solutions.',
  keywords: 'custom software development, business applications, AI integration, full-stack development, custom applications',
  alternates: {
    canonical: '/services/custom-software',
    languages: { en: '/services/custom-software', es: '/es/servicios/software-a-medida' },
  },
};

export default function CustomSoftwarePage() {
  return <CustomSoftware />;
}