import React, {useContext} from 'react'
import { DrinksContext } from '../context/PopularContext'
import Recipe from './Recipe'
import {settings2} from '../Helpers/slider'
import Slider from "react-slick";
import "../CSS/stylesSlider/slick.css"; 
import "slick-carousel/slick/slick.css"; 
import styles from '../CSS/popular.module.css'



const Popular = () => {

  const {drinks} = useContext(DrinksContext)


    
  return (
    <div className={styles.container}>
      <h2>Popular Drinks</h2>
      <hr />
       <Slider {...settings2}>
        {drinks.map(recipe => (
        <Recipe key={recipe.idDrink} recipe={recipe}/>
        ))}

       </Slider>
   
  </div>
  )
}

export default Popular