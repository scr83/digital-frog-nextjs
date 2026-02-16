import type { Metadata } from 'next';
import SEOServices from '@/components/pages/SEOServices';

export const metadata: Metadata = {
  title: 'SEO Services - Technical SEO Optimization | Digital Frog',
  description: 'Professional SEO services with technical optimization, performance monitoring, and systematic content strategy. 90+ PageSpeed guarantee.',
  keywords: 'SEO services, technical SEO, PageSpeed optimization, SEO audit, search engine optimization',
  alternates: {
    canonical: '/services/seo',
    languages: { en: '/services/seo', es: '/es/servicios/seo' },
  },
};

export default function SEOServicesPage() {
  return <SEOServices />;
}