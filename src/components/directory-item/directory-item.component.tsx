import type { FC } from 'react'

type DirectoryItemProps = {
  directoryItem: DirectoryItem
}

const DirectoryItem: FC<DirectoryItemProps> = ({ directoryItem }) => {
  return (
    <div>
      <h2>{directoryItem.title}</h2>
    </div>
  )
}
export default DirectoryItem
