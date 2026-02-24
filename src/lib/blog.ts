export interface BlogPost {
  slug: string;          // EN slug: "how-much-custom-software-costs-chile"
  slugEs: string;        // ES slug: "cuanto-cuesta-software-medida-chile"
  slugSr: string;        // SR slug: "koliko-kosta-softver-po-meri-cile"
  title: string;         // EN title
  titleEs: string;       // ES title
  titleSr: string;       // SR title
  description: string;   // EN meta description (150-160 chars)
  descriptionEs: string; // ES meta description
  descriptionSr: string; // SR meta description
  content: string;       // EN content (HTML or MDX string)
  contentEs: string;     // ES content
  contentSr: string;     // SR content
  author: string;        // "Sebastian Contreras"
  publishedAt: string;   // ISO date: "2026-02-24"
  updatedAt: string;     // ISO date
  category: 'automatizacion' | 'desarrollo-software' | 'casos-exito' | 'tendencias';
  tags: string[];        // EN tags
  tagsEs: string[];      // ES tags
  tagsSr: string[];      // SR tags
  readingTime: number;   // minutes
  featured: boolean;
}

// Start with an empty array, we'll add posts later
export const blogPosts: BlogPost[] = [];

// Helper functions
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostBySlugEs(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slugEs === slug);
}

export function getPostBySlugSr(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slugSr === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured);
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  return getAllPosts()
    .filter(post => post.slug !== currentPost.slug && post.category === currentPost.category)
    .slice(0, limit);
}

// Helper to generate reading time from content
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Helper to format category display names
export function getCategoryDisplayName(category: string, language: 'en' | 'es' | 'sr'): string {
  const categoryNames = {
    'automatizacion': {
      en: 'Automation',
      es: 'Automatización',
      sr: 'Automatizacija'
    },
    'desarrollo-software': {
      en: 'Software Development',
      es: 'Desarrollo de Software',
      sr: 'Razvoj Softvera'
    },
    'casos-exito': {
      en: 'Success Stories',
      es: 'Casos de Éxito',
      sr: 'Studije Slučaja'
    },
    'tendencias': {
      en: 'Trends',
      es: 'Tendencias',
      sr: 'Trendovi'
    }
  };

  return categoryNames[category as keyof typeof categoryNames]?.[language] || category;
}