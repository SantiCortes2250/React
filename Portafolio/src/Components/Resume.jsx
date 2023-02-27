import React from 'react'
import info from '../../info.json'
import style from '../CSS/resume.module.css'

const Resume = () => {


  return (
    <div className={style.container}>
      <div>
        <h2>Experience</h2>
        {
          info.Experience.map(expe => (
            <div className={style.info}>
              <h4>{expe.company}</h4>
              <p>{expe.year}</p>
              <p>{expe.work}</p>
            </div>
          ))
        }
      </div>
      <div>
        <h2>Education</h2>
        {
          info.Education.map(edu => (
            <div className={style.info}>
              <h4>{edu.certificate}</h4>
              <p>{edu.year}</p>
              <p>{edu.university}</p>
            </div>
          ))
        }
      </div>

      
    </div>
  )
}

export default Resume