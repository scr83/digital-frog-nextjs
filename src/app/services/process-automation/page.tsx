import type { Metadata } from 'next';
import ProcessAutomation from '@/components/pages/ProcessAutomation';

export const metadata: Metadata = {
  title: 'Process Automation - Business Operations Optimization | Digital Frog',
  description: 'Business process automation services with operations optimization, workflow engineering, and systematic automation solutions.',
  keywords: 'process automation, business operations, workflow optimization, automated processes, operations engineering',
  alternates: {
    canonical: '/services/process-automation',
    languages: { en: '/services/process-automation', es: '/es/servicios/automatizacion-procesos' },
  },
};

export default function ProcessAutomationPage() {
  return <ProcessAutomation />;
}