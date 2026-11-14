import { howTo } from '@/content/howTo';
import { pick, type Lang } from '@/lib/i18n';
import { GuideHero, GuideCta } from './GuideParts';

export function HowToView({ lang }: { lang: Lang }) {
  const t = pick(howTo, lang);
  const ids = ['basics', 'bees', 'plants'];
  return (
    <>
      <GuideHero lang={lang} kicker={t.kicker} title={t.title} intro={t.intro} toc={ids.map((id, i) => ({ id, label: t.toc[i] }))} />

      <section className="sec" id="basics" aria-labelledby="basics-title">
        <div className="wrap article-grid">
          <aside className="article-aside">
            <span className="big-n" aria-hidden="true">01</span>
          </aside>
          <article className="article">
            <h2 id="basics-title" className="h2">{t.guideTitle}</h2>
            <p className="sec-lead">{t.guideText}</p>

            <div className="note">
              <h3>{t.basicsTitle}</h3>
              <ul>{t.basics.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>

            <h3>{t.locationTitle}</h3>
            <ul className="ticks">{t.locations.map((b) => <li key={b}>{b}</li>)}</ul>

            <h3>{t.equipmentTitle}</h3>
            <div className="table">
              <table>
                <thead><tr>{t.equipmentHead.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                <tbody>{t.equipment.map(([a, b]) => <tr key={a}><td>{a}</td><td className="num">{b}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="small">{t.equipmentNote}</p>

            <h3>{t.careTitle}</h3>
            <dl className="defs">
              {t.care.map(([a, b]) => (
                <div key={a}><dt>{a}</dt><dd>{b}</dd></div>
              ))}
            </dl>

            <h3>{t.harvestTitle}</h3>
            <ol className="steps">{t.harvest.map((b) => <li key={b}>{b}</li>)}</ol>
            <p className="pull">{t.harvestCta}</p>
          </article>
        </div>
      </section>

      <section className="sec sec-paper2" id="bees" aria-labelledby="bees-title">
        <div className="wrap">
          <header className="sec-head">
            <p className="kicker">{t.beesKicker}</p>
            <h2 id="bees-title" className="h2">{t.beesTitle}</h2>
          </header>
          <ul className="specimens">
            {t.bees.map((b, i) => (
              <li className="specimen" key={b.name}>
                <span className="specimen-no">{String(i + 1).padStart(2, '0')}</span>
                <h3><i>{b.name}</i></h3>
                <p className="specimen-common">{b.common}</p>
                <p>{b.text}</p>
              </li>
            ))}
          </ul>
          <p className="small center">{t.beesNote}</p>
        </div>
      </section>

      <section className="sec" id="plants" aria-labelledby="plants-title">
        <div className="wrap">
          <header className="sec-head">
            <p className="kicker">{t.plantsKicker}</p>
            <h2 id="plants-title" className="h2">{t.plantsTitle}</h2>
          </header>
          <ul className="plants">
            {t.plants.map((p) => (
              <li key={p.name}>
                <span className="plant-when">{p.when}</span>
                <h3>{p.name}</h3>
                <i className="plant-latin">{p.latin}</i>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GuideCta lang={lang} title={t.ctaTitle} text={t.ctaText} btn={t.ctaBtn} nextLabel={t.nextLabel} nextTitle={t.nextTitle} nextHref="/blog/beekeeping" />
    </>
  );
}
