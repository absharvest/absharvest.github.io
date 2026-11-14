// Turns the originals in src-images/ into responsive WebP files in public/images/
// and writes src/lib/images.generated.json (sizes + blur placeholders) for the <Img> component.
// Run: npm run images
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'src-images';
const OUT = 'public/images';
const WIDTHS = [480, 960, 1600];

const images = {
  hero: 'queen.jpg',
  comb: 'Hexagon.jpg',
  rawHoney: 'products/raw_honey.jpg',
  combHoney: 'products/comb_honey.jpg',
  queenBee: 'products/queen_bee.jpg',
  kits: 'products/beekeeping_kits.jpeg',
  oranges: 'products/oranges.jpg',
  coffee: 'products/coffee_beans.jpg',
  tomato: 'products/greenhouse_tomato.jpg',
  turmeric: 'products/dried_turmeric.jpeg',
};

await mkdir(OUT, { recursive: true });
const manifest = {};

for (const [key, file] of Object.entries(images)) {
  const input = sharp(path.join(SRC, file)).rotate();
  const meta = await input.metadata();
  const widths = WIDTHS.filter((w) => w < meta.width).concat(meta.width < WIDTHS.at(-1) ? [meta.width] : []);
  const srcs = [];
  for (const w of widths) {
    const name = `${key}-${w}.webp`;
    await input.clone().resize({ width: w }).webp({ quality: 74, effort: 5 }).toFile(path.join(OUT, name));
    srcs.push({ w, src: `/images/${name}` });
  }
  const blur = await input.clone().resize(16).webp({ quality: 40 }).toBuffer();
  manifest[key] = {
    width: meta.width,
    height: meta.height,
    srcs,
    blur: `data:image/webp;base64,${blur.toString('base64')}`,
  };
  console.log(key, widths.join(','));
}

// Social share image (1200x630) and icons
await sharp(path.join(SRC, 'products/raw_honey.jpg')).resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82 }).toFile('public/og.jpg');
await sharp(path.join(SRC, 'logo.webp')).resize(640).webp({ quality: 85 }).toFile(path.join(OUT, 'logo.webp'));
const mark = sharp(path.join(SRC, 'logo.webp')).extract({ left: 385, top: 225, width: 320, height: 560 });
await mark.clone().resize(512, 512, { fit: 'contain', background: '#ffffff' }).png().toFile('src/app/icon.png');
await mark.clone().resize(180, 180, { fit: 'contain', background: '#ffffff' }).png().toFile('src/app/apple-icon.png');

await writeFile('src/lib/images.generated.json', JSON.stringify(manifest, null, 2));
console.log('done');
