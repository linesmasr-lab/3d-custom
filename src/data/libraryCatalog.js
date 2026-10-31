// Single source of truth for the HVAC graphics library and the EBO site themes:
// names, prices, page counts and Stripe links. Used by the Shop page, the
// /ebo-graphics-library landing page and the Product schema in seo.js, so a
// price change here updates every place at once.
// Plain data only (no image imports): seo.js runs in Node at build time.

export const HVAC = 'hvac-library';
export const THEMES = 'ebo-themes';
export const NIAGARA = 'hvac-niagara';

export const libraryCatalog = [
  {
    id: 'hvac-bundle',
    category: HVAC,
    title: 'HVAC Graphics Library – Complete Bundle',
    price: 149,
    regularPrice: 217,
    badge: 'Save 30%',
    detail:
      'Everything below: 24 animated equipment, 378 pipes + 15 pipe accessories, and 63 AHU, duct & sensor components – 480 EBO components + 660 PNG/GIF files.',
    href: 'https://buy.stripe.com/9B6dRadkhdXafSQcGmg7e0b',
    image: 'shop-hvac-bundle.webp',
  },
  {
    id: 'hvac-equipment',
    category: HVAC,
    title: 'Animated Equipment Pack',
    price: 99,
    detail:
      '24 chillers, pumps, boilers, towers, fans, AHU, heat exchangers and tanks. OFF image + animated ON cutaway, one bind per part. EBO .tgmlcomponent + PNG + GIF.',
    href: 'https://buy.stripe.com/6oUfZi4NLf1e7mk9uag7e08',
    image: 'shop-hvac-equipment.webp',
  },
  {
    id: 'hvac-pipes',
    category: HVAC,
    title: 'Pipe Pack (pipes + accessories)',
    price: 49,
    detail:
      '378 isometric pipe fittings in 9 system colors + 15 accessories (2-way / 3-way control valves, ball valves, strap-on sensors, rotary actuators) in X / Y / Z. Same scale as the equipment – flanges fit the pipes. EBO .tgmlcomponent + PNG.',
    href: 'https://buy.stripe.com/00w7sM1Bz8CQbCA7m2g7e09',
    image: 'shop-hvac-pipes.webp',
  },
  {
    id: 'hvac-ahu-duct',
    category: HVAC,
    title: 'AHU, Duct & Sensors Pack',
    price: 69,
    detail:
      '63 components on one duct cross-section: fans, dampers, filters, heating/cooling coils, electric heaters, DX coil, heat recovery, duct fittings, coil valves and duct sensors, with live Value / Position / Mode / Alarm states. EBO + PNG + GIF.',
    href: 'https://buy.stripe.com/aFa8wQ2FDdXa7mkcGmg7e0a',
    image: 'shop-hvac-ahu-duct.webp',
  },
  {
    id: 'ebo-themes-both',
    category: THEMES,
    title: 'EBO Site Themes – Dark & Light (both)',
    price: 149,
    regularPrice: 198,
    detail:
      'Both complete EcoStruxure Building Operation sites: 11 + 13 pages, header, navigation menu, alarms, trends, schedules and demo points. Import the .xml and it runs. Requires EBO 6.0+.',
    href: 'https://buy.stripe.com/aFa3cw0xv06kgWU21Ig7e0e',
    image: 'shop-ebo-theme-dark.webp',
  },
  {
    id: 'ebo-theme-dark',
    category: THEMES,
    title: 'EBO Site Theme – Dark',
    price: 99,
    detail:
      'Complete dark EBO site – Home, Central Plant, AHU-1/2, Level 1/2, Garage, Roof, Alarms, Trends, Schedules (11 pages) – with header, navigation and ~450 demo points. Requires EBO 6.0+.',
    href: 'https://buy.stripe.com/5kQbJ21Bz4mAaywayeg7e0c',
    image: 'shop-ebo-theme-dark.webp',
  },
  {
    id: 'ebo-theme-light',
    category: THEMES,
    title: 'EBO Site Theme – Light',
    price: 99,
    detail:
      'Complete light EBO site – adds Chillers Room and Boilers Room (13 pages) – with header, navigation and ~450 demo points. Requires EBO 6.0+.',
    href: 'https://buy.stripe.com/28E14ofsp8CQcGE21Ig7e0d',
    image: 'shop-ebo-theme-light.webp',
  },
  // HVAC graphics library – Niagara 4 Edition (Px)
  {
    id: 'niagara-bundle',
    category: NIAGARA,
    title: 'HVAC Graphics Library – Niagara 4 Complete Bundle',
    price: 149,
    regularPrice: 217,
    badge: 'Save 30%',
    detail:
      'Everything below for Niagara 4: 24 animated equipment, 378 pipes + 15 accessories, 63 AHU, duct & sensor components. Px-ready, full size + compact 60 %, library pages and a live demo page. Tested in Workbench and the web browser.',
    href: 'https://buy.stripe.com/4gM9AU2FD2es4a821Ig7e0f',
    image: 'shop-hvac-niagara.webp',
  },
  {
    id: 'niagara-equipment',
    category: NIAGARA,
    title: 'Animated Equipment Pack – Niagara 4',
    price: 99,
    detail:
      '24 chillers, pumps, boilers, towers, fans, AHU, heat exchangers and tanks. OFF image + animated ON cutaway – bind one Boolean point. Full size + compact.',
    href: 'https://buy.stripe.com/dRm14o6VTcT6220fSyg7e0g',
    image: 'shop-hvac-equipment.webp',
  },
  {
    id: 'niagara-pipes',
    category: NIAGARA,
    title: 'Pipe Pack – Niagara 4 (pipes + accessories)',
    price: 49,
    detail:
      '378 isometric pipe fittings in 9 system colors + 15 control valves, ball valves, sensors and actuators. Same scale as the equipment – flanges fit 1:1. Full size + compact.',
    href: 'https://buy.stripe.com/fZu28s6VTbP2aywgWCg7e0h',
    image: 'shop-hvac-pipes.webp',
  },
  {
    id: 'niagara-ahu-duct',
    category: NIAGARA,
    title: 'AHU, Duct & Sensors Pack – Niagara 4',
    price: 69,
    detail:
      '63 AHU and duct components – fans, dampers, filters, coils, heaters, DX coil, heat recovery, duct fittings and sensors – with Status / Value / Position / Mode / Alarm layers. Full size + compact.',
    href: 'https://buy.stripe.com/4gM14o2FD06kfSQ0XEg7e0i',
    image: 'shop-hvac-ahu-duct.webp',
  },
];

// "$149 one-time"
export const formatPrice = (amount) => `$${amount} one-time`;
