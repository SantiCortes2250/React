import React from 'react'
import styles from '../../CSS/cardLogout.module.css'
import {NavLink} from 'react-router-dom'

const Logout = () => {
  return (
    <>
    <NavLink className={styles.logout}><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679096981/Projects/icons/cerrarsesion_o4imu1.png" alt="" />Logout</NavLink>
    </>
  )
}

export default Logout