import type { ReactNode } from 'react';
import { display, body, deva } from '@/lib/fonts';
import { Header } from './Header';
import { Footer } from './Footer';
import { JsonLd } from './JsonLd';
import { common } from '@/content/common';
import { pick, type Lang } from '@/lib/i18n';
import { organizationLd } from '@/lib/schema';

/** The <html> document shared by every page. */
export function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = pick(common, lang);
  return (
    <html lang={lang} className={`${display.variable} ${body.variable} ${deva.variable}`}>
      <body>
        <a className="skip" href="#main">{t.skip}</a>
        <Header lang={lang} t={t} />
        <main id="main">{children}</main>
        <Footer lang={lang} t={t} />
        <JsonLd data={organizationLd(lang)} />
      </body>
    </html>
  );
}
