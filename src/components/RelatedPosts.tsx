import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/lib/blog';

interface RelatedPost {
  title: string;
  description: string;
  slug: string;
  category: string;
  readingTime: number;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  title: string;
  readArticleText: string;
  minReadText: string;
  basePath: string; // '/blog', '/es/blog', '/sr/blog'
}

export function RelatedPosts({ 
  posts, 
  title, 
  readArticleText, 
  minReadText, 
  basePath
}: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-white mb-8 text-center font-outfit">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <article 
            key={post.slug}
            className="bg-slate-800/30 border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 hover:shadow-lg transition-all duration-200 group"
          >
            {/* Card Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge 
                  variant="secondary" 
                  className="text-xs bg-cyan-400/10 text-cyan-400 border-cyan-400/20"
                >
                  {post.category}
                </Badge>
                <div className="flex items-center text-xs text-slate-400">
                  <Clock className="w-3 h-3 mr-1" />
                  {post.readingTime} {minReadText}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 leading-snug font-outfit group-hover:text-cyan-400 transition-colors">
                <Link 
                  href={`${basePath}/${post.slug}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed mb-4">
                {post.description}
              </p>
              
              <Link href={`${basePath}/${post.slug}`}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-0 h-auto font-medium group"
                >
                  {readArticleText}
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

RelatedPosts.displayName = 'RelatedPosts';