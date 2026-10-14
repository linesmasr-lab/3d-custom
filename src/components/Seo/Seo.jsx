import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, pages, fallback } from '../../seo.js';

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/);
    el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

// Keeps the title, description and canonical URL in sync with the current page
function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
    const page = pages[path] ?? fallback;
    document.title = page.title;
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[property="og:url"]', 'content', SITE_URL + path);
    setMeta('link[rel="canonical"]', 'href', SITE_URL + path);
    setMeta('meta[name="robots"]', 'content', page.noindex ? 'noindex' : 'index, follow');
  }, [pathname]);

  return null;
}

export default Seo;
