import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getRelatedPosts, getCategoryDisplayName } from '@/lib/blog';
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
  const { t } = getTranslations('en');

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
      <BlogPostLayout
        post={post}
        relatedPosts={relatedPosts}
        language="en"
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
        getCategoryName={(category) => getCategoryDisplayName(category, 'en')}
        getTitle={(post) => post.title}
        getDescription={(post) => post.description}
        getSlug={(post) => post.slug}
        getContent={(post) => post.content}
        getTags={(post) => post.tags}
        basePath="/blog"
        homeUrl="/"
      />
    </>
  );
}