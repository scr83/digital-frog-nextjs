import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlugSr, getRelatedPosts, getCategoryDisplayName } from '@/lib/blog';
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
  const { t } = getTranslations('sr');

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
      <BlogPostLayout
        post={post}
        relatedPosts={relatedPosts}
        language="sr"
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
        getCategoryName={(category) => getCategoryDisplayName(category, 'sr')}
        getTitle={(post) => post.titleSr}
        getDescription={(post) => post.descriptionSr}
        getSlug={(post) => post.slugSr}
        getContent={(post) => post.contentSr}
        getTags={(post) => post.tagsSr}
        basePath="/sr/blog"
        homeUrl="/sr"
      />
    </>
  );
}