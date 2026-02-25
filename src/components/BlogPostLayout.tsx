import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ClientBlogPost } from '@/components/ClientBlogPost';
import { AuthorBio } from '@/components/AuthorBio';
import { RelatedPosts } from '@/components/RelatedPosts';
import type { BlogPost } from '@/lib/blog';

type Language = 'en' | 'es' | 'sr';

interface BlogPostLayoutProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  language: Language;
  translations: {
    backToBlog: string;
    breadcrumbHome: string;
    breadcrumbBlog: string;
    tableOfContents: string;
    shareArticle: string;
    copyLink: string;
    copied: string;
    continueReading: string;
    readArticle: string;
    minRead: string;
    publishedOn: string;
    writtenBy: string;
    authorBio: string;
    viewAllArticles: string;
  };
  getCategoryName: (category: string) => string;
  getTitle: (post: BlogPost) => string;
  getDescription: (post: BlogPost) => string;
  getSlug: (post: BlogPost) => string;
  getContent: (post: BlogPost) => string;
  getTags: (post: BlogPost) => string[];
  basePath: string; // '/blog', '/es/blog', '/sr/blog'
  homeUrl: string; // '/', '/es', '/sr'
}

export function BlogPostLayout({
  post,
  relatedPosts,
  language,
  translations,
  getCategoryName,
  getTitle,
  getDescription,
  getSlug,
  getContent,
  getTags,
  basePath,
  homeUrl
}: BlogPostLayoutProps) {
  const title = getTitle(post);
  const description = getDescription(post);
  const content = getContent(post);
  const tags = getTags(post);
  const slug = getSlug(post);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'es') {
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } else if (language === 'sr') {
      return date.toLocaleDateString('sr-RS', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-16">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumbs">
          <ol className="flex items-center space-x-2 text-slate-400">
            <li>
              <Link 
                href={homeUrl}
                className="hover:text-cyan-400 transition-colors"
              >
                {translations.breadcrumbHome}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link 
                href={basePath}
                className="hover:text-cyan-400 transition-colors"
              >
                {translations.breadcrumbBlog}
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-500 truncate">{title}</li>
          </ol>
        </nav>

        {/* Back to Blog */}
        <div className="mb-8">
          <Link 
            href={basePath}
            className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {translations.backToBlog}
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge 
              variant="secondary"
              className="bg-cyan-400/10 text-cyan-400 border-cyan-400/20"
            >
              {getCategoryName(post.category)}
            </Badge>
            <div className="flex items-center text-sm text-slate-400">
              <Clock className="w-4 h-4 mr-1" />
              {post.readingTime} {translations.minRead}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-outfit">
            {title}
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-slate-700">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {translations.writtenBy} {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {translations.publishedOn} {formatDate(post.publishedAt)}
              </div>
            </div>
          </div>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs border-slate-600 text-slate-400">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Client-side Blog Post Content with TOC and Share Buttons */}
        <ClientBlogPost
          content={content}
          title={title}
          url={`${basePath}/${slug}`}
          translations={{
            tableOfContents: translations.tableOfContents,
            shareArticle: translations.shareArticle,
            copyLink: translations.copyLink,
            copied: translations.copied
          }}
        />

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-slate-700 max-w-4xl">
          <AuthorBio
            authorName={post.author}
            authorBio={translations.authorBio}
            viewAllText={translations.viewAllArticles}
            blogPath={basePath}
          />
        </div>

        {/* Related Posts */}
        <RelatedPosts
          posts={relatedPosts.map(post => ({
            title: getTitle(post),
            description: getDescription(post),
            slug: getSlug(post),
            category: getCategoryName(post.category),
            readingTime: post.readingTime
          }))}
          title={translations.continueReading}
          readArticleText={translations.readArticle}
          minReadText={translations.minRead}
          basePath={basePath}
        />
      </div>
    </div>
  );
}

BlogPostLayout.displayName = 'BlogPostLayout';