import React, {useContext} from 'react'
import { DrinksContext } from '../context/PopularContext'
import {settings2} from '../Helpers/slider'
import Slider from "react-slick";
import "../CSS/stylesSlider/slick.css"; 
import "slick-carousel/slick/slick.css"; 
import styles from '../CSS/popular.module.css'
import Drink from './Drink';


const Latest = () => {

  const {drinks} = useContext(DrinksContext)

    
  return (
    <div className={styles.container}>
      <h2>Latest Drinks</h2>
      <hr />
       <Slider {...settings2}>
        {drinks.map(recipe => (
        <Drink key={recipe.idDrink} recipe={recipe}/>
        ))}

       </Slider>
   
  </div>
  )
}

export default Latest