import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getCategoryDisplayName } from '@/lib/blog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Blog - Software Development & Automation Insights | Digital Frog',
  description: 'Expert insights on custom software development, process automation, and digital transformation for Chilean businesses.',
  keywords: 'software development blog, automation insights, digital transformation, technology trends',
  alternates: {
    canonical: '/blog',
    languages: {
      'en': '/blog',
      'es': '/es/blog',
      'sr': '/sr/blog'
    }
  },
  openGraph: {
    title: 'Blog - Software Development & Automation Insights | Digital Frog',
    description: 'Expert insights on custom software development, process automation, and digital transformation for Chilean businesses.',
    url: 'https://digitalfrog.co/blog',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES', 'sr_RS']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Software Development & Automation Insights | Digital Frog',
    description: 'Expert insights on custom software development, process automation, and digital transformation for Chilean businesses.'
  }
};

export default function BlogPage() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Digital Frog Blog",
    "description": "Expert insights on custom software development, process automation, and digital transformation for Chilean businesses.",
    "url": "https://digitalfrog.co/blog",
    "inLanguage": "en",
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
      "headline": post.title,
      "description": post.description,
      "url": `https://digitalfrog.co/blog/${post.slug}`,
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
              Expert insights on software development, automation, and digital transformation
            </p>
          </div>

          {/* Blog Posts */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} className="bg-card border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {getCategoryDisplayName(post.category, 'en')}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readingTime} min read
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground">
                          Read more
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
                  Coming soon
                </h2>
                <p className="text-muted-foreground mb-8">
                  We're preparing expert insights on software development, automation, and digital transformation. Check back soon!
                </p>
                <Link href="/contact">
                  <Button variant="gradient">
                    Start Your Project
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
          )}
        </div>
      </div>
    </>
  );
}