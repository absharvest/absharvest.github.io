import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { LANGS, localePath } from '@/lib/i18n';

export const dynamic = 'force-static';

const PAGES = [
  { path: '/', priority: 1 },
  { path: '/blog/how_to', priority: 0.8 },
  { path: '/blog/beekeeping', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, priority }) =>
    LANGS.map((lang) => ({
      url: SITE.url + localePath(lang, path),
      changeFrequency: 'monthly' as const,
      priority: lang === 'en' ? priority : priority - 0.1,
      alternates: { languages: Object.fromEntries(LANGS.map((l) => [l, SITE.url + localePath(l, path)])) },
    })),
  );
}
