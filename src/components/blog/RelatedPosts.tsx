import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BlogPost, getCategoryDisplayName } from '@/lib/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
  language: 'en' | 'es' | 'sr';
  title: string;
}

export default function RelatedPosts({ posts, language, title }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  const getPostData = (post: BlogPost) => {
    switch (language) {
      case 'es':
        return {
          title: post.titleEs || post.title,
          description: post.descriptionEs || post.description,
          slug: post.slugEs || post.slug,
          tags: post.tagsEs || post.tags,
          href: `/es/blog/${post.slugEs || post.slug}`
        };
      case 'sr':
        return {
          title: post.titleSr || post.title,
          description: post.descriptionSr || post.description,
          slug: post.slugSr || post.slug,
          tags: post.tagsSr || post.tags,
          href: `/sr/blog/${post.slugSr || post.slug}`
        };
      default:
        return {
          title: post.title,
          description: post.description,
          slug: post.slug,
          tags: post.tags,
          href: `/blog/${post.slug}`
        };
    }
  };

  const getReadMoreText = () => {
    switch (language) {
      case 'es': return 'Leer más';
      case 'sr': return 'Pročitaj više';
      default: return 'Read more';
    }
  };

  const getReadingTimeText = () => {
    switch (language) {
      case 'es': return 'min de lectura';
      case 'sr': return 'min čitanja';
      default: return 'min read';
    }
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-foreground mb-8 text-center flex items-center justify-center">
        <span className="w-2 h-2 bg-lime rounded-full mr-3"></span>
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          const postData = getPostData(post);
          
          return (
            <Card key={postData.slug} className="related-post-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {getCategoryDisplayName(post.category, language)}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readingTime} {getReadingTimeText()}
                  </div>
                </div>
                <CardTitle className="text-lg">
                  <Link 
                    href={postData.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {postData.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {postData.description}
                </p>
                <Link href={postData.href}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary-foreground hover:bg-lime/20"
                  >
                    {getReadMoreText()}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}