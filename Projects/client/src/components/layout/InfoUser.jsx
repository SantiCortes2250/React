import React from 'react'
import styles from '../../CSS/user.module.css'

const InfoUser = () => {
  return (
    <div className={styles.container}>
        <div className={styles.user}>
            <div className={styles.cover}> 
                <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677556129/Projects/portfolio_img_1_g6pras.jpg" alt="" />
            </div>
            <div className={styles.profile}> 
                <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677556129/Projects/portfolio_img_3_oj12nl.jpg" alt="" />
            </div>
            <h2>Santi</h2>
        </div>
        <div className={styles.info}>
            <h4>Cant-Pojects:<p>3</p></h4>
            <h4>Cant-Tasks:<p>6</p></h4>
        </div>
    </div>
  )
}

export default InfoUser