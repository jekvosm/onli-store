import type { FC } from 'react'

import styles from './directory-item.module.css'

type DirectoryItemProps = {
  directoryItem: DirectoryItem
}

const DirectoryItem: FC<DirectoryItemProps> = ({ directoryItem }) => {
  const { name, title, imageUrl } = directoryItem

  return (
    <div className={styles.directory_item__container}>
      <img src={imageUrl} alt={name} className={styles.directory_item__image} />
      <div className={styles.directory_item__badge}>
        <h2>{title}</h2>
      </div>
    </div>
  )
}
export default DirectoryItem
