'use client';

import Link from 'next/link';
import { 
  Search, 
  Code, 
  CheckCircle, 
  Clock, 
  Users, 
  FileText, 
  ArrowRight,
  Zap,
  Database,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t, language } = useLanguage();


  const seoFeatures = [
    { icon: Search, text: t('services.seo.feature1') },
    { icon: FileText, text: t('services.seo.feature2') },
    { icon: Zap, text: t('services.seo.feature3') },
    { icon: CheckCircle, text: t('services.seo.feature4') },
  ];

  const seoDeliverables = [
    t('services.seo.deliverable1'),
    t('services.seo.deliverable2'),
    t('services.seo.deliverable3'),
    t('services.seo.deliverable4'),
  ];

  const platforms = [
    'WordPress + Elementor',
    'Shopify',
    'Wix',
    'Webnode',
  ];

  const frontendTech = [
    'Next.js 14+ (App Router, SSR)',
    'TypeScript 5.x strict mode',
    'React 18+',
    'Tailwind CSS 4.x',
    'React Hook Form + Zod',
    'Zustand state management',
    '@react-pdf/renderer',
    'Resend email',
  ];

  const backendTech = [
    'Next.js API Routes',
    'PostgreSQL (Vercel Postgres)',
    'Prisma ORM',
    'NextAuth.js authentication',
    'bcrypt security',
  ];

  const infrastructure = [
    'Vercel Pro (SSL, CDN, CI/CD)',
    'Vercel Postgres (managed)',
    'Vercel Blob (file storage)',
  ];

  const devDeliverables = [
    t('services.dev.deliverable1'),
    t('services.dev.deliverable2'),
    t('services.dev.deliverable3'),
    t('services.dev.deliverable4'),
    t('services.dev.deliverable5'),
  ];

  const processSteps = [
    { step: 1, title: t('services.process.step1'), description: t('services.process.desc1') },
    { step: 2, title: t('services.process.step2'), description: t('services.process.desc2') },
    { step: 3, title: t('services.process.step3'), description: t('services.process.desc3') },
    { step: 4, title: t('services.process.step4'), description: t('services.process.desc4') },
    { step: 5, title: t('services.process.step5'), description: t('services.process.desc5') },
  ];

  return (
      <main className="min-h-screen bg-gradient-hero pt-24 pb-16">
        <div className="section-container">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-hero">{t('services.title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* SEO Service */}
        <div className="mb-24 animate-fade-up animation-delay-100">
          <div className="glass rounded-2xl p-8 md:p-12">
            {/* SEO Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Search className="text-primary" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-2">
                  {t('services.seo.title')}
                </h2>
                <p className="text-muted-foreground">{t('services.seo.badge')}</p>
              </div>
            </div>

            {/* What it is */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('services.seo.what.title')}</h3>
              <p className="text-muted-foreground mb-6">{t('services.seo.what.description')}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {seoFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className="text-primary" size={20} />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who it's for */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('services.seo.who.title')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-0.5" size={18} />
                  <span className="text-sm text-muted-foreground">{t('services.seo.who.target1')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-0.5" size={18} />
                  <span className="text-sm text-muted-foreground">{t('services.seo.who.target2')}</span>
                </div>
              </div>
            </div>

            {/* Platforms */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('services.seo.platforms.title')}</h3>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full glass text-sm font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">{t('services.seo.platforms.note')}</p>
            </div>

            {/* Timeline & Deliverables Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Timeline */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="text-primary" size={20} />
                  {t('services.seo.timeline.title')}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">{t('services.seo.timeline.audit')}</span>
                    <span className="text-sm text-muted-foreground">{t('services.seo.timeline.audit_time')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">{t('services.seo.timeline.implementation')}</span>
                    <span className="text-sm text-muted-foreground">{t('services.seo.timeline.implementation_time')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">{t('services.seo.timeline.results')}</span>
                    <span className="text-sm text-muted-foreground">{t('services.seo.timeline.results_time')}</span>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="text-primary" size={20} />
                  {t('services.seo.deliverables.title')}
                </h3>
                <div className="space-y-2">
                  {seoDeliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-secondary mt-0.5" size={16} />
                      <span className="text-sm text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-bold text-gradient">{t('services.seo.pricing')}</p>
                <p className="text-sm text-muted-foreground">{t('services.seo.pricing_note')}</p>
              </div>
              <Link href="/contact">
                <Button variant="gradient" size="lg" className="group">
                  {t('services.seo.cta')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Software Development Service */}
        <div className="mb-24 animate-fade-up animation-delay-200">
          <div className="glass rounded-2xl p-8 md:p-12">
            {/* Dev Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-secondary/10">
                <Code className="text-secondary" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-2">
                  {t('services.dev.title')}
                </h2>
                <p className="text-muted-foreground">{t('services.dev.badge')}</p>
              </div>
            </div>

            {/* What it is */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('services.dev.what.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('services.dev.what.description')}</p>
              <p className="text-muted-foreground">{t('services.dev.what.migration')}</p>
            </div>

            {/* Who it's for */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('services.dev.who.title')}</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-0.5" size={18} />
                  <span className="text-sm text-muted-foreground">{t('services.dev.who.target1')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-0.5" size={18} />
                  <span className="text-sm text-muted-foreground">{t('services.dev.who.target2')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-0.5" size={18} />
                  <span className="text-sm text-muted-foreground">{t('services.dev.who.target3')}</span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Database className="text-primary" size={20} />
                {t('services.dev.tech.title')}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Frontend */}
                <div>
                  <h4 className="text-lg font-medium mb-3 text-primary">Frontend</h4>
                  <div className="space-y-2">
                    {frontendTech.map((tech, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-lg font-medium mb-3 text-secondary">Backend</h4>
                  <div className="space-y-2">
                    {backendTech.map((tech, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Infrastructure */}
                <div>
                  <h4 className="text-lg font-medium mb-3 text-gradient">Infrastructure</h4>
                  <div className="space-y-2">
                    {infrastructure.map((tech, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline & Deliverables Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Timeline */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="text-primary" size={20} />
                  {t('services.dev.timeline.title')}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">{t('services.dev.timeline.discovery')}</span>
                    <span className="text-sm text-muted-foreground">{t('services.dev.timeline.discovery_time')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">{t('services.dev.timeline.development')}</span>
                    <span className="text-sm text-muted-foreground">{t('services.dev.timeline.development_time')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">{t('services.dev.timeline.deployment')}</span>
                    <span className="text-sm text-muted-foreground">{t('services.dev.timeline.deployment_time')}</span>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="text-primary" size={20} />
                  {t('services.dev.deliverables.title')}
                </h3>
                <div className="space-y-2">
                  {devDeliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-secondary mt-0.5" size={16} />
                      <span className="text-sm text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-border/50 pt-8 text-center">
              <Link href="/contact">
                <Button variant="gradient" size="lg" className="group">
                  {t('services.dev.cta')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16 animate-fade-up animation-delay-300">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('services.process.title')}</h2>
            <p className="text-muted-foreground">{t('services.process.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{step.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center animate-fade-up animation-delay-400">
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">{t('services.final_cta.title')}</h2>
            <p className="text-muted-foreground mb-6">{t('services.final_cta.description')}</p>
            <Link href="/contact">
              <Button variant="hero" size="xl" className="group">
                {t('services.final_cta.button')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </main>
  );
};

export default Services;