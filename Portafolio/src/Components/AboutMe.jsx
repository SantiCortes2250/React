import React from 'react'
import styles from "../CSS/about.module.css";

import info from '../../info.json'


const AboutMe = () => {


  
  return (
    <div className={styles.container} id='about' >
      <h2 className={styles.section}>
        About me
        <span className={styles.title}> About </span>

      </h2>
      <div className={styles.about}>
        <div className={styles.img}>
          <img src={info.image} alt="" />
        </div>
          <div className={styles.info}>
              <h2>I'm Santi Rincon, a Full Stack Developer and Freelancer</h2>
              <p>{info.Description}</p>
              <hr/>
              <div className={styles.dates}>
                  <p>Name:<span>{info.name}</span></p>
                  <p>From:<span>{info.From}</span></p>
                  <p>Phone:<span>{info.Phone}</span></p>
                  <p>Email:<span>{info.Email}</span></p>
              </div>
                <a href='./cv-santiagoRincon.pdf' download> <button>Download CV</button></a>
           
          </div>
      </div>
    
    </div>
  )
}

export default AboutMe