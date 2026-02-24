import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlugSr, getRelatedPosts, getCategoryDisplayName } from '@/lib/blog';
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
    slug: post.slugSr,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlugSr(slug);

  if (!post) {
    return {
      title: 'Članak Nije Pronađen | Digital Frog',
      description: 'Članak bloga koji tražite ne postoji.',
    };
  }

  return {
    title: `${post.titleSr} | Digital Frog`,
    description: post.descriptionSr,
    alternates: {
      canonical: `/sr/blog/${post.slugSr}`,
      languages: {
        'en': `/blog/${post.slug}`,
        'es': `/es/blog/${post.slugEs}`,
        'sr': `/sr/blog/${post.slugSr}`
      }
    },
    openGraph: {
      title: post.titleSr,
      description: post.descriptionSr,
      url: `https://digitalfrog.co/sr/blog/${post.slugSr}`,
      type: 'article',
      locale: 'sr_RS',
      alternateLocale: ['en_US', 'es_ES'],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titleSr,
      description: post.descriptionSr,
    },
    keywords: post.tagsSr.join(', '),
  };
}

export default async function BlogPostPageSR({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlugSr(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.titleSr,
    "description": post.descriptionSr,
    "inLanguage": "sr",
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
      "@id": `https://digitalfrog.co/sr/blog/${post.slugSr}`
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
              href="/sr/blog"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nazad na blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary">
                {getCategoryDisplayName(post.category, 'sr')}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {post.readingTime} minuta čitanja
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.titleSr}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Od {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Objavljeno {new Date(post.publishedAt).toLocaleDateString('sr-RS', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              {post.updatedAt !== post.publishedAt && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Ažurirano {new Date(post.updatedAt).toLocaleDateString('sr-RS', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              )}
            </div>
            
            {post.tagsSr.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tagsSr.map((tag) => (
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
              dangerouslySetInnerHTML={{ __html: post.contentSr }}
            />
          </article>

          {/* CTA Section */}
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

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
                Povezani članci
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slugSr} className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {getCategoryDisplayName(relatedPost.category, 'sr')}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {relatedPost.readingTime} min čitanja
                        </div>
                      </div>
                      <CardTitle className="text-lg">
                        <Link 
                          href={`/sr/blog/${relatedPost.slugSr}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {relatedPost.titleSr}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {relatedPost.descriptionSr}
                      </p>
                      <Link href={`/sr/blog/${relatedPost.slugSr}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground">
                          Pročitaj više
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