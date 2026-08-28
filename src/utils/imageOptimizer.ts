/**
 * High-Performance Image Optimization & CDN Helper
 * Uses wsrv.nl global edge cache to resize, compress, and convert raw images to WebP on the fly.
 */

export const SVG_PLACEHOLDER =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">' +
      '<rect width="800" height="600" fill="#0F172A"/>' +
      '<rect width="800" height="600" fill="url(#g)" opacity="0.6"/>' +
      '<defs>' +
        '<linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">' +
          '<stop offset="0%" stop-color="#0B1120"/>' +
          '<stop offset="50%" stop-color="#1E293B"/>' +
          '<stop offset="100%" stop-color="#0F172A"/>' +
        '</linearGradient>' +
      '</defs>' +
    '</svg>'
  );

export function getOptimizedImageUrl(
  url: string | undefined | null,
  width = 600,
  quality = 80
): string {
  if (!url || typeof url !== 'string') {
    return SVG_PLACEHOLDER;
  }

  const trimmed = url.trim();
  if (trimmed === '' || trimmed === '/') {
    return SVG_PLACEHOLDER;
  }

  // Optimize GitHub raw user content through wsrv.nl edge CDN
  if (trimmed.startsWith('https://raw.githubusercontent.com/')) {
    return `https://wsrv.nl/?url=${encodeURIComponent(trimmed)}&w=${width}&q=${quality}&output=webp`;
  }

  // If another external https url is provided, also route via wsrv.nl for webp compression
  if (trimmed.startsWith('https://') || trimmed.startsWith('http://')) {
    return `https://wsrv.nl/?url=${encodeURIComponent(trimmed)}&w=${width}&q=${quality}&output=webp`;
  }

  return trimmed;
}
