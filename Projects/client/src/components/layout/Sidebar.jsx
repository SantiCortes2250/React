import React from 'react'
import NewProject from './NewProject'
import styles from '../../CSS/slidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.slidebar}>
        <div className={styles.logo}>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className={styles.enlaces}>
            <p>Dashboard</p>
            <p>Projects</p>
            <div className={styles.projects}>
                <a>Proyecto React</a>
                <a>Proyecto React</a>
                <a>Proyecto React</a>
            </div>
            <a>New Project</a>
            <NewProject/>

        </div>
           
    </div>
  )
}

export default Sidebar