import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlugSr, getRelatedPosts, getCategoryDisplayName } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, User } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import BlogPostLayout from '@/components/blog/BlogPostLayout';
import ClientBlogPost from '@/components/blog/ClientBlogPost';

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
      
      <BlogPostLayout post={post} relatedPosts={relatedPosts} language="sr">
        <ClientBlogPost post={post} language="sr">
          {/* Article Header */}
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
        </ClientBlogPost>
      </BlogPostLayout>
    </>
  );
}