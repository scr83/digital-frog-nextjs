'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/Logo';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Logo size="md" />
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={language === 'es' ? '/es/servicios/seo' : '/services/seo'} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('footer.seo')}
                </Link>
              </li>
              <li>
                <Link href={language === 'es' ? '/es/servicios/desarrollo-web' : '/services/web-development'} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('footer.webdev')}
                </Link>
              </li>
              <li>
                <Link href={language === 'es' ? '/es/servicios/automatizacion' : '/services/automation'} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('footer.automation')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={language === 'es' ? '/es/about' : language === 'sr' ? '/sr/about' : '/about'} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href={language === 'es' ? '/es/portfolio' : language === 'sr' ? '/sr/portfolio' : '/portfolio'} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('footer.portfolio')}
                </Link>
              </li>
              <li>
                <Link href={language === 'es' ? '/es/blog' : language === 'sr' ? '/sr/blog' : '/blog'} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link href={language === 'es' ? '/es/contact' : language === 'sr' ? '/sr/contact' : '/contact'} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:jump@digitalfrog.co"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail size={16} />
                  jump@digitalfrog.co
                </a>
              </li>
              <li>
                <a
                  href="tel:+56999730352"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone size={16} />
                  +56 9 9973 0352
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin size={16} />
                  Los Militares 5620, Of.905, Las Condes, Santiago, Chile
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
