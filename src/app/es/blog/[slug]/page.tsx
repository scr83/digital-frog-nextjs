import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlugEs, getRelatedPosts, getCategoryDisplayName } from '@/lib/blog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, ArrowLeft, ArrowRight, User } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slugEs,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlugEs(slug);

  if (!post) {
    return {
      title: 'Artículo No Encontrado | Digital Frog',
      description: 'El artículo del blog que estás buscando no existe.',
    };
  }

  return {
    title: `${post.titleEs} | Digital Frog`,
    description: post.descriptionEs,
    alternates: {
      canonical: `/es/blog/${post.slugEs}`,
      languages: {
        'en': `/blog/${post.slug}`,
        'es': `/es/blog/${post.slugEs}`,
        'sr': `/sr/blog/${post.slugSr}`
      }
    },
    openGraph: {
      title: post.titleEs,
      description: post.descriptionEs,
      url: `https://digitalfrog.co/es/blog/${post.slugEs}`,
      type: 'article',
      locale: 'es_ES',
      alternateLocale: ['en_US', 'sr_RS'],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titleEs,
      description: post.descriptionEs,
    },
    keywords: post.tagsEs.join(', '),
  };
}

export default async function BlogPostPageES({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlugEs(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.titleEs,
    "description": post.descriptionEs,
    "inLanguage": "es",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Frog",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digitalfrog.co/Logo-Digital-Frog.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://digitalfrog.co/es/blog/${post.slugEs}`
    }
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      
      <div className="min-h-screen bg-background">
        <div className="section-container pt-24 pb-16">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link 
              href="/es/blog"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary">
                {getCategoryDisplayName(post.category, 'es')}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {post.readingTime} minutos de lectura
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.titleEs}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Por {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Publicado el {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              {post.updatedAt !== post.publishedAt && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Actualizado el {new Date(post.updatedAt).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              )}
            </div>
            
            {post.tagsEs.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tagsEs.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.contentEs }}
            />
          </article>

          {/* CTA Section */}
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

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
                Artículos relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slugEs} className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {getCategoryDisplayName(relatedPost.category, 'es')}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {relatedPost.readingTime} min lectura
                        </div>
                      </div>
                      <CardTitle className="text-lg">
                        <Link 
                          href={`/es/blog/${relatedPost.slugEs}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {relatedPost.titleEs}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {relatedPost.descriptionEs}
                      </p>
                      <Link href={`/es/blog/${relatedPost.slugEs}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground">
                          Leer más
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}