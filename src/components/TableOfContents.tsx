'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
  title: string;
}

export function TableOfContents({ contentRef, title }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Generate TOC from content
  useEffect(() => {
    if (!contentRef.current) return;

    const headings = Array.from(contentRef.current.querySelectorAll('h2, h3'));
    const tocItems: TocItem[] = headings.map((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent || '';
      
      // Create slugified ID
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim();
      
      // Set the ID on the heading element for linking
      heading.id = id;
      
      return { id, text, level };
    });

    setToc(tocItems);
  }, [contentRef]);

  // Intersection Observer for active section tracking
  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0]);
        }
      },
      {
        rootMargin: '-80px 0px -80px 0px', // Account for sticky header
        threshold: 0.1,
      }
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [toc]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (toc.length === 0) return null;

  return (
    <>
      {/* Mobile TOC - Collapsible */}
      <div className="lg:hidden mb-8">
        <Button
          variant="outline"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full justify-between border-slate-700 bg-slate-800/50 text-white hover:bg-slate-700"
        >
          <span className="font-medium">{title}</span>
          {isCollapsed ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </Button>
        
        {!isCollapsed && (
          <div className="mt-4 p-4 border border-slate-700 rounded-lg bg-slate-800/30">
            <nav className="space-y-1">
              {toc.map(({ id, text, level }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToHeading(id);
                    setIsCollapsed(true);
                  }}
                  className={cn(
                    "block w-full text-left px-3 py-2 rounded text-sm transition-colors",
                    level === 2 ? "pl-3" : "pl-6",
                    activeId === id
                      ? "text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400"
                      : "text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50"
                  )}
                >
                  {text}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop TOC - Sticky Sidebar */}
      <div className="hidden lg:block">
        <div className="sticky top-24">
          <div className="w-[280px] p-6 bg-slate-800/30 border border-slate-700 rounded-lg">
            <h3 className="font-semibold text-white mb-4 pb-2 border-b border-slate-700">
              {title}
            </h3>
            <nav className="space-y-1">
              {toc.map(({ id, text, level }) => (
                <button
                  key={id}
                  onClick={() => scrollToHeading(id)}
                  className={cn(
                    "block w-full text-left px-3 py-2 rounded text-sm transition-colors",
                    level === 2 ? "pl-3" : "pl-6",
                    activeId === id
                      ? "text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400"
                      : "text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50"
                  )}
                >
                  {text}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

TableOfContents.displayName = 'TableOfContents';