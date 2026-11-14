import { SITE } from './site';
import { localePath, type Lang } from './i18n';

export function organizationLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Store'],
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    slogan: SITE.tagline,
    description:
      'Family apiary and farm in Pokhara, Nepal selling raw and comb honey, locally mated queen bees, nucleus hives, beekeeping kits, oranges, coffee and greenhouse tomatoes.',
    url: SITE.url + localePath(lang, '/'),
    logo: `${SITE.url}/images/logo.webp`,
    image: [`${SITE.url}/og.jpg`],
    email: SITE.email,
    telephone: SITE.phone,
    address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: SITE.country },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.mapsUrl,
    areaServed: 'Nepal',
    knowsLanguage: ['en', 'ne', 'sl'],
    makesOffer: ['Raw honey', 'Comb honey', 'Queen bees', 'Nucleus hives', 'Beekeeping kits', 'Oranges', 'Coffee', 'Greenhouse tomatoes'].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Product', name },
    })),
  };
}

export function articleLd(opts: { lang: Lang; path: string; title: string; description: string }) {
  const url = SITE.url + localePath(opts.lang, opts.path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: opts.title,
        description: opts.description,
        inLanguage: opts.lang,
        mainEntityOfPage: url,
        image: `${SITE.url}/og.jpg`,
        author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
        publisher: { '@id': `${SITE.url}/#business` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + localePath(opts.lang, '/') },
          { '@type': 'ListItem', position: 2, name: opts.title, item: url },
        ],
      },
    ],
  };
}
