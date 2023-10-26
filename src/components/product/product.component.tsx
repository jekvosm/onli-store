import type { FC } from 'react'

import styles from './product.module.css'

type ProductProps = {
  product: Product
}

const Product: FC<ProductProps> = ({ product }) => {
  const { brand, name, price, rating, imageUrl } = product
  return (
    <div className={styles.product_container}>
      <img src={imageUrl} alt={name} className={styles.product_image} />
      <div className={styles.container_price_rating}>
        <span className={styles.product_price}>{price}</span>
        <span className={styles.product_rating}>{rating}</span>
      </div>
      <div className={styles.product_title}>
        <span className={styles.product_brand}>{brand}</span> /{' '}
        <span className={styles.product_name}>{name}</span>
      </div>
    </div>
  )
}
export default Product
