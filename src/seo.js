// Page titles and descriptions for search engines.
// Used in the browser (src/components/Seo.jsx) and at build time
// (scripts/prerender-meta.mjs writes a copy of index.html per page).
import { libraryCatalog, NIAGARA } from './data/libraryCatalog.js';
import { eboLibraryFaqs } from './data/eboLibraryFaqs.js';

export const SITE_URL = 'https://3d-custom.com';

// Product + Offer structured data for the library packs and site themes, so
// Google can show the prices. `image` is the source file name; the build
// script swaps it for the hashed file in dist/assets.
const productSchema = (pagePath, items = libraryCatalog) => ({
  '@context': 'https://schema.org',
  '@graph': items.map((item) => ({
    '@type': 'Product',
    '@id': `${SITE_URL}${pagePath}#${item.id}`,
    name: item.title,
    description: item.detail,
    image: item.image,
    sku: item.id,
    brand: { '@type': 'Brand', name: '3D-CUSTOM' },
    offers: {
      '@type': 'Offer',
      price: item.price.toFixed(2),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}${pagePath}`,
      seller: { '@type': 'Organization', name: '3D-CUSTOM' },
    },
  })),
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: eboLibraryFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export const pages = {
  '/': {
    title: '3D Floor Plans & BAS Graphics for Controls Integrators | 3D-CUSTOM',
    description:
      '3D floor plans and HVAC equipment graphics for building automation front ends (Niagara, Metasys, WebCTRL). Fast turnaround, PNG/TIF files. Your first floor plan is free.',
  },
  '/services': {
    title: 'BAS Graphics Services: 3D Floor Plans & Equipment Graphics | 3D-CUSTOM',
    description:
      'Custom 3D floor plans with ductwork, VAV boxes and zones, plus AHU, chiller and boiler graphics for building automation systems. Built for controls contractors.',
  },
  '/bas-graphics': {
    title: '3D BAS Graphics Packages for EcoStruxure & Niagara | 3D-CUSTOM',
    description:
      'Complete 3D graphics packages for building automation front ends: home page, floor plans, central plant, AHU, alarms, trends and schedules. Native TGML and PX, bound to your points.',
  },
  '/work': {
    title: 'Our Work: 3D Floor Plan & HVAC Graphic Samples | 3D-CUSTOM',
    description:
      'Sample 3D floor plans for BAS front ends: VAV and ductwork layouts, realistic office, hospital and school floors, and animated chiller and boiler cutaways.',
  },
  '/about': {
    title: 'About 3D-CUSTOM | BAS Graphics Specialist, Manassas VA',
    description:
      '3D-CUSTOM creates 3D floor plans and equipment graphics for building automation integrators across the US, based in Manassas, Virginia.',
  },
  '/contact': {
    title: 'Contact 3D-CUSTOM | BAS Graphics Quotes',
    description:
      'Send your floor plan or ask for a quote on 3D BAS graphics. Email Design@3d-custom.com or call (202) 998-3507.',
  },
  '/faqs': {
    title: 'FAQs: 3D Floor Plans for Building Automation | 3D-CUSTOM',
    description:
      'Answers about file formats, turnaround time, pricing and revisions for 3D floor plans and BAS equipment graphics.',
  },
  '/shop': {
    title: 'Order 3D Floor Plans & Equipment Graphics Online | 3D-CUSTOM',
    description:
      'Order a 3D floor plan from $195 per floor or an equipment graphic for $60, or download our HVAC graphics library: an EBO graphics library of TGML components and HVAC animated graphics for any BAS graphics library, now also a Niagara 4 graphics library with Niagara Px graphics (N4 HVAC graphics, Tridium graphics). Pay online and upload your drawings.',
    jsonLd: [productSchema('/shop')],
  },
  '/ebo-graphics-library': {
    title: 'EcoStruxure Graphics Library: 3D EBO Graphics & Site Templates | 3D-CUSTOM',
    description:
      '3D EBO graphics library: animated TGML components, pipes and valves that fit 1:1, and complete EcoStruxure site templates. Prices from $49, instant download.',
    jsonLd: [
      productSchema('/ebo-graphics-library', libraryCatalog.filter((item) => item.category !== NIAGARA)),
      faqSchema,
    ],
  },
  '/contact-for-offer': {
    title: 'Get Your First 3D Floor Plan Free | 3D-CUSTOM',
    description:
      'Upload a 2D floor plan (PDF, CAD or sketch) and get a 3D floor plan for your BAS graphics free of charge, with one revision included.',
  },
  '/order-received': {
    title: 'Order Received | 3D-CUSTOM',
    description: 'Upload your drawings to start your 3D-CUSTOM order.',
    noindex: true,
  },
};

export const fallback = {
  title: 'Page not found | 3D-CUSTOM',
  description: pages['/'].description,
  noindex: true,
};
