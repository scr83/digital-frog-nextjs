import type { Metadata } from 'next';
import WebDevelopment from '@/components/pages/WebDevelopment';

export const metadata: Metadata = {
  title: 'Web Development - Next.js & Custom Applications | Digital Frog',
  description: 'Professional web development services with Next.js, React, and custom applications. High-performance websites and e-commerce platforms.',
  keywords: 'web development, Next.js development, React applications, e-commerce development, custom websites',
  alternates: {
    canonical: '/services/web-development',
    languages: { en: '/services/web-development', es: '/es/servicios/desarrollo-web' },
  },
};

export default function WebDevelopmentPage() {
  return <WebDevelopment />;
}