export interface Product {
  id: string
  name: string
  categoryId: string
  image?: string
  description?: string
  specifications?: string[]
  sizes?: string[]
  colors?: string[]
  standards?: string[]
  packaging?: string
}
