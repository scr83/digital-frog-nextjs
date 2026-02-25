import Link from 'next/link';
import { ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AuthorBioProps {
  authorName: string;
  authorBio: string;
  viewAllText: string;
  blogPath: string;
}

export function AuthorBio({ authorName, authorBio, viewAllText, blogPath }: AuthorBioProps) {
  return (
    <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
      <div className="flex items-start gap-4">
        {/* Author Avatar */}
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-slate-900" />
        </div>
        
        {/* Author Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 font-outfit">
            {authorName}
          </h3>
          <p className="text-slate-300 mb-4 leading-relaxed text-sm">
            {authorBio}
          </p>
          
          <Link href={blogPath}>
            <Button 
              variant="ghost" 
              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-0 h-auto font-medium"
            >
              {viewAllText}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

AuthorBio.displayName = 'AuthorBio';