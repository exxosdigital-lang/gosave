import { ArrowRight } from 'lucide-react'
import type { Product } from '../types/product'
import ProductImage from './ProductImage'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const productHref = `/products/${encodeURIComponent(product.categoryId)}/${encodeURIComponent(product.id)}`

  return (
    <article className="product-card">
      <div className="product-card-image">
        <ProductImage image={product.image} productName={product.name} />
      </div>
      <div className="product-card-content">
        <h2>{product.name}</h2>
        {product.description && <p>{product.description}</p>}
        {product.specifications && product.specifications.length > 0 && (
          <ul className="product-card-specifications">
            {product.specifications.map((specification) => (
              <li key={specification}>{specification}</li>
            ))}
          </ul>
        )}
        {product.packaging && (
          <p className="product-card-packaging">
            <strong>Packaging:</strong> {product.packaging}
          </p>
        )}
        <a className="button-primary product-card-action" href={productHref}>
          View Detail <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default ProductCard
