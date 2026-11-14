import Link from 'next/link';
import { Ridge } from '@/components/Ridge';
import { common } from '@/content/common';
import { localePath, pick, type Lang } from '@/lib/i18n';

export function GuideHero({ lang, kicker, title, intro, toc }: { lang: Lang; kicker: string; title: string; intro: string; toc: { id: string; label: string }[] }) {
  const c = pick(common, lang);
  return (
    <section className="ghero" aria-labelledby="ghero-title">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={localePath(lang, '/')}>{c.home}</Link>
          <span aria-hidden="true">/</span>
          <span>{c.learn}</span>
        </nav>
        <p className="kicker kicker-light">{kicker}</p>
        <h1 id="ghero-title" className="ghero-title">{title}</h1>
        <p className="ghero-intro">{intro}</p>
        <ol className="toc">
          {toc.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`}><span>{String(i + 1).padStart(2, '0')}</span>{s.label}</a>
            </li>
          ))}
        </ol>
      </div>
      <Ridge className="hero-ridge" />
    </section>
  );
}

export function GuideCta({ lang, title, text, btn, nextLabel, nextTitle, nextHref }: { lang: Lang; title: string; text: string; btn: string; nextLabel: string; nextTitle: string; nextHref: string }) {
  return (
    <section className="sec gcta-sec">
      <div className="wrap gcta-grid">
        <div className="gcta">
          <h2 className="h2">{title}</h2>
          <p>{text}</p>
          <a className="btn btn-gold" href={`${localePath(lang, '/')}#contact`}>{btn}</a>
        </div>
        <Link className="gnext" href={localePath(lang, nextHref)}>
          <span className="kicker">{nextLabel}</span>
          <span className="gnext-title">{nextTitle} →</span>
        </Link>
      </div>
    </section>
  );
}
