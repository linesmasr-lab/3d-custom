import '../../pages/Shop.css';

// Product cards (styles live in Shop.css). Each card opens its Stripe payment link.
function ProductGrid({ products }) {
  return (
    <div className="shop__grid">
      {products.map((product) => (
        <a
          className={`shop-product${product.hoverImage ? ' shop-product--swap' : ''}`}
          href={product.href}
          key={product.href}
        >
          <div className="shop-product__media">
            {product.mediaTag && <span className="shop-product__tag">{product.mediaTag}</span>}
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
  );
}

export default ProductGrid;
