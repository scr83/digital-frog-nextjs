import type { Metadata } from 'next';
import Contact from '@/components/pages/Contact';

export const metadata: Metadata = {
  title: 'Kontakt - Digital Frog | Hajde da Izgradimo Nešto Odlično',
  description: 'Spremni da transformišete svoju digitalnu prisutnost? Kontaktirajte Digital Frog za SEO usluge, razvoj softvera po meri i automatizaciju marketinga.',
  keywords: 'kontakt digital frog, SEO konsultacije, ponuda razvoj softvera, automatizacija marketinga',
  alternates: {
    canonical: 'https://digitalfrog.co/sr/contact',
    languages: { 
      en: 'https://digitalfrog.co/contact', 
      es: 'https://digitalfrog.co/es/contact', 
      sr: 'https://digitalfrog.co/sr/contact' 
    },
  },
  openGraph: {
    title: 'Kontakt - Digital Frog | Hajde da Izgradimo Nešto Odlično',
    description: 'Spremni da transformišete svoju digitalnu prisutnost? Kontaktirajte Digital Frog.',
    url: 'https://digitalfrog.co/sr/contact',
    siteName: 'Digital Frog',
    locale: 'sr_RS',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPageSR() {
  return <Contact />;
}