// After `vite build`, writes dist/<page>/index.html for every page with that
// page's own title, description and canonical URL, so search engines and link
// previews see the right text without running JavaScript.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { pages, SITE_URL } from '../src/seo.js';

const base = readFileSync('dist/index.html', 'utf8');
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
    .replace(/(<meta name="robots" content=")[^"]*"/, (_, a) => `${a}${page.noindex ? 'noindex' : 'index, follow'}"`);
  if (path === '/') {
    writeFileSync('dist/index.html', html);
  } else {
    mkdirSync(`dist${path}`, { recursive: true });
    writeFileSync(`dist${path}/index.html`, html);
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
