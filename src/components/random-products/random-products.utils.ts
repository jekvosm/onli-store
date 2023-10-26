export const getRandomProducts = (shopData: DirectoryItem[]): Product[] => {
  const allProducts = shopData
    .map(directoryItem => directoryItem.categories)
    .flat()
    .map(categoryItem => categoryItem.products)
    .flat()

  const productsSet = new Set<Product>()

  while (productsSet.size < 10) {
    const randomNumber = Math.floor(Math.random() * allProducts.length)
    const item = allProducts[randomNumber]

    productsSet.add(item)
  }

  const randomProducts = Array.from(productsSet)

  return randomProducts
}
