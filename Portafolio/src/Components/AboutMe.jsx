import React from 'react'
import styles from "../CSS/about.module.css";
import image from '../Assets/img/header.png';
import info from '../../info.json'

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
        <div className={styles.info}>
            <h2>I'm Santi Rincon, a Freelancer and Web Developer</h2>
            <p>{info.Description}</p>
            <hr/>
            <div className={styles.dates}>
                <p>Name:<span>{info.name}</span></p>
                <p>From:<span>{info.From}</span></p>
                <p>Phone:<span>{info.Phone}</span></p>
                <p>Email:<span>{info.Email}</span></p>
            </div>
            <button>Download CV</button>
        </div>
    </div>
  )
}

export default AboutMe