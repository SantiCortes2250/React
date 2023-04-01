import React from 'react'
import Images from './Images'
import styles from '../CSS/images.module.css'

const ListImages = ({images}) => {
  return (
    <div className={styles.Listimages}>
        {images.map(image =>(
            <Images 
            key={image.id}
            image={image}
            />
        ))}
    </div>
  )
}

export default ListImages