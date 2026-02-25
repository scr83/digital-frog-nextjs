'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '@/lib/blog';
import { removeDuplicateTOC, addHeadingIds } from '@/lib/toc-utils';

interface ClientBlogPostProps {
  post: BlogPost;
  language: 'en' | 'es' | 'sr';
  children?: React.ReactNode;
}

export default function ClientBlogPost({ post, language, children }: ClientBlogPostProps) {
  const [processedContent, setProcessedContent] = useState<string>('');

  useEffect(() => {
    // Get the appropriate content based on language
    let content: string;
    switch (language) {
      case 'es':
        content = post.contentEs || post.content;
        break;
      case 'sr':
        content = post.contentSr || post.content;
        break;
      default:
        content = post.content;
        break;
    }

    // Process the content: remove duplicate TOC and add heading IDs
    const cleanedContent = removeDuplicateTOC(content);
    const contentWithIds = addHeadingIds(cleanedContent);
    
    setProcessedContent(contentWithIds);
  }, [post, language]);

  return (
    <>
      {children}
      <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    </>
  );
}