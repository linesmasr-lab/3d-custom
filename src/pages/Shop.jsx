import { Link, useSearchParams } from 'react-router-dom';
import floorplanImage from '../assets/pages/shop-floorplan.webp';
import floorplanHoverImage from '../assets/pages/shop-floorplan-hover.webp';
import largeFloorImage from '../assets/work/office-vav.webp';
import equipmentImage from '../assets/work/boiler.webp';
import hvacBundleImage from '../assets/pages/shop-hvac-bundle.webp';
import hvacEquipmentImage from '../assets/pages/shop-hvac-equipment.webp';
import hvacEquipmentHoverImage from '../assets/pages/shop-hvac-equipment-hover.webp';
import hvacPipesImage from '../assets/pages/shop-hvac-pipes.webp';
import hvacAhuDuctImage from '../assets/pages/shop-hvac-ahu-duct.webp';
import hvacPipeAccessoriesImage from '../assets/pages/shop-hvac-pipe-accessories.webp';
import eboThemeDarkImage from '../assets/pages/shop-ebo-theme-dark.webp';
import eboThemeLightImage from '../assets/pages/shop-ebo-theme-light.webp';
import './Shop.css';

const categories = [
  { slug: '3d-floorplan', label: '3D Floorplans' },
  { slug: 'equipment', label: 'Equipment Graphics' },
  { slug: 'hvac-library', label: 'HVAC Graphics Library' },
  { slug: 'ebo-themes', label: 'EBO Site Themes' },
];

const HVAC = 'hvac-library';
const THEMES = 'ebo-themes';

// Each product opens its Stripe payment link. After paying, Stripe sends the
// customer to /order-received, where they upload their drawings.
const products = [
  {
    title: '3D Floor Plan - Standard Floor',
    price: '$195 per floor',
    detail: 'Up to about 25,000 sq ft. Delivered in 3 business days, one revision included.',
    href: 'https://buy.stripe.com/6oUbJ23JH5qE9us9uag7e00',
    category: '3d-floorplan',
    image: floorplanImage,
    hoverImage: floorplanHoverImage,
  },
  {
    title: '3D Floor Plan - Large or Complex Floor',
    price: '$295 per floor',
    detail: 'Large, irregular or highly detailed floors. One revision included.',
    href: 'https://buy.stripe.com/8x214o3JH4mAgWU8q6g7e01',
    category: '3d-floorplan',
    image: largeFloorImage,
  },
  {
    title: '3D Equipment Graphic',
    price: '$60 per graphic',
    detail: 'AHU, VAV box, boiler, chiller, pump and similar, ready for live points.',
    href: 'https://buy.stripe.com/5kQaEY94106k7mk5dUg7e02',
    category: 'equipment',
    image: equipmentImage,
  },
  // HVAC graphics library: ready-made components, instant download.
  // Images are 1600 x 1200 (4:3) with a transparent background.
  {
    title: 'HVAC Graphics Library – Complete Bundle',
    price: '$149 one-time',
    regularPrice: '$217',
    badge: 'Save 30%',
    detail:
      'Everything below: 24 animated equipment, 378 pipes + 15 pipe accessories, and 63 AHU, duct & sensor components – 480 EBO components + 660 PNG/GIF files.',
    href: 'https://buy.stripe.com/9B6dRadkhdXafSQcGmg7e0b',
    category: HVAC,
    image: hvacBundleImage,
    width: 1600,
    height: 1200,
  },
  {
    title: 'Animated Equipment Pack',
    price: '$99 one-time',
    detail:
      '24 chillers, pumps, boilers, towers, fans, AHU, heat exchangers and tanks. OFF image + animated ON cutaway, one bind per part. EBO .tgmlcomponent + PNG + GIF.',
    href: 'https://buy.stripe.com/6oUfZi4NLf1e7mk9uag7e08',
    category: HVAC,
    image: hvacEquipmentImage,
    hoverImage: hvacEquipmentHoverImage,
    width: 1600,
    height: 1200,
  },
  {
    title: 'Pipe Pack (pipes + accessories)',
    price: '$49 one-time',
    detail:
      '378 isometric pipe fittings in 9 system colors + 15 accessories (2-way / 3-way control valves, ball valves, strap-on sensors, rotary actuators) in X / Y / Z. Same scale as the equipment – flanges fit the pipes. EBO .tgmlcomponent + PNG.',
    href: 'https://buy.stripe.com/00w7sM1Bz8CQbCA7m2g7e09',
    category: HVAC,
    image: hvacPipesImage,
    hoverImage: hvacPipeAccessoriesImage,
    width: 1600,
    height: 1200,
  },
  {
    title: 'AHU, Duct & Sensors Pack',
    price: '$69 one-time',
    detail:
      '63 components on one duct cross-section: fans, dampers, filters, heating/cooling coils, electric heaters, DX coil, heat recovery, duct fittings, coil valves and duct sensors, with live Value / Position / Mode / Alarm states. EBO + PNG + GIF.',
    href: 'https://buy.stripe.com/aFa8wQ2FDdXa7mkcGmg7e0a',
    category: HVAC,
    image: hvacAhuDuctImage,
    width: 1600,
    height: 1200,
  },
  // Complete EBO sites (header, navigation, pages and demo points).
  {
    title: 'EBO Site Theme – Dark & Light (both)',
    price: '$149 one-time',
    regularPrice: '$198',
    detail:
      'Both complete EcoStruxure Building Operation sites: 11 + 13 pages, header, navigation menu, alarms, trends, schedules and demo points. Import the .xml and it runs. Requires EBO 6.0+.',
    href: 'https://buy.stripe.com/aFa3cw0xv06kgWU21Ig7e0e',
    category: THEMES,
    image: eboThemeDarkImage,
    hoverImage: eboThemeLightImage,
    width: 1600,
    height: 1200,
  },
  {
    title: 'EBO Site Theme – Dark',
    price: '$99 one-time',
    detail:
      'Complete dark EBO site – Home, Central Plant, AHU-1/2, Level 1/2, Garage, Roof, Alarms, Trends, Schedules – with header, navigation and ~450 demo points. Requires EBO 6.0+.',
    href: 'https://buy.stripe.com/5kQbJ21Bz4mAaywayeg7e0c',
    category: THEMES,
    image: eboThemeDarkImage,
    width: 1600,
    height: 1200,
  },
  {
    title: 'EBO Site Theme – Light',
    price: '$99 one-time',
    detail:
      'Complete light EBO site – adds Chillers Room and Boilers Room (13 pages) – with header, navigation and ~450 demo points. Requires EBO 6.0+.',
    href: 'https://buy.stripe.com/28E14ofsp8CQcGE21Ig7e0d',
    category: THEMES,
    image: eboThemeLightImage,
    width: 1600,
    height: 1200,
  },
];

function Shop() {
  // The chosen category lives in the URL (?category=...), so it can be linked
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get('category');
  const visibleProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  return (
    <main className="page shop">
      <section className="page-hero blueprint">
        <div className="container page-hero__grid page-hero__grid--single">
          <div className="page-hero__copy">
            <p className="eyebrow">Products</p>
            <h1 className="page-title">Shop</h1>
          </div>
        </div>
      </section>

      <section className="page-section shop__section">
        <div className="container">
          <nav aria-label="Product categories">
            <ul className="shop__categories">
              <li>
                <Link to="/shop" aria-current={activeCategory ? undefined : 'page'}>
                  All
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/shop?category=${category.slug}`}
                    aria-current={activeCategory === category.slug ? 'page' : undefined}
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {activeCategory === HVAC && (
            <figure className="shop__video">
              <video
                src="/media/hvac-library-demo.mp4"
                poster="/media/hvac-library-demo-poster.webp"
                width="1280"
                height="720"
                muted
                loop
                playsInline
                controls
                preload="metadata"
                aria-label="Demo of the 3D-CUSTOM HVAC graphics library: animated equipment, pipes, AHU and duct parts, valves and sensors"
              />
            </figure>
          )}

          <div className="shop__grid">
            {visibleProducts.map((product) => (
              <a
                className={`shop-product${product.hoverImage ? ' shop-product--swap' : ''}`}
                href={product.href}
                key={product.href}
              >
                <div className="shop-product__media">
                  <img
                    className="shop-product__image"
                    src={product.image}
                    alt={product.title}
                    width={product.width || 1000}
                    height={product.height || 477}
                  />
                  {product.hoverImage && (
                    <img
                      className="shop-product__image shop-product__hover"
                      src={product.hoverImage}
                      alt=""
                      width={product.width || 1000}
                      height={product.height || 502}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="shop-product__body">
                  <span className="shop-product__title">{product.title}</span>
                  <span className="shop-product__price">
                    {product.regularPrice && (
                      <s className="shop-product__regular">{product.regularPrice}</s>
                    )}
                    {product.price}
                    {product.badge && <span className="shop-product__badge">{product.badge}</span>}
                  </span>
                  <span className="shop-product__detail">{product.detail}</span>
                  <span className="shop-product__link">
                    Buy now <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {activeCategory === HVAC && (
            <p className="shop__fineprint">
              Instant download after payment. One-time purchase, unlimited projects inside your
              company. Works natively in EcoStruxure Building Operation (EBO); PNG/GIF files work
              in any BMS software.
            </p>
          )}

          {activeCategory === THEMES && (
            <p className="shop__note">
              Want this theme with YOUR building&rsquo;s 3D floor plans and plant? We build it –{' '}
              <Link to="/contact-for-offer">Contact for Offer</Link>
            </p>
          )}

          <p className="shop__note">
            Not sure which one fits? <Link to="/contact-for-offer">Send us your plan</Link> and
            we will quote it, or get your first floor plan free.
          </p>

          {visibleProducts.length === 0 && (
            <div className="shop__empty">
              <h2 className="shop__empty-title">No results found</h2>
              <p>No results match your search. Try removing a few filters.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Shop;
