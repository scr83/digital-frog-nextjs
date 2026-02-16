'use client';

import { useRouter, usePathname } from 'next/navigation';
import { getLanguageSwitchPath } from '@/lib/translations';

interface LanguageToggleProps {
  currentLanguage: 'en' | 'es';
  className?: string;
}

/**
 * Client component for language toggle - only handles the interactive part
 */
export function LanguageToggle({ currentLanguage, className = "" }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: 'en' | 'es') => {
    // Save preference
    localStorage.setItem('digitalfrog-lang', newLang);
    
    // Get the correct path for the target language using proper route mapping
    const targetPath = getLanguageSwitchPath(pathname, newLang);
    
    // Navigate to new language path
    router.push(targetPath);
  };

  return (
    <div className={`flex items-center rounded-full glass p-1 ${className}`}>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          currentLanguage === 'en'
            ? 'bg-gray-700 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('es')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          currentLanguage === 'es'
            ? 'bg-gray-700 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        ES
      </button>
    </div>
  );
}

interface MobileLanguageToggleProps {
  currentLanguage: 'en' | 'es';
  className?: string;
}

export function MobileLanguageToggle({ currentLanguage, className = "" }: MobileLanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: 'en' | 'es') => {
    // Save preference
    localStorage.setItem('digitalfrog-lang', newLang);
    
    // Get the correct path for the target language using proper route mapping
    const targetPath = getLanguageSwitchPath(pathname, newLang);
    
    // Navigate to new language path
    router.push(targetPath);
  };

  return (
    <div className={`flex items-center gap-2 py-2 ${className}`}>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          currentLanguage === 'en'
            ? 'bg-gray-700 text-white'
            : 'bg-gray-800 text-gray-400'
        }`}
      >
        English
      </button>
      <button
        onClick={() => switchLanguage('es')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          currentLanguage === 'es'
            ? 'bg-gray-700 text-white'
            : 'bg-gray-800 text-gray-400'
        }`}
      >
        Español
      </button>
    </div>
  );
}