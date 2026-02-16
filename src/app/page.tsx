import type { Metadata } from 'next';
import HomeContent from '@/components/pages/Index';

export const metadata: Metadata = {
  title: 'Digital Frog - Where Marketing Meets Engineering',
  description: 'Digital marketing agency that engineers complete systems for growth. SEO, web development, and automation delivered with precision.',
};

export default function HomePage() {
  return <HomeContent />;
}
