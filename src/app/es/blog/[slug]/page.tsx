import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlugEs, getRelatedPosts, getCategoryDisplayName } from '@/lib/blog';
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
      
      <BlogPostLayout post={post} relatedPosts={relatedPosts} language="es">
        <ClientBlogPost post={post} language="es">
          {/* Article Header */}
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
        </ClientBlogPost>
      </BlogPostLayout>
    </>
  );
}