import React from 'react'
import styles from '../CSS/images.module.css'

const Images = ({image}) => {

  const { largeImageURL, likes, previewURL, tags, views } = image;

  return (
  
        <div className={styles.card}>
             <div className={styles.btn}>
                <a 
                href={largeImageURL}
                target='_blank'
                rel='nopener noreferrer'
                className=''
                ><img src='https://res.cloudinary.com/dhbi86hxn/image/upload/v1680324032/Projects/icons/ver_xmlf2c.png'></img></a>
            </div>
            <img src={previewURL} alt={tags} className='' />


            <div className={styles.info}>
                <p>{likes} Likes</p>
                <p>{views} Views</p>
            </div>

           
        </div>

  )
}

export default Images