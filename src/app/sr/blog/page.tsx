import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getCategoryDisplayName } from '@/lib/blog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Blog - Razvoj Softvera i Automatizacija | Digital Frog',
  description: 'Stručni uvidi o razvoju softvera po meri, automatizaciji procesa i digitalnoj transformaciji za preduzeća.',
  keywords: 'blog razvoj softvera, automatizacija procesa, digitalna transformacija, tehnološki trendovi',
  alternates: {
    canonical: '/sr/blog',
    languages: {
      'en': '/blog',
      'es': '/es/blog',
      'sr': '/sr/blog'
    }
  },
  openGraph: {
    title: 'Blog - Razvoj Softvera i Automatizacija | Digital Frog',
    description: 'Stručni uvidi o razvoju softvera po meri, automatizaciji procesa i digitalnoj transformaciji za preduzeća.',
    url: 'https://digitalfrog.co/sr/blog',
    type: 'website',
    locale: 'sr_RS',
    alternateLocale: ['en_US', 'es_ES']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Razvoj Softvera i Automatizacija | Digital Frog',
    description: 'Stručni uvidi o razvoju softvera po meri, automatizaciji procesa i digitalnoj transformaciji za preduzeća.'
  }
};

export default function BlogPageSR() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Digital Frog Blog",
    "description": "Stručni uvidi o razvoju softvera po meri, automatizaciji procesa i digitalnoj transformaciji za preduzeća.",
    "url": "https://digitalfrog.co/sr/blog",
    "inLanguage": "sr",
    "publisher": {
      "@type": "Organization",
      "name": "Digital Frog",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digitalfrog.co/Logo-Digital-Frog.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.titleSr,
      "description": post.descriptionSr,
      "url": `https://digitalfrog.co/sr/blog/${post.slugSr}`,
      "datePublished": post.publishedAt,
      "dateModified": post.updatedAt,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      
      <div className="min-h-screen bg-background">
        <div className="section-container pt-24 pb-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stručni uvidi o razvoju softvera, automatizaciji i digitalnoj transformaciji
            </p>
          </div>

          {/* Blog Posts */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slugSr} className="bg-card border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {getCategoryDisplayName(post.category, 'sr')}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readingTime} minuta čitanja
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/sr/blog/${post.slugSr}`}>
                        {post.titleSr}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {post.descriptionSr}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString('sr-RS', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <Link href={`/sr/blog/${post.slugSr}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground">
                          Pročitaj više
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Coming Soon State */
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Uskoro
                </h2>
                <p className="text-muted-foreground mb-8">
                  Pripremamo stručne uvide o razvoju softvera, automatizaciji i digitalnoj transformaciji. Vratite se uskoro!
                </p>
                <Link href="/sr/contact">
                  <Button variant="gradient">
                    Pokrenite projekat
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* CTA Section */}
          {posts.length > 0 && (
            <div className="mt-16 text-center">
              <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Spremni da pokrenete projekat?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Razgovarajmo o tome kako možemo da vam pomognemo da rastete sa razvojem softvera po meri i automatizacijom.
                </p>
                <Link href="/sr/contact">
                  <Button variant="gradient" size="lg">
                    Počni
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}