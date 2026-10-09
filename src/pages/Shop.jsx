import { Link, useSearchParams } from 'react-router-dom';
import floorplanImage from '../assets/pages/shop-floorplan.webp';
import floorplanHoverImage from '../assets/pages/shop-floorplan-hover.webp';
import './Shop.css';

const categories = [
  { slug: '3d-floorplan', label: '3d Floorplan' },
];

const products = [
  {
    title: 'Custom 3D Floorplan Design',
    price: 'from $100.00',
    to: '/shop/p/custom-3d-floorplan-designer',
    category: '3d-floorplan',
    image: floorplanImage,
    hoverImage: floorplanHoverImage,
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
              <Link className="shop-product" to={product.to} key={product.to}>
                <div className="shop-product__media">
                  <img
                    className="shop-product__image"
                    src={product.image}
                    alt={product.title}
                    width="1000"
                    height="477"
                  />
                  <img
                    className="shop-product__image shop-product__hover"
                    src={product.hoverImage}
                    alt=""
                    width="1000"
                    height="502"
                    loading="lazy"
                  />
                </div>
                <div className="shop-product__body">
                  <span className="shop-product__title">{product.title}</span>
                  <span className="shop-product__price">{product.price}</span>
                  <span className="shop-product__link">
                    View product <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

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
