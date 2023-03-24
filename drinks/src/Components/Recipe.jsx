import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import styles from '../CSS/recipe.module.css'


const Recipe = ({ recipe }) => {
  

  const { setIdrecipe, setOpen } = useContext(ModalContext)

  return (
      <div className={styles.card}>
        <div className={styles.overlay} onClick={() => {
          setIdrecipe(recipe.idDrink)
          setOpen(true)
          }}>
            <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679351037/Projects/icons/mas_xsohog.png" alt="" />
        </div>
        <img
          src={recipe.strDrinkThumb}
          alt={`Image de ${recipe.strDrink}`}
          className={styles.image}
        />
      </div>
  );
};

export default Recipe;
