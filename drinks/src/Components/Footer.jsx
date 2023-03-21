import React from 'react'
import styles from '../CSS/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.message}>
            <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679373707/Projects/icons/cita_arvqwv.png" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Minus rem molestiae veritatis.
              
                

            </p>
            <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679373711/Projects/icons/doble-comillas_zbjs1d.png" alt="" />
           
        </div>
        <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679286372/Projects/Logos/stailr_axgsr7.png" alt="" className={styles.logo}/>
        <div className={styles.info}>
        <p>© Copyright  STAILR   |    Developed by Santi Rincon    |    All rights reserved</p>
        </div>

    </div>
  )
}

export default Footer