import React from 'react'
import logo from '../../src/Assets/img/logo.png'
import styles from '../CSS/nav.module.css'

const Nav = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>
            <a href="">
             <img src={logo} alt="" className={styles.img} />
            </a>
        </div>
        <div className={styles.links}>
            <nav className={styles.linksN}>
                <a href="">About Me</a>
                <a href="">Resume</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </nav>
        </div>
    </div>
  )
}

export default Nav