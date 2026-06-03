interface SlideEntry {
  slug: string;
  title: string;
  description: string;
  href: string;
}

const slidePages = import.meta.glob<string>('/src/pages/slides/*/index.astro', {
  eager: true,
  query: '?raw',
  import: 'default'
});

const stripHtml = (value: string) =>
  value
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const pickTitle = (source: string, slug: string) => {
  const title = source.match(/<title>(.*?)<\/title>/s)?.[1];
  if (title) {
    return stripHtml(title.replace(/\s*\|\s*tiken\s*$/, ''));
  }

  const h1 = source.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1];
  if (h1) {
    return stripHtml(h1);
  }

  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

const pickDescription = (source: string) => {
  const lead = source.match(/<p\s+class="deck-lead"[^>]*>(.*?)<\/p>/s)?.[1];
  if (lead) {
    return stripHtml(lead);
  }

  const metaDescription = source.match(/<meta\s+name="description"\s+content={(?:"|')(.*?)(?:"|')}\s*\/?>/s)?.[1];
  if (metaDescription) {
    return stripHtml(metaDescription);
  }

  return 'スライド資料';
};

export const slides: SlideEntry[] = Object.entries(slidePages)
  .map(([path, source]) => {
    const slug = path.match(/\/slides\/([^/]+)\/index\.astro$/)?.[1];
    if (!slug) {
      return undefined;
    }

    return {
      slug,
      title: pickTitle(source, slug),
      description: pickDescription(source),
      href: `/slides/${slug}/`
    };
  })
  .filter((slide): slide is SlideEntry => slide !== undefined)
  .sort((a, b) => a.title.localeCompare(b.title, 'ja'));
