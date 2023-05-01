import React from 'react'
import info from '../../info.json'
import style from '../CSS/resume.module.css'


const Resume = ({isOpen, setIsOpen, setId}) => {


  return (
    <div className={style.container} id='resume'>
      <h2 className={style.section}>
        My Resume
        <span className={style.title}> Resume </span>
      </h2>
      <div className={style.cardsC}>
        <div className={style.cards}>
          <h2>Experience</h2>
          {
            info.Experience.map((expe, index) => (
              <div key={index}>
                <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677974346/Projects/icons/flecha_jw9v6e.png" alt="" className={style.img}/>
                <div className={style.info}>
                <h4>{expe.company}</h4>
                <p>{expe.year}</p>
                <p>{expe.work}</p>
                <button onClick={()=> {setIsOpen(!isOpen), setId(expe.id)}}>Tasks</button>
                </div>
              
              </div>
            ))
          }
        </div>
        <div className={style.cards}>
          <h2>Education</h2>
          {
            info.Education.map((edu, index) => (
              <div key={index}>
                <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677974346/Projects/icons/flecha_jw9v6e.png" alt="" className={style.img}/>
                <div className={style.info}>
                  <h4>{edu.certificate}</h4>
                  <p>{edu.year}</p>
                  <p>{edu.university}</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>
      

      
    </div>
  )
}

export default Resume