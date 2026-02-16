import type { Metadata } from 'next';
import About from '@/components/pages/About';

export const metadata: Metadata = {
  title: 'About Digital Frog - Where Engineering Meets Marketing',
  description: 'Learn about Digital Frog, where marketing meets engineering. We build complete digital systems that grow with your business.',
  keywords: 'about digital frog, marketing engineering, web development team, SEO experts',
  alternates: {
    canonical: '/about',
    languages: { en: '/about', es: '/es/about' },
  },
};

export default function AboutPage() {
  return <About />;
}