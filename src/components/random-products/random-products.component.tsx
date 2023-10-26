import SHOP_DATA from '../../shop-data'
import Product from '../product/product.component'
import { getRandomProducts } from './random-products.utils'

import styles from './random-products.module.css'

const randomProducts = getRandomProducts(SHOP_DATA)

const RandomItems = () => {
  return (
    <div className={styles.products_container}>
      {randomProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
export default RandomItems
