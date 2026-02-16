import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: {
    default: 'Digital Frog - Where Marketing Meets Engineering',
    template: '%s | Digital Frog',
  },
  description: 'Digital marketing agency that engineers complete systems for growth.',
  metadataBase: new URL('https://digitalfrog.co'),
  verification: {
    google: 'Lm-BZKXzWTnZot2QTvqY-ltfunMHEwwuxOfg7Ss9RWc',
  },
  icons: {
    icon: '/Logo-Digital-Frog.png',
    apple: '/Logo-Digital-Frog.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-gray-950 text-white antialiased">
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
