import { categories } from '../data/categories'
import { products } from '../data/products'
import ProductCard from './ProductCard'

interface ProductListProps {
  categoryId?: string
}

function ProductList({ categoryId }: ProductListProps) {
  const category = categories.find((item) => item.id === categoryId)
  const categoryProducts = products.filter(
    (product) => product.categoryId === categoryId,
  )

  return (
    <section className="section product-page">
      <div className="page-container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <a href="/#home">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/#products">Products</a>
          {category && (
            <>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{category.name}</span>
            </>
          )}
        </nav>

        <div className="product-page-heading">
          <span className="eyebrow">GOSAVE Products</span>
          <h1>{category?.name ?? 'Products'}</h1>
          {category && <p>{category.description}</p>}
          <p className="product-count" aria-live="polite">
            {categoryProducts.length}{' '}
            {categoryProducts.length === 1 ? 'Product' : 'Products'}
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="product-grid">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="product-empty-state">
            <p>No products available yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductList
