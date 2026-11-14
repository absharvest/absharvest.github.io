# A.B.S Pristine Harvest — absharvest.com

Website for A.B.S Pristine Harvest, a family apiary and farm in Pokhara, Nepal: raw and comb honey, locally mated queen bees, nucleus hives, beekeeping kits, oranges, coffee and greenhouse tomatoes — plus free beekeeping guides.

Built with **Next.js** (App Router, static export) and hosted on **GitHub Pages**. Available in English (`/`), Nepali (`/ne`) and Slovenian (`/sl`).

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev          # http://localhost:3000 with live reload
```

To preview the exact production build:

```bash
npm run build        # writes the static site to out/
npm start            # serves out/ at http://localhost:3000
```

## Where things live

| What | Where |
| --- | --- |
| Text for every page, in all three languages | `src/content/` (`home.ts`, `howTo.ts`, `tips.ts`, `common.ts`) |
| Page layouts | `src/views/` |
| Design (colours, fonts, layout) | `src/app/globals.css` |
| Business details (email, phone, map, address) | `src/lib/site.ts` |
| SEO (titles, hreflang, structured data, sitemap) | `src/lib/seo.ts`, `src/lib/schema.ts`, `src/app/sitemap.ts` |

Missing Nepali or Slovenian text automatically falls back to English.

## Adding or changing photos

1. Put the original image in `src-images/` (or `src-images/products/`).
2. Register it in `scripts/optimize-images.mjs`.
3. Run `npm run images` — this creates resized WebP files in `public/images/`.
4. Use it with `<Img name="yourKey" alt="…" />`.

## Deploying

Every push to `main` builds the site and publishes it with GitHub Actions (`.github/workflows/deploy.yml`).
One-time setup: in the GitHub repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. The custom domain is kept via `public/CNAME`.

## To do

- [ ] List current prices and how to order.
- [ ] Add more photos of the farm, hives and family.
- [ ] Update products as the seasons change.
- [ ] Describe how we harvest and care for our products.
