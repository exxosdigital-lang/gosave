import { categories } from '../data/categories'
import { products } from '../data/products'
import ProductImage from './ProductImage'

interface ProductDetailProps {
  categoryId: string
  productId: string
}

function ProductDetail({ categoryId, productId }: ProductDetailProps) {
  const category = categories.find((item) => item.id === categoryId)
  const product = products.find(
    (item) => item.id === productId && item.categoryId === categoryId,
  )
  const productListHref = `/products/${encodeURIComponent(categoryId)}`

  if (!product || !category) {
    return (
      <section className="section product-page">
        <div className="page-container product-empty-state">
          <h1>Product not found</h1>
          <a className="button-secondary" href="/#products">
            Back to Products
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="section product-page">
      <div className="page-container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <a href="/#home">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/#products">Products</a>
          <span aria-hidden="true">/</span>
          <a href={productListHref}>{category.name}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <a
          className="button-secondary product-back-link"
          href={productListHref}
        >
          Back to Products
        </a>

        <div className="product-detail-layout">
          <div className="product-detail-image">
            <ProductImage image={product.image} productName={product.name} />
          </div>
          <div className="product-detail-content">
            <span className="eyebrow">{category.name}</span>
            <h1>{product.name}</h1>
            {product.description && (
              <p className="product-detail-description">
                {product.description}
              </p>
            )}

            {product.packaging && (
              <section className="product-detail-section">
                <h2>Packaging</h2>
                <p>{product.packaging}</p>
              </section>
            )}

            {product.specifications &&
              product.specifications.length > 0 && (
                <section className="product-detail-section">
                  <h2>Specifications</h2>
                  <ul>
                    {product.specifications.map((specification) => (
                      <li key={specification}>{specification}</li>
                    ))}
                  </ul>
                </section>
              )}

            {product.standards && product.standards.length > 0 && (
              <section className="product-detail-section">
                <h2>Standards / Certifications</h2>
                <ul>
                  {product.standards.map((standard) => (
                    <li key={standard}>{standard}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
