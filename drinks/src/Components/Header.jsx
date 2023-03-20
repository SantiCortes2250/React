import React from 'react'
import images from '../Helpers/ImagesBanner'
import styles from '../CSS/header.module.css'
import {settings} from '../Helpers/slider'
import Slider from "react-slick";
import "../CSS/stylesSlider/slick.css"; 
import "slick-carousel/slick/slick.css"; 
import Nav from './Nav';
import Button from './Button';



const Header = () => {
  return (
    <>
      <Nav/>
     
      <Slider {...settings}>
        {images.map((info, index)=>(
          <div key={index} className={styles.container}>
             <div className={styles.overlay}></div>
            <img src={info.img} alt="" />
            <div className={styles.info}>
              <h2>{info.title}</h2>
              <p>{info.description}</p>
              <Button title='More Info'/>
           
            </div>

          </div>
          
        ))}
        </Slider>
    </>
  )
}

export default Header