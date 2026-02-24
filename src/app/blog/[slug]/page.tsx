import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getRelatedPosts, getCategoryDisplayName } from '@/lib/blog';
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
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Digital Frog',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | Digital Frog`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
      languages: {
        'en': `/blog/${post.slug}`,
        'es': `/es/blog/${post.slugEs}`,
        'sr': `/sr/blog/${post.slugSr}`
      }
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://digitalfrog.co/blog/${post.slug}`,
      type: 'article',
      locale: 'en_US',
      alternateLocale: ['es_ES', 'sr_RS'],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    keywords: post.tags.join(', '),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "inLanguage": "en",
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
      "@id": `https://digitalfrog.co/blog/${post.slug}`
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
              href="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary">
                {getCategoryDisplayName(post.category, 'en')}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {post.readingTime} minutes read
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                By {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              {post.updatedAt !== post.publishedAt && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Updated on {new Date(post.updatedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              )}
            </div>
            
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
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
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Ready to start your project?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help you grow with custom software development and automation.
              </p>
              <Link href="/contact">
                <Button variant="gradient" size="lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
                Related posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {getCategoryDisplayName(relatedPost.category, 'en')}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {relatedPost.readingTime} min read
                        </div>
                      </div>
                      <CardTitle className="text-lg">
                        <Link 
                          href={`/blog/${relatedPost.slug}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {relatedPost.description}
                      </p>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground">
                          Read more
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