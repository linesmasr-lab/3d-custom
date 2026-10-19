// Page titles and descriptions for search engines.
// Used in the browser (src/components/Seo.jsx) and at build time
// (scripts/prerender-meta.mjs writes a copy of index.html per page).
export const SITE_URL = 'https://3d-custom.com';

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
      'Order a 3D floor plan from $195 per floor or an equipment graphic for $60. Pay online and upload your drawings.',
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
