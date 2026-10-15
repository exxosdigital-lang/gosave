import { ArrowRight } from 'lucide-react'
import type { ProductCategory } from '../data/categories'

interface ProductCategoryCardProps {
  category: ProductCategory
}

function ProductCategoryCard({ category }: ProductCategoryCardProps) {
  return (
    <article className="category-card">
      <div className="category-card-image">
        <img src={category.image} alt={category.name} loading="lazy" />
      </div>
      <div className="category-card-content">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <a
          className="category-card-action"
          href={`/products/${encodeURIComponent(category.id)}`}
          aria-label={`View ${category.name} products`}
        >
          View Products <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default ProductCategoryCard
