'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { getTranslations, type Language as TranslationLanguage } from '@/lib/translations';

type Language = 'en' | 'es' | 'sr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const isSpanish = pathname?.startsWith('/es');
    const isSerbian = pathname?.startsWith('/sr');
    if (isSerbian) {
      setLanguage('sr');
    } else if (isSpanish) {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  }, [pathname]);

  const t = (key: string): any => {
    const translationFn = getTranslations(language as TranslationLanguage).t;
    const result = translationFn(key);
    return result !== undefined ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
