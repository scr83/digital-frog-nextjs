import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getCategoryDisplayName } from '@/lib/blog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Blog - Desarrollo de Software y Automatización | Digital Frog',
  description: 'Contenido experto sobre desarrollo de software a medida, automatización de procesos y transformación digital para empresas en Chile.',
  keywords: 'blog desarrollo software, automatización procesos, transformación digital, tendencias tecnología',
  alternates: {
    canonical: '/es/blog',
    languages: {
      'en': '/blog',
      'es': '/es/blog',
      'sr': '/sr/blog'
    }
  },
  openGraph: {
    title: 'Blog - Desarrollo de Software y Automatización | Digital Frog',
    description: 'Contenido experto sobre desarrollo de software a medida, automatización de procesos y transformación digital para empresas en Chile.',
    url: 'https://digitalfrog.co/es/blog',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US', 'sr_RS']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Desarrollo de Software y Automatización | Digital Frog',
    description: 'Contenido experto sobre desarrollo de software a medida, automatización de procesos y transformación digital para empresas en Chile.'
  }
};

export default function BlogPageES() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Digital Frog Blog",
    "description": "Contenido experto sobre desarrollo de software a medida, automatización de procesos y transformación digital para empresas en Chile.",
    "url": "https://digitalfrog.co/es/blog",
    "inLanguage": "es",
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
      "headline": post.titleEs,
      "description": post.descriptionEs,
      "url": `https://digitalfrog.co/es/blog/${post.slugEs}`,
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
              Contenido experto sobre desarrollo de software, automatización y transformación digital
            </p>
          </div>

          {/* Blog Posts */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slugEs} className="bg-card border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {getCategoryDisplayName(post.category, 'es')}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readingTime} min de lectura
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/es/blog/${post.slugEs}`}>
                        {post.titleEs}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {post.descriptionEs}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <Link href={`/es/blog/${post.slugEs}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground">
                          Leer más
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
                  Próximamente
                </h2>
                <p className="text-muted-foreground mb-8">
                  Estamos preparando contenido experto sobre desarrollo de software, automatización y transformación digital. ¡Vuelve pronto!
                </p>
                <Link href="/es/contact">
                  <Button variant="gradient">
                    Comienza tu proyecto
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
                  ¿Listo para comenzar tu proyecto?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Conversemos sobre cómo podemos ayudarte a crecer con desarrollo de software personalizado y automatización.
                </p>
                <Link href="/es/contact">
                  <Button variant="gradient" size="lg">
                    Comenzar
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