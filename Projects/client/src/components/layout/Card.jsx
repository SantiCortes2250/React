import React from 'react'
import styles from '../../CSS/card.module.css'

const Card = () => {
  return (
    
    <div className={styles.card}>
        <div className={styles.info}>
        <p>Name Project</p>
        <h2>Name Task</h2>
        <span>Estate</span>
        </div>
        <div className={styles.action}>
        <button><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678768158/Projects/icons/editar_nleyp1.png" alt="" /></button>
        <button><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678768160/Projects/icons/bote-de-basura_erizji.png" alt="" /></button>
        </div>
    </div>
  )
}

export default Card