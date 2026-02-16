import { useState, useEffect } from 'react';

/**
 * Client component for scroll-based navigation state
 * Isolates client-side scroll detection logic
 */
export function useScrollNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrolled };
}