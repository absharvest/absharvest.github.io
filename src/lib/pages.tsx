import type { Metadata } from 'next';
import { pageMetadata } from './seo';
import { articleLd } from './schema';
import { pick, type Lang } from './i18n';
import { home } from '@/content/home';
import { howTo } from '@/content/howTo';
import { tips } from '@/content/tips';
import { HomeView } from '@/views/HomeView';
import { HowToView } from '@/views/HowToView';
import { TipsView } from '@/views/TipsView';
import { JsonLd } from '@/components/JsonLd';

export const homeMeta = (lang: Lang): Metadata => {
  const t = pick(home, lang);
  return { ...pageMetadata({ lang, path: '/', title: t.metaTitle, description: t.metaDescription }), title: { absolute: t.metaTitle } };
};
export const HomePage = ({ lang }: { lang: Lang }) => <HomeView lang={lang} />;

export const howToMeta = (lang: Lang): Metadata => {
  const t = pick(howTo, lang);
  return { ...pageMetadata({ lang, path: '/blog/how_to', title: t.metaTitle, description: t.metaDescription, type: 'article' }), title: { absolute: t.metaTitle } };
};
export const HowToPage = ({ lang }: { lang: Lang }) => {
  const t = pick(howTo, lang);
  return (
    <>
      <HowToView lang={lang} />
      <JsonLd data={articleLd({ lang, path: '/blog/how_to', title: t.title, description: t.metaDescription })} />
    </>
  );
};

export const tipsMeta = (lang: Lang): Metadata => {
  const t = pick(tips, lang);
  return { ...pageMetadata({ lang, path: '/blog/beekeeping', title: t.metaTitle, description: t.metaDescription, type: 'article' }), title: { absolute: t.metaTitle } };
};
export const TipsPage = ({ lang }: { lang: Lang }) => {
  const t = pick(tips, lang);
  return (
    <>
      <TipsView lang={lang} />
      <JsonLd data={articleLd({ lang, path: '/blog/beekeeping', title: t.title, description: t.metaDescription })} />
    </>
  );
};
