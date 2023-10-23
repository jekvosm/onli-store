type DirectoryItem = {
  id: number
  title: string
  categories: Category[]
}

type Category = {
  id: number
  category: string
  items: CategoryItem[]
}

type CategoryItem = {
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
