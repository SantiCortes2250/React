import React from 'react'
import styles from '../CSS/message.module.css'

const Message = ({message}) => {
  return (
    <div className={message ? styles.container : styles.containerOff}>
        <p>Thanks for you message!!</p>
    </div>
  )
}

export default Message