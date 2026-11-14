export const LANGS = ['en', 'ne', 'sl'] as const;
export type Lang = (typeof LANGS)[number];
export const OTHER_LANGS = ['ne', 'sl'] as const;

export const LANG_LABEL: Record<Lang, string> = { en: 'EN', ne: 'ने', sl: 'SL' };
export const LANG_NAME: Record<Lang, string> = { en: 'English', ne: 'नेपाली', sl: 'Slovenščina' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', ne: 'ne_NP', sl: 'sl_SI' };

/** Path for a page in a given language. English lives at the root. */
export function localePath(lang: Lang, path: string) {
  if (lang === 'en') return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

export function isLang(v: string): v is Lang {
  return (LANGS as readonly string[]).includes(v);
}

type Dict = Record<string, unknown>;
/** Pick a language from a {en, ne?, sl?} dictionary, falling back to English per key. */
export function pick<T extends Dict>(dict: { en: T } & Partial<Record<Lang, Partial<T>>>, lang: Lang): T {
  return { ...dict.en, ...(dict[lang] ?? {}) } as T;
}
