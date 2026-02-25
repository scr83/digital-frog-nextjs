import type { Metadata } from 'next';
import Contact from '@/components/pages/Contact';

export const metadata: Metadata = {
  title: 'Contacto Digital Frog - Construyamos Algo Genial Juntos',
  description: '¿Listo para transformar tu presencia digital? Contacta Digital Frog para servicios SEO, desarrollo de software personalizado y automatización de marketing.',
  keywords: 'contacto digital frog, consultoría SEO, cotización desarrollo software, automatización marketing',
  alternates: {
    canonical: 'https://digitalfrog.co/es/contact',
    languages: { 
      en: 'https://digitalfrog.co/contact', 
      es: 'https://digitalfrog.co/es/contact', 
      sr: 'https://digitalfrog.co/sr/contact' 
    },
  },
};

export default function ContactPageES() {
  return <Contact />;
}