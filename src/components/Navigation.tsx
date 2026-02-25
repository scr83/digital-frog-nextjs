'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LanguageToggle, MobileLanguageToggle } from '@/components/client/LanguageToggle';
import { useScrollNavigation } from '@/components/client/ScrollNavigation';
import { MobileMenu } from '@/components/client/MobileMenu';
import { Logo } from '@/components/Logo';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const pathname = usePathname();
  const { isScrolled } = useScrollNavigation();
  const { t, language } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (language === 'es') {
      return path === '/' ? '/es' : `/es${path}`;
    }
    if (language === 'sr') {
      return path === '/' ? '/sr' : `/sr${path}`;
    }
    return path;
  };

  const navLinks = [
    { href: getLocalizedPath('/services'), label: t('nav.services') },
    { href: getLocalizedPath('/portfolio'), label: t('nav.portfolio') },
    { href: getLocalizedPath('/about'), label: t('nav.about') },
    { href: getLocalizedPath('/contact'), label: t('nav.contact') },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const element = document.querySelector(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (pathname !== '/') {
        window.location.href = href;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href={getLocalizedPath('/')}>
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: Language Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle currentLanguage={language} />

            <Link href={getLocalizedPath('/contact')}>
              <Button variant="gradient" size="default">
                {t('nav.cta')}
              </Button>
            </Link>
          </div>

          <MobileMenu>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground py-2 border-b border-border/50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              
              <MobileLanguageToggle currentLanguage={language} />

              <Link href={getLocalizedPath('/contact')} className="mt-2">
                <Button variant="gradient" size="lg" className="w-full">
                  {t('nav.cta')}
                </Button>
              </Link>
            </div>
          </MobileMenu>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
