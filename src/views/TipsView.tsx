import { tips } from '@/content/tips';
import { pick, type Lang } from '@/lib/i18n';
import { Checklist } from '@/components/Checklist';
import { GuideHero, GuideCta } from './GuideParts';

export function TipsView({ lang }: { lang: Lang }) {
  const t = pick(tips, lang);
  const ids = ['checklist', 'seasons', 'tips', 'problems'];
  return (
    <>
      <GuideHero lang={lang} kicker={t.kicker} title={t.title} intro={t.intro} toc={ids.map((id, i) => ({ id, label: t.toc[i] }))} />

      <section className="sec" id="checklist" aria-labelledby="checklist-title">
        <div className="wrap article-grid">
          <aside className="article-aside">
            <span className="big-n" aria-hidden="true">01</span>
          </aside>
          <div className="article">
            <h2 id="checklist-title" className="h2">{t.checklistTitle}</h2>
            <p className="note note-inline"><strong>{t.reminderLabel}</strong> {t.reminderText}</p>
            <Checklist checks={t.checks} progress={t.progress} completeAll={t.completeAll} reset={t.resetChecklist} privacy={t.privacy} />
          </div>
        </div>
      </section>

      <section className="sec sec-paper2" id="seasons" aria-labelledby="seasons-title">
        <div className="wrap">
          <header className="sec-head">
            <p className="kicker">02</p>
            <h2 id="seasons-title" className="h2">{t.calendarTitle}</h2>
            <p className="sec-lead">{t.calendarIntro}</p>
          </header>
          <ol className="seasons">
            {t.seasons.map((s, i) => (
              <li className={`season season-${i + 1}`} key={s.title}>
                <h3>{s.title}</h3>
                <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec" id="tips" aria-labelledby="tips-title">
        <div className="wrap">
          <header className="sec-head">
            <p className="kicker">03</p>
            <h2 id="tips-title" className="h2">{t.tipsTitle}</h2>
            <p className="sec-lead">{t.tipsIntro}</p>
          </header>
          <ul className="tipgrid">
            {t.tips.map((tip, i) => (
              <li key={tip.title}>
                <span className="tip-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{tip.title}</h3>
                <ul className="ticks">{tip.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-paper2" id="problems" aria-labelledby="problems-title">
        <div className="wrap">
          <header className="sec-head">
            <p className="kicker">04</p>
            <h2 id="problems-title" className="h2">{t.problemsTitle}</h2>
            <p className="sec-lead">{t.problemsIntro}</p>
          </header>
          <div className="table table-wide">
            <table>
              <thead><tr>{t.problemsHead.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
              <tbody>
                {t.problems.map(([a, b, c]) => (
                  <tr key={a}><th scope="row">{a}</th><td>{b}</td><td>{c}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <GuideCta lang={lang} title={t.ctaTitle} text={t.ctaText} btn={t.ctaBtn} nextLabel={t.nextLabel} nextTitle={t.nextTitle} nextHref="/blog/how_to" />
    </>
  );
}
