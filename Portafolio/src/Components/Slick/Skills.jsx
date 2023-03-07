import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slick.css'
import  settings  from './settings';
import style from '../../CSS/skills.module.css'
import info from '../../../info.json'

const Skills = () => {

   
  return (
    <div className={style.container}>
      <h2 className={style.section}>
        My Skills
        <span className={style.title}> Skills </span>

      </h2>
      <div className={style.icons}>
      <Slider {...settings}>
        {info.Skills.map((skill, index) =>(
          <div className={style.img} key={index}>
            <img src={skill.icon} alt="" />
            

          </div>
         
        ))}
          
        </Slider>

      </div>
        

    </div>
  )
}

export default Skills