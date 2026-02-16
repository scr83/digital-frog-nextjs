import type { Metadata } from 'next';
import Portfolio from '@/components/pages/Portfolio';

export const metadata: Metadata = {
  title: 'Portafolio - Historias de Éxito de Digital Frog',
  description: 'Ve cómo Digital Frog ha ayudado a las empresas a crecer con optimización SEO, software personalizado y soluciones de automatización de marketing.',
  keywords: 'portafolio digital frog, casos de estudio SEO, proyectos desarrollo software, historias éxito clientes',
  alternates: {
    canonical: '/es/portfolio',
    languages: { en: '/portfolio', es: '/es/portfolio' },
  },
};

export default function PortfolioPageES() {
  return <Portfolio />;
}