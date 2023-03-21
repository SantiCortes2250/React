import React from "react";
import styles from '../CSS/drink.module.css'
import Button from "./Button";

const Drink = ({ recipe }) => {

  return (
      <div className={styles.card}>
        <div className={styles.overlay}>
            <h2>{recipe.strDrink}</h2>
            <Button title='More Info'/>
        </div>
        <img
          src={recipe.strDrinkThumb}
          alt={`Image de ${recipe.strDrink}`}
          className={styles.image}
        />
      
        
      </div>
  );
};

export default Drink;