import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

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
          <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Digital Frog",
            "url": "https://digitalfrog.co",
            "logo": "https://digitalfrog.co/Logo-Digital-Frog.png",
            "description": "Digital marketing agency that engineers complete systems for growth. SEO, web development, and automation.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Los Militares 5620, Of.905",
              "addressLocality": "Las Condes, Santiago",
              "addressCountry": "CL"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+56-9-9973-0352",
              "email": "sebastian@digitalfrog.co",
              "contactType": "sales"
            },
            "sameAs": []
          }} />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
