import Link from 'next/link';
import { Img } from '@/components/Img';
import { Ridge } from '@/components/Ridge';
import { Stamp } from '@/components/Stamp';
import { home } from '@/content/home';
import { common } from '@/content/common';
import { SITE } from '@/lib/site';
import { localePath, pick, type Lang } from '@/lib/i18n';

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/** Is month m (1–12) inside a flow? */
const inFlow = (months: number[], m: number) => months.includes(m);

export function HomeView({ lang }: { lang: Lang }) {
  const t = pick(home, lang);
  const c = pick(common, lang);
  const shelves = [
    { label: t.shelfHive, items: t.hive, start: 1 },
    { label: t.shelfFarm, items: t.farm, start: t.hive.length + 1 },
  ];

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <span className="hero-glyph" aria-hidden="true">मह</span>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker kicker-light">{t.heroKicker}</p>
            <h1 id="hero-title" className="hero-title">
              {t.heroTitleA} <em>{t.heroTitleEm}</em> {t.heroTitleB}
            </h1>
            <p className="hero-text">{t.heroText}</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#harvest">{t.heroCta} <Arrow /></a>
              <a className="btn btn-ghost" href="#contact">{t.heroCta2}</a>
            </div>
          </div>
          <div className="hero-media">
            <div className="arch">
              <Img name="hero" alt={t.heroImgAlt} priority sizes="(max-width: 860px) 90vw, 520px" />
            </div>
            <Stamp text={c.stamp} lang={lang} className="hero-stamp" />
          </div>
        </div>
        <Ridge className="hero-ridge" />
      </section>

      {/* ---------- PILLARS ---------- */}
      <section className="pillars" aria-label={t.storyKicker}>
        <div className="wrap pillars-grid">
          {t.pillars.map((p) => (
            <div className="pillar" key={p.n}>
              <span className="pillar-n">{p.n}.</span>
              <h2>{p.title}</h2>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- STORY ---------- */}
      <section className="story sec" id="story" aria-labelledby="story-title">
        <div className="wrap story-grid">
          <div className="story-side">
            <p className="kicker">{t.storyKicker}</p>
            <h2 id="story-title" className="h2">{t.storyTitle}</h2>
            <figure className="story-fig">
              <Img name="comb" alt={t.storyImgAlt} sizes="(max-width: 860px) 90vw, 440px" />
            </figure>
          </div>
          <div className="story-body">
            <blockquote className="quote">
              <p>“{t.storyQuote}”</p>
            </blockquote>
            <div className="prose dropcap">
              {t.story.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HARVEST ---------- */}
      <section className="harvest sec" id="harvest" aria-labelledby="harvest-title">
        <div className="wrap">
          <header className="sec-head">
            <p className="kicker">{t.harvestKicker}</p>
            <h2 id="harvest-title" className="h2">{t.harvestTitle}</h2>
            <p className="sec-lead">{t.harvestText}</p>
          </header>

          {shelves.map((shelf) => (
            <div className="shelf" key={shelf.label}>
              <h3 className="shelf-label"><span>{shelf.label}</span></h3>
              <ul className="labels">
                {shelf.items.map((p, i) => (
                  <li className="label" key={p.title}>
                    <div className="label-media">
                      <Img name={p.img} alt={p.alt} sizes="(max-width: 600px) 90vw, (max-width: 1100px) 45vw, 280px" />
                    </div>
                    <div className="label-body">
                      <span className="label-no">No. {String(shelf.start + i).padStart(2, '0')}</span>
                      <h4>{p.title}</h4>
                      <p>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="harvest-cta">
            <a className="btn btn-dark" href="#contact">{c.orderCta} <Arrow /></a>
          </div>
        </div>
      </section>

      {/* ---------- NECTAR CALENDAR ---------- */}
      <section className="cal sec" id="calendar" aria-labelledby="cal-title">
        <Ridge className="cal-ridge" />
        <div className="wrap">
          <header className="sec-head sec-head-light">
            <p className="kicker kicker-light">{t.calKicker}</p>
            <h2 id="cal-title" className="h2">{t.calTitle}</h2>
            <p className="sec-lead">{t.calText}</p>
          </header>
          <div className="cal-table" role="table" aria-label={t.calTitle}>
            <div className="cal-row cal-months" role="row">
              <span role="columnheader" className="cal-name" />
              {t.months.map((m) => <span role="columnheader" key={m}>{m}</span>)}
            </div>
            {t.flows.map((f) => (
              <div className="cal-row" role="row" key={f.name}>
                <span role="rowheader" className="cal-name">
                  <strong>{f.name}</strong>
                  <i>{f.latin}</i>
                  <small>{f.note}</small>
                </span>
                {t.months.map((m, idx) => {
                  const on = inFlow(f.months, idx + 1);
                  const prev = inFlow(f.months, idx === 0 ? 12 : idx);
                  const next = inFlow(f.months, idx === 11 ? 1 : idx + 2);
                  return (
                    <span role="cell" key={m} className={on ? `cal-on${prev ? ' l' : ''}${next ? ' r' : ''}` : undefined}>
                      <span className="sr-only">{on ? `${m}: ${f.name}` : ''}</span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
          <p className="cal-note">{t.calNote}</p>
        </div>
      </section>

      {/* ---------- LEARN ---------- */}
      <section className="learn sec" id="learn" aria-labelledby="learn-title">
        <div className="wrap">
          <header className="sec-head">
            <p className="kicker">{t.learnKicker}</p>
            <h2 id="learn-title" className="h2">{t.learnTitle}</h2>
          </header>
          <ol className="guides">
            {t.guides.map((g, i) => (
              <li key={g.href}>
                <Link className="guide" href={localePath(lang, g.href)}>
                  <span className="guide-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="guide-body">
                    <span className="guide-title">{g.title}</span>
                    <span className="guide-text">{g.text}</span>
                  </span>
                  <span className="guide-go">{t.read} <Arrow /></span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section className="contact sec" id="contact" aria-labelledby="contact-title">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <p className="kicker">{t.contactKicker}</p>
            <h2 id="contact-title" className="h2 contact-title">{t.contactTitle}</h2>
            <p className="sec-lead">{t.contactText}</p>
            <dl className="contact-list">
              <div>
                <dt>{t.emailLabel}</dt>
                <dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
              </div>
              <div>
                <dt>{t.phoneLabel}</dt>
                <dd><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></dd>
              </div>
              <div>
                <dt>{t.findLabel}</dt>
                <dd><a href={SITE.mapsUrl} target="_blank" rel="noopener">{t.findText} ↗</a></dd>
              </div>
            </dl>
          </div>
          <figure className="contact-map">
            <div className="contact-map-frame">
              <iframe title={t.mapTitle} src={SITE.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <figcaption>
              <span><strong>{SITE.name}</strong>{c.place}</span>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener">{t.findText} ↗</a>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
