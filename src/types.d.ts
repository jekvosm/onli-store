type DirectoryItem = {
  id: number
  name: string
  title: string
  imageUrl: string
  categories: Category[]
}

type Category = {
  id: number
  category: string
  products: Product[]
}

type Product = {
  id: number
  brand: string
  name: string
  description: string
  imageUrl: string
  price: number
  rating: number
  color: string
  composition: string
  availableSizes: Sizes[]
}

type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'
