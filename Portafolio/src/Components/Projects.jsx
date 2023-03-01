import React from 'react'
import info from '../../info.json'
import styles from '../CSS/projects.module.css'

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {info.Projects.map((project, index) =>(
            <div key={index} className={styles.card}>
              <div className={styles.hover}>
                <img src={project.icon} alt="" />
                <p>{project.project}</p>
                <a href="">Enlace</a>
              </div>
              <div className={styles.image}>
                <img src={project.image} alt="" />
              </div>
              <h2>{project.project}</h2>
            </div>
          ))}
        

      </div>
      <div className={styles.btn}>
        <button>All projects</button>
      </div>
    </div>
  )
}

export default Projects