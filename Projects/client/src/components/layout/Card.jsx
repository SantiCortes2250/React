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
          
        
        </div>
    </div>
  )
}

export default Card