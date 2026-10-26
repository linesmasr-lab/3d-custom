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
import hvacValvesSensorsImage from '../assets/pages/shop-hvac-valves-sensors.webp';
import './Shop.css';

const categories = [
  { slug: '3d-floorplan', label: '3D Floorplans' },
  { slug: 'equipment', label: 'Equipment Graphics' },
  { slug: 'hvac-library', label: 'HVAC Graphics Library' },
];

const HVAC = 'hvac-library';

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
    price: '$449 one-time',
    regularPrice: '$599',
    badge: 'Launch price',
    detail:
      'Everything below: 27 animated equipment, 378 pipe pieces, 48 AHU & duct and 52 valves & sensors – 505 EBO components + 690 PNG/GIF files.',
    href: 'https://buy.stripe.com/4gM14ofspbP2dKI0XEg7e07',
    category: HVAC,
    image: hvacBundleImage,
    width: 1600,
    height: 1200,
  },
  {
    title: 'Animated Equipment Pack',
    price: '$249 one-time',
    detail:
      '27 chillers, pumps, boilers, towers, fans, AHU, heat exchangers and tanks. OFF image + animated ON cutaway, one bind per part. EBO .tgmlcomponent + PNG + GIF.',
    href: 'https://buy.stripe.com/bJe28scgdaKYbCAayeg7e03',
    category: HVAC,
    image: hvacEquipmentImage,
    hoverImage: hvacEquipmentHoverImage,
    width: 1600,
    height: 1200,
  },
  {
    title: 'Pipe Pack',
    price: '$99 one-time',
    detail:
      '378 isometric pipe fittings in 9 system colors, same scale as the equipment. EBO .tgmlcomponent + PNG.',
    href: 'https://buy.stripe.com/6oUaEY3JHaKY9us21Ig7e04',
    category: HVAC,
    image: hvacPipesImage,
    width: 1600,
    height: 1200,
  },
  {
    title: 'AHU & Duct Pack',
    price: '$149 one-time',
    detail:
      '48 components: fans, dampers, filters, heating/cooling coils, electric heaters, DX coils, heat recovery and duct fittings, with live Value / Position / Mode / Alarm states. EBO + PNG + GIF.',
    href: 'https://buy.stripe.com/bJe14obc97yM7mk0XEg7e05',
    category: HVAC,
    image: hvacAhuDuctImage,
    width: 1600,
    height: 1200,
  },
  {
    title: 'Valves & Sensors Pack',
    price: '$79 one-time',
    detail:
      '52 control valves, actuators, manual valves and immersion, probe, strap-on and differential-pressure sensors. EBO + PNG.',
    href: 'https://buy.stripe.com/9B6eVe1BzcT67mkcGmg7e06',
    category: HVAC,
    image: hvacValvesSensorsImage,
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
                width="720"
                height="1280"
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
