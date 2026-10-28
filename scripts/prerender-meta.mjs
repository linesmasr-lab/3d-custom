// After `vite build`, writes dist/<page>.html for every page with that
// page's own title, description and canonical URL, so search engines and link
// previews see the right text without running JavaScript.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { pages, SITE_URL } from '../src/seo.js';

const base = readFileSync('dist/index.html', 'utf8');
// Structured data: point each source image name (shop-hvac-bundle.webp) at
// its hashed build file (dist/assets/shop-hvac-bundle-AbC123.webp)
const assets = readdirSync('dist/assets');
const assetUrl = (name) => {
  const [stem, ext] = [name.slice(0, name.lastIndexOf('.')), name.slice(name.lastIndexOf('.'))];
  const file = assets.find((f) => f.startsWith(`${stem}-`) && f.endsWith(ext) && f.length - stem.length - ext.length <= 10);
  if (!file) throw new Error(`prerender-meta: no built asset for ${name}`);
  return `${SITE_URL}/assets/${file}`;
};
const jsonLdTags = (blocks = []) =>
  blocks
    .map((block) => {
      const json = JSON.stringify(block, (key, value) =>
        key === 'image' && typeof value === 'string' && !value.startsWith('http') ? assetUrl(value) : value,
      );
      return `<script type="application/ld+json">${json.replace(/</g, '\\u003c')}</script>`;
    })
    .join('\n    ');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

for (const [path, page] of Object.entries(pages)) {
  const url = SITE_URL + path;
  const html = base
    .replace(/<title>[^<]*<\/title>/, () => `<title>${esc(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, (_, a) => `${a}${esc(page.description)}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, (_, a) => `${a}${esc(page.title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, (_, a) => `${a}${esc(page.description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, (_, a) => `${a}${url}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, (_, a) => `${a}${url}"`)
    .replace(/(<meta name="robots" content=")[^"]*"/, (_, a) => `${a}${page.noindex ? 'noindex' : 'index, follow'}"`)
    .replace('</head>', () => (page.jsonLd ? `  ${jsonLdTags(page.jsonLd)}\n  </head>` : '</head>'));
  if (path === '/') {
    writeFileSync('dist/index.html', html);
  } else {
    // dist/shop.html is served at /shop with no redirect (Cloudflare Pages),
    // so the URL Google crawls is the same as the canonical URL.
    const file = `dist${path}.html`;
    mkdirSync(file.slice(0, file.lastIndexOf('/')), { recursive: true });
    writeFileSync(file, html);
  }
}

// Sitemap with every indexable page
const today = new Date().toISOString().slice(0, 10);
const urls = Object.entries(pages)
  .filter(([, p]) => !p.noindex)
  .map(([path]) => `  <url><loc>${SITE_URL}${path}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n');
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`SEO: wrote ${Object.keys(pages).length} pages and sitemap.xml`);
