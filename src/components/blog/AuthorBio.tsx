import { User } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

interface AuthorBioProps {
  post: BlogPost;
  language: 'en' | 'es' | 'sr';
}

export default function AuthorBio({ post, language }: AuthorBioProps) {
  const getAuthorBio = () => {
    const bios = {
      en: 'Digital marketing expert and software engineer at Digital Frog, specializing in growth-focused solutions and automation.',
      es: 'Experto en marketing digital e ingeniero de software en Digital Frog, especializado en soluciones orientadas al crecimiento y automatización.',
      sr: 'Stručnjak za digitalni marketing i softverski inženjer u Digital Frog, specijalizovan za rešenja fokusirana na rast i automatizaciju.'
    };
    
    return bios[language] || bios.en;
  };

  const getWrittenByText = () => {
    switch (language) {
      case 'es': return 'Escrito por';
      case 'sr': return 'Napisao';
      default: return 'Written by';
    }
  };

  return (
    <div className="author-bio">
      <div className="flex items-start space-x-4">
        <div className="author-avatar flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan to-lime rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-1">
            {getWrittenByText()}
          </p>
          <h4 className="font-semibold text-foreground mb-2">
            {post.author}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {getAuthorBio()}
          </p>
        </div>
      </div>
    </div>
  );
}