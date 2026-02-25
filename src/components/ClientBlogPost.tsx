'use client';

import { useRef } from 'react';
import { TableOfContents } from '@/components/TableOfContents';
import { ShareButtons } from '@/components/ShareButtons';

interface ClientBlogPostProps {
  content: string;
  title: string;
  url: string;
  translations: {
    tableOfContents: string;
    shareArticle: string;
    copyLink: string;
    copied: string;
  };
}

export function ClientBlogPost({ content, title, url, translations }: ClientBlogPostProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Mobile TOC */}
      <TableOfContents 
        contentRef={contentRef} 
        title={translations.tableOfContents} 
      />

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
        {/* Desktop Sidebar TOC */}
        <aside className="hidden lg:block">
          <TableOfContents 
            contentRef={contentRef} 
            title={translations.tableOfContents} 
          />
        </aside>
        
        {/* Main Content */}
        <main className="max-w-none">
          {/* Share Buttons Row */}
          <div className="mb-8 flex justify-end">
            <ShareButtons
              title={title}
              url={url}
              shareText={translations.shareArticle}
              copyLinkText={translations.copyLink}
              copiedText={translations.copied}
            />
          </div>

          <article 
            ref={contentRef}
            className="blog-content prose prose-lg max-w-none" 
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </main>
      </div>
    </>
  );
}

ClientBlogPost.displayName = 'ClientBlogPost';