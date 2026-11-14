import type { Metadata } from 'next';
import { SITE } from './site';
import { LANGS, OG_LOCALE, localePath, type Lang } from './i18n';

export function pageMetadata(opts: { lang: Lang; path: string; title: string; description: string; image?: string; type?: 'website' | 'article' }): Metadata {
  const { lang, path, title, description, image = '/og.jpg', type = 'website' } = opts;
  const canonical = localePath(lang, path);
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[l] = localePath(l, path);
  languages['x-default'] = path;
  return {
    metadataBase: new URL(SITE.url),
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE.name,
      title,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
    robots: { index: true, follow: true },
  };
}
