'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '@/lib/blog';
import { extractTOCFromContent, removeDuplicateTOC, addHeadingIds } from '@/lib/toc-utils';

interface TableOfContentsProps {
  post: BlogPost;
  language: 'en' | 'es' | 'sr';
}

export default function TableOfContents({ post, language }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<Array<{ id: string; title: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Get the content based on language prop
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

    // Clean and process content to extract TOC
    const cleanContent = removeDuplicateTOC(content);
    const toc = extractTOCFromContent(cleanContent);
    
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getTocTitle = () => {
    switch (language) {
      case 'es': return 'Tabla de Contenidos';
      case 'sr': return 'Sadržaj';
      default: return 'Table of Contents';
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className="toc-container">
      <h3 className="toc-title">
        {getTocTitle()}
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