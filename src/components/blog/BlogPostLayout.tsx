import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import TableOfContents from './TableOfContents';
import ShareButtons from './ShareButtons';
// AuthorBio removed per BUG 6 fix
import RelatedPosts from './RelatedPosts';
import { BlogPost } from '@/lib/blog';

interface BlogPostLayoutProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  children: ReactNode;
  language: 'en' | 'es' | 'sr';
}

export default function BlogPostLayout({ 
  post, 
  relatedPosts, 
  children, 
  language 
}: BlogPostLayoutProps) {
  const getBackText = () => {
    switch (language) {
      case 'es': return 'Volver al blog';
      case 'sr': return 'Nazad na blog';
      default: return 'Back to blog';
    }
  };

  const getBackHref = () => {
    switch (language) {
      case 'es': return '/es/blog';
      case 'sr': return '/sr/blog';
      default: return '/blog';
    }
  };

  const getCtaText = () => {
    switch (language) {
      case 'es': return {
        title: '¿Listo para comenzar tu proyecto?',
        description: 'Discutamos cómo podemos ayudarte a crecer con desarrollo de software personalizado y automatización.',
        button: 'Comenzar'
      };
      case 'sr': return {
        title: 'Spremni da pokrenete projekat?',
        description: 'Razgovarajmo o tome kako možemo da vam pomognemo da rastete sa razvojem softvera po meri i automatizacijom.',
        button: 'Počni'
      };
      default: return {
        title: 'Ready to start your project?',
        description: 'Let\'s discuss how we can help you grow with custom software development and automation.',
        button: 'Get Started'
      };
    }
  };

  const getRelatedPostsText = () => {
    switch (language) {
      case 'es': return 'Artículos relacionados';
      case 'sr': return 'Povezani članci';
      default: return 'Related posts';
    }
  };

  const getContactHref = () => {
    switch (language) {
      case 'es': return '/es/contact';
      case 'sr': return '/sr/contact';
      default: return '/contact';
    }
  };

  const ctaContent = getCtaText();

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container pt-24 pb-16">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link 
            href={getBackHref()}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {getBackText()}
          </Link>
        </div>

        {/* Main Content Grid - TOC LEFT, Content RIGHT */}
        <div className="flex gap-8 max-w-6xl mx-auto">
          {/* LEFT: TOC sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <TableOfContents post={post} language={language} />
              
              {/* Share Buttons */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center">
                  <span className="w-2 h-2 bg-lime rounded-full mr-2"></span>
                  {language === 'es' ? 'Compartir' : language === 'sr' ? 'Podeli' : 'Share'}
                </h3>
                <ShareButtons post={post} language={language} />
              </div>
            </div>
          </aside>
          
          {/* RIGHT: Content */}
          <article className="flex-1 min-w-0 max-w-3xl">
            {/* Article Header */}
            <header className="mb-12">
              {children}
            </header>
            {/* Article content is rendered by ClientBlogPost component */}
          </article>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan/10 to-lime/5 border border-lime/30 rounded-lg p-8 max-w-2xl mx-auto relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-lime"></div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {ctaContent.title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {ctaContent.description}
            </p>
            <Link 
              href={getContactHref()}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan to-lime text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {ctaContent.button}
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} language={language} title={getRelatedPostsText()} />
      </div>
    </div>
  );
}