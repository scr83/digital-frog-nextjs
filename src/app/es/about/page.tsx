import type { Metadata } from 'next';
import About from '@/components/pages/About';

export const metadata: Metadata = {
  title: 'Acerca de Digital Frog - Donde la Ingeniería se Encuentra con el Marketing',
  description: 'Conoce Digital Frog, donde el marketing se encuentra con la ingeniería. Construimos sistemas digitales completos que crecen con tu negocio.',
  keywords: 'acerca de digital frog, ingeniería marketing, equipo desarrollo web, expertos SEO',
  alternates: {
    canonical: '/es/about',
    languages: { en: '/about', es: '/es/about' },
  },
};

export default function AboutPageES() {
  return <About />;
}