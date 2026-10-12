import { Link, useSearchParams } from 'react-router-dom';
import floorplanImage from '../assets/pages/shop-floorplan.webp';
import floorplanHoverImage from '../assets/pages/shop-floorplan-hover.webp';
import largeFloorImage from '../assets/work/office-vav.webp';
import equipmentImage from '../assets/work/boiler.webp';
import './Shop.css';

const categories = [
  { slug: '3d-floorplan', label: '3D Floorplans' },
  { slug: 'equipment', label: 'Equipment Graphics' },
];

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
                    width="1000"
                    height="477"
                  />
                  {product.hoverImage && (
                    <img
                      className="shop-product__image shop-product__hover"
                      src={product.hoverImage}
                      alt=""
                      width="1000"
                      height="502"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="shop-product__body">
                  <span className="shop-product__title">{product.title}</span>
                  <span className="shop-product__price">{product.price}</span>
                  <span className="shop-product__detail">{product.detail}</span>
                  <span className="shop-product__link">
                    Buy now <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

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
