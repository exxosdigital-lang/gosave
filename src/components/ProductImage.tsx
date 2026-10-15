import { PackageOpen } from 'lucide-react'
import { useState } from 'react'

interface ProductImageProps {
  image?: string
  productName: string
}

function ProductImage({ image, productName }: ProductImageProps) {
  const [imageFailed, setImageFailed] = useState(false)

  if (image && !imageFailed) {
    return (
      <img
        className="product-image"
        src={image}
        alt={productName}
        onError={() => setImageFailed(true)}
      />
    )
  }

  return (
    <div
      className="product-image-placeholder"
      role="img"
      aria-label={`${productName}: product image coming soon`}
    >
      <PackageOpen size={42} strokeWidth={1.5} aria-hidden="true" />
      <span>Product Image Coming Soon</span>
    </div>
  )
}

export default ProductImage
