/**
 * Utility functions for handling Table of Contents in blog content
 */

/**
 * Removes duplicate Table of Contents from HTML content
 * This function strips out any TOC sections that might be embedded in the content
 * to prevent duplication with our generated TOC component
 */
export function removeDuplicateTOC(htmlContent: string): string {
  // Common patterns for TOC in content
  const tocPatterns = [
    // Remove "Table of Contents" headers followed by lists
    new RegExp('<h[2-6][^>]*>\\s*(?:table of contents|contents|toc)\\s*</h[2-6]>\\s*<(?:ul|ol)[^>]*>.*?</(?:ul|ol)>', 'gis'),
    
    // Remove elements with TOC-related classes
    new RegExp('<[^>]+class="[^"]*(?:toc|table-of-contents|contents)[^"]*"[^>]*>.*?</[^>]+>', 'gis'),
    
    // Remove elements with TOC-related IDs
    new RegExp('<[^>]+id="[^"]*(?:toc|table-of-contents|contents)[^"]*"[^>]*>.*?</[^>]+>', 'gis'),
    
    // Remove specific TOC markup patterns
    new RegExp('<div[^>]*>\\s*<h[2-6][^>]*>(?:table of contents|contents|toc)</h[2-6]>.*?</div>', 'gis'),
    
    // Remove unordered/ordered lists that come immediately after TOC headers
    new RegExp('(?:<h[2-6][^>]*>\\s*(?:table of contents|contents|toc)\\s*</h[2-6]>\\s*)?<(?:ul|ol)[^>]*(?:\\s+class="[^"]*(?:toc|contents)[^"]*")?[^>]*>(?:\\s*<li[^>]*>(?:[^<]|<(?!/li>))*</li>\\s*)*</(?:ul|ol)>', 'gis'),
  ];
  
  let cleanedContent = htmlContent;
  
  // Apply each pattern to remove TOC content
  tocPatterns.forEach(pattern => {
    cleanedContent = cleanedContent.replace(pattern, '');
  });
  
  // Clean up any extra whitespace left behind
  cleanedContent = cleanedContent
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive line breaks
    .replace(/^\s+|\s+$/g, '') // Trim whitespace from start and end
    .replace(/\s{2,}/g, ' '); // Normalize multiple spaces
  
  return cleanedContent;
}

/**
 * Extracts headings from HTML content to generate TOC data
 */
export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export function extractTOCFromContent(htmlContent: string): TOCItem[] {
  const headingRegex = /<h([2-6])[^>]*(?:\s+id="([^"]*)")?[^>]*>(.*?)<\/h[2-6]>/gi;
  const toc: TOCItem[] = [];
  let match;
  let headingCounter = 0;
  
  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1]);
    const existingId = match[2];
    const titleHtml = match[3];
    
    // Strip HTML tags from title to get clean text
    const title = titleHtml.replace(/<[^>]*>/g, '').trim();
    
    // Generate ID if one doesn't exist
    const id = existingId || `heading-${++headingCounter}`;
    
    toc.push({
      id,
      title,
      level
    });
  }
  
  return toc;
}

/**
 * Adds IDs to headings in HTML content if they don't already have them
 */
export function addHeadingIds(htmlContent: string): string {
  const headingRegex = /<h([2-6])([^>]*?)>(.*?)<\/h([2-6])>/gi;
  let headingCounter = 0;
  
  return htmlContent.replace(headingRegex, (match, level, attributes, content, closingLevel) => {
    // Check if ID already exists
    if (attributes.includes('id=')) {
      return match; // Return unchanged if ID exists
    }
    
    // Generate a clean ID from the heading content
    const cleanText = content.replace(/<[^>]*>/g, '').trim();
    const id = cleanText
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
      || `heading-${++headingCounter}`; // Fallback ID
    
    return `<h${level}${attributes} id="${id}">${content}</h${closingLevel}>`;
  });
}