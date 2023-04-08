import React from 'react'
import styles from '../../CSS/card.module.css'

const Card = ({proyecto}) => {
  return (
    
    <div className={styles.card}>
        <div className={styles.info}>
        <p>{proyecto.name}</p>
        <h2>Name Task</h2>
        <span>Estate</span>
        </div>
        <div className={styles.action}>
          
        
        </div>
    </div>
  )
}

export default Card