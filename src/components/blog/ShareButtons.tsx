'use client';

import { useState } from 'react';
import { Twitter, Facebook, Linkedin, Copy, Check } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

interface ShareButtonsProps {
  post: BlogPost;
  language: 'en' | 'es' | 'sr';
}

export default function ShareButtons({ post, language }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getPostUrl = () => {
    if (typeof window === 'undefined') return '';
    
    const baseUrl = window.location.origin;
    const slug = language === 'es' ? post.slugEs : language === 'sr' ? post.slugSr : post.slug;
    const path = language === 'en' ? `/blog/${slug}` : `/${language}/blog/${slug}`;
    
    return `${baseUrl}${path}`;
  };

  const getPostTitle = () => {
    switch (language) {
      case 'es': return post.titleEs || post.title;
      case 'sr': return post.titleSr || post.title;
      default: return post.title;
    }
  };

  const postUrl = getPostUrl();
  const postTitle = getPostTitle();
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(postTitle);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <div className="share-buttons">
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>
      
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>
      
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      
      <button
        onClick={copyToClipboard}
        className="share-button"
        aria-label="Copy link"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}