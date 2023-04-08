import React from 'react'
import styles from '../CSS/message.module.css'

const Message = ({message}) => {
  return (
    <div className={styles.container}>
        <p>{message}</p>
    </div>
  )
}

export default Message