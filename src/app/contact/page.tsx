import type { Metadata } from 'next';
import Contact from '@/components/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Digital Frog - Let\'s Build Something Great Together',
  description: 'Ready to transform your digital presence? Contact Digital Frog for SEO services, custom software development, and marketing automation.',
  keywords: 'contact digital frog, SEO consultation, software development quote, marketing automation',
  alternates: {
    canonical: 'https://digitalfrog.co/contact',
    languages: { 
      en: 'https://digitalfrog.co/contact', 
      es: 'https://digitalfrog.co/es/contact', 
      sr: 'https://digitalfrog.co/sr/contact' 
    },
  },
};

export default function ContactPage() {
  return <Contact />;
}