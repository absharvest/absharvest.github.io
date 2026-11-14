'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LANGS, LANG_LABEL, LANG_NAME, localePath, type Lang } from '@/lib/i18n';
import type { Common } from '@/content/common';

type Props = { lang: Lang; t: Common };

/** Language-neutral path, e.g. "/ne/blog/how_to" -> "/blog/how_to". */
function basePath(pathname: string, lang: Lang) {
  let p = pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  if (lang !== 'en') p = p.replace(new RegExp(`^/${lang}(?=/|$)`), '') || '/';
  return p;
}

export function Header({ lang, t }: Props) {
  const path = basePath(usePathname() || '/', lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = localePath(lang, '/');
  const onHome = path === '/';
  const anchor = (id: string) => (onHome ? `#${id}` : `${home}#${id}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-lock', open);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`hdr${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="hdr-in">
        <Link href={home} className="hdr-brand" onClick={close} aria-label="A.B.S Pristine Harvest — home">
          <img src="/images/logo.webp" alt="" width={44} height={59} />
          <span>
            A.B.S <em>Pristine</em> Harvest
          </span>
        </Link>

        <nav className="hdr-nav" id="main-nav" aria-label="Main">
          <a href={anchor('story')} onClick={close}>{t.about}</a>
          <a href={anchor('harvest')} onClick={close}>{t.products}</a>
          <a href={anchor('calendar')} onClick={close}>{t.calendar}</a>
          <Link href={localePath(lang, '/blog/how_to')} onClick={close} aria-current={path === '/blog/how_to' ? 'page' : undefined}>
            {t.guideStart}
          </Link>
          <Link href={localePath(lang, '/blog/beekeeping')} onClick={close} aria-current={path === '/blog/beekeeping' ? 'page' : undefined}>
            {t.guideTips}
          </Link>
          <a href={anchor('contact')} className="hdr-cta" onClick={close}>{t.contact}</a>

          <div className="hdr-lang" role="group" aria-label={t.language}>
            {LANGS.map((l) => (
              <Link
                key={l}
                href={localePath(l, path)}
                hrefLang={l}
                lang={l}
                title={LANG_NAME[l]}
                aria-current={l === lang ? 'true' : undefined}
                onClick={close}
              >
                {LANG_LABEL[l]}
              </Link>
            ))}
          </div>
        </nav>

        <button className="hdr-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">{open ? t.close : t.menu}</span>
          <span className="hdr-burger" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
