import Link from 'next/link';
import { Ridge } from './Ridge';
import { SITE } from '@/lib/site';
import { localePath, type Lang } from '@/lib/i18n';
import type { Common } from '@/content/common';

export function Footer({ lang, t }: { lang: Lang; t: Common }) {
  const home = localePath(lang, '/');
  return (
    <footer className="ftr">
      <Ridge className="ftr-ridge" />
      <div className="wrap ftr-grid">
        <div className="ftr-brand">
          <img src="/images/logo.webp" alt="A.B.S Pristine Harvest logo" width={120} height={160} loading="lazy" />
          <p>{t.footerLine}</p>
        </div>
        <div>
          <h2 className="ftr-h">{t.footerExplore}</h2>
          <ul>
            <li><a href={`${home}#story`}>{t.about}</a></li>
            <li><a href={`${home}#harvest`}>{t.products}</a></li>
            <li><a href={`${home}#calendar`}>{t.calendar}</a></li>
            <li><Link href={localePath(lang, '/blog/how_to')}>{t.guideStart}</Link></li>
            <li><Link href={localePath(lang, '/blog/beekeeping')}>{t.guideTips}</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="ftr-h">{t.footerVisit}</h2>
          <ul>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></li>
            <li><a href={SITE.mapsUrl} target="_blank" rel="noopener">{t.place}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap ftr-base">
        <span>© {new Date().getFullYear()} {SITE.name}. {t.footerRights}</span>
        <span className="ftr-coords">28.1678° N · 83.9563° E</span>
      </div>
    </footer>
  );
}
