import SHOP_DATA from '../../shop-data'
import DirectoryItem from '../directory-item/directory-item.component'

import styles from './directory.module.css'

const Directory = () => {
  return (
    <div className={styles.home__directory}>
      {SHOP_DATA.map(directoryItem => (
        <DirectoryItem key={directoryItem.id} directoryItem={directoryItem} />
      ))}
    </div>
  )
}
export default Directory
