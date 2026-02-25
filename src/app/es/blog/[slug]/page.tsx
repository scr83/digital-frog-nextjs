import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlugEs, getRelatedPosts, getCategoryDisplayName } from '@/lib/blog';
import { BlogPostLayout } from '@/components/BlogPostLayout';
import { getTranslations } from '@/lib/translations';
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
  const { t } = getTranslations('es');

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
      <BlogPostLayout
        post={post}
        relatedPosts={relatedPosts}
        language="es"
        translations={{
          backToBlog: t('blog.backToBlog'),
          breadcrumbHome: t('blog.breadcrumbHome'),
          breadcrumbBlog: t('blog.breadcrumbBlog'),
          tableOfContents: t('blog.tableOfContents'),
          shareArticle: t('blog.shareArticle'),
          copyLink: t('blog.copyLink'),
          copied: t('blog.copied'),
          continueReading: t('blog.continueReading'),
          readArticle: t('blog.readArticle'),
          minRead: t('blog.minRead'),
          publishedOn: t('blog.publishedOn'),
          writtenBy: t('blog.writtenBy'),
          authorBio: t('blog.authorBio'),
          viewAllArticles: t('blog.viewAllArticles')
        }}
        getCategoryName={(category) => getCategoryDisplayName(category, 'es')}
        getTitle={(post) => post.titleEs}
        getDescription={(post) => post.descriptionEs}
        getSlug={(post) => post.slugEs}
        getContent={(post) => post.contentEs}
        getTags={(post) => post.tagsEs}
        basePath="/es/blog"
        homeUrl="/es"
      />
    </>
  );
}