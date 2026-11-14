import type { ReactNode } from 'react';
import type { Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Shell } from '@/components/Shell';
import { OTHER_LANGS, isLang } from '@/lib/i18n';
import '../globals.css';

export const dynamicParams = false;
export const viewport: Viewport = { themeColor: '#16120e', width: 'device-width', initialScale: 1 };

export function generateStaticParams() {
  return OTHER_LANGS.map((lang) => ({ lang }));
}

export default async function LocalizedLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === 'en') notFound();
  return <Shell lang={lang}>{children}</Shell>;
}
