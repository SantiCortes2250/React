import React, { useContext } from "react";
import styles from '../CSS/drink.module.css'
import { ModalContext } from "../context/ModalContext";
import Button from "./Button";

const Drink = ({ recipe }) => {
  const { setIdrecipe, setOpen } = useContext(ModalContext)

  return (
      <div className={styles.card}>
        <div className={styles.overlay}
        onClick={() => {
          setIdrecipe(recipe.idDrink)
          setOpen(true)
          }}>
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