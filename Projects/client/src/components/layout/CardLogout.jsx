import React from 'react'
import Logout from '../auth/Logout'
import styles from '../../CSS/cardLogout.module.css'
import {NavLink} from 'react-router-dom'


const CardLogout = ({open}) => {
  return (
    <div className={open % 2 == 0 ? styles.card : styles.cardOff}>
        <NavLink to={'/Profile'}><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678747316/Projects/icons/usuario_pkvbnb.png" alt="" />Profile</NavLink>
        <NavLink to={'/Dashboard'}><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678933181/Projects/icons/home_na0ym5.png" alt="" />Dashboard</NavLink>
        <Logout/>
    </div>
  )
}

export default CardLogout