'use client';

import { useEffect, useState, useRef } from 'react';
import { BlogPost } from '@/lib/blog';
import { removeDuplicateTOC } from '@/lib/toc-utils';

interface ClientBlogPostProps {
  post: BlogPost;
  language: 'en' | 'es' | 'sr';
  children?: React.ReactNode;
}

// Function to strip in-content TOC
function stripInContentTOC(html: string): string {
  let cleaned = html;
  
  // Remove <nav>...</nav> blocks at the start
  cleaned = cleaned.replace(/^(\s*<nav[\s\S]*?<\/nav>\s*)/i, '');
  
  // Remove H2 "Table of Contents" and the list that follows it
  cleaned = cleaned.replace(
    /<h2[^>]*>\s*(Table of Contents|Tabla de Contenidos|Sadržaj)\s*<\/h2>\s*(<[uo]l[\s\S]*?<\/[uo]l>)/gi,
    ''
  );
  
  return cleaned.trim();
}

export default function ClientBlogPost({ post, language, children }: ClientBlogPostProps) {
  const [processedContent, setProcessedContent] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

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

    // Process the content: remove duplicate TOC
    const cleanedContent = stripInContentTOC(content);
    
    setProcessedContent(cleanedContent);
  }, [post, language]);

  // Add IDs to headings after content is rendered
  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;
    
    const headings = contentEl.querySelectorAll('h2');
    headings.forEach((heading) => {
      const id = heading.textContent
        ?.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .trim() || '';
      if (id) {
        heading.id = id;
      }
    });

    // Also process the end-of-article CTA section
    const lastH2 = Array.from(headings).find(h => {
      const text = h.textContent?.toLowerCase() || '';
      return text.includes('ready to') || text.includes('listo') || text.includes('spremni');
    });
    
    if (lastH2) {
      // Wrap everything from this h2 to the end in a CTA container
      let currentElement: Element = lastH2;
      const elementsToWrap: Element[] = [currentElement];
      
      while (currentElement.nextElementSibling) {
        currentElement = currentElement.nextElementSibling;
        elementsToWrap.push(currentElement);
      }
      
      if (elementsToWrap.length > 0) {
        const wrapper = document.createElement('div');
        wrapper.className = 'blog-end-cta';
        
        lastH2.parentNode?.insertBefore(wrapper, lastH2);
        elementsToWrap.forEach(el => wrapper.appendChild(el));
      }
    }
  }, [processedContent]);

  return (
    <>
      {children}
      <div 
        ref={contentRef}
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    </>
  );
}