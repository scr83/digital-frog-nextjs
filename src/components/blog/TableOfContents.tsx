'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '@/lib/blog';
import { extractTOCFromContent, removeDuplicateTOC, addHeadingIds } from '@/lib/toc-utils';

interface TableOfContentsProps {
  post: BlogPost;
}

export default function TableOfContents({ post }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<Array<{ id: string; title: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Get the content based on current language
    let content = post.content;
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/es/')) {
        content = post.contentEs || post.content;
      } else if (path.startsWith('/sr/')) {
        content = post.contentSr || post.content;
      }
    }

    // Clean and process content
    const cleanContent = removeDuplicateTOC(content);
    const contentWithIds = addHeadingIds(cleanContent);
    const toc = extractTOCFromContent(contentWithIds);
    
    setTocItems(toc);

    // Set up intersection observer for active headings
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0% -80% 0%',
      threshold: 0
    });

    // Observe all headings
    const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading);
      }
    });

    return () => {
      headings.forEach((heading) => {
        if (heading.id) {
          observer.unobserve(heading);
        }
      });
    };
  }, [post]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className="toc-container">
      <h3 className="toc-title">
        Table of Contents
      </h3>
      <nav className="toc-list">
        {tocItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToHeading(item.id)}
            className={`toc-item ${activeId === item.id ? 'active' : ''}`}
            style={{ paddingLeft: `${(item.level - 2) * 12 + 12}px` }}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
}