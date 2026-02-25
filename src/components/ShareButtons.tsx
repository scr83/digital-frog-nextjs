'use client';

import { useState } from 'react';
import { Share2, Twitter, Linkedin, Link2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareButtonsProps {
  title: string;
  url: string;
  shareText: string;
  copyLinkText: string;
  copiedText: string;
}

export function ShareButtons({ title, url, shareText, copyLinkText, copiedText }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}${url}`;
    
    let shareLink = '';
    if (platform === 'twitter') {
      shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} ${shareUrl}`)}`;
    } else if (platform === 'linkedin') {
      shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    }
    
    window.open(shareLink, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async () => {
    const fullUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}${url}`;
    
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = fullUrl;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Failed to copy link');
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-slate-400 flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        {shareText}:
      </span>
      
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-8 p-0 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
        onClick={() => handleShare('twitter')}
        aria-label="Share on Twitter/X"
      >
        <Twitter className="w-3.5 h-3.5" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-8 p-0 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
        onClick={() => handleShare('linkedin')}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        className="h-8 px-3 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
        onClick={handleCopyLink}
        aria-label="Copy link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 mr-1" />
            <span className="text-xs">{copiedText}</span>
          </>
        ) : (
          <>
            <Link2 className="w-3.5 h-3.5 mr-1" />
            <span className="text-xs">{copyLinkText}</span>
          </>
        )}
      </Button>
    </div>
  );
}

ShareButtons.displayName = 'ShareButtons';