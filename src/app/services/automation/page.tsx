import type { Metadata } from 'next';
import AutomationServices from '@/components/pages/AutomationServices';

export const metadata: Metadata = {
  title: 'Marketing Automation Services - Workflow Engineering | Digital Frog',
  description: 'Professional marketing automation services with workflow engineering, AI-powered systems, and business process optimization.',
  keywords: 'marketing automation, workflow automation, business process optimization, automated marketing systems',
  alternates: {
    canonical: '/services/automation',
    languages: { en: '/services/automation', es: '/es/servicios/automatizacion' },
  },
};

export default function AutomationServicesPage() {
  return <AutomationServices />;
}