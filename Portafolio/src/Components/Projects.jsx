import React from 'react'
import info from '../../info.json'
import styles from '../CSS/projects.module.css'

const Projects = () => {
  return (
    <div className={styles.container} id='projects'>
       <h2 className={styles.section}>
        My Projects
        <span className={styles.title}> Project </span>

      </h2>
      <div className={styles.cards}>
        {info.Projects.map((project, index) =>(
            <div key={index} className={styles.card}>
              <div className={styles.hover}>
                <img src={project.icon} alt="" />
                <p>{project.project}</p>
                <a href={project.Link} target='_blank'>Link</a>
              </div>
              <div className={styles.image}>
                <img src={project.image} alt="" />
              </div>
              <h2>{project.project}</h2>
            </div>
          ))}
        

      </div>
      <div className={styles.btn}>
       
          <a href='https://github.com/SantiCortes2250/React' target="_blank">All projects</a>
      </div>
    </div>
  )
}

export default Projects