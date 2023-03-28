import { style } from "@mui/system";
import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import styles from "../CSS/modal.module.css";

const Modal = () => {
  const { drink, open, setOpen } = useContext(ModalContext);
  return (
    <>
      <div
        className={open ? styles.open : styles.close}
        onClick={(e) => setOpen(false)}
      ></div>
      <div className={open ? styles.ModalO : styles.ModalC}>
      <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679702271/Projects/icons/cerrar_vskf8q.png" alt="" className={styles.icon} onClick={(e) => setOpen(false)}/>
        <div className={styles.img}>
          <img src={drink.strDrinkThumb} alt="" className={styles.imgDrink}/>
          
        </div>
        <div className={styles.info}>
          <h2>{drink.strDrink}</h2>
          <p>Category:<span>{drink.strCategory}</span> </p>
          <p> Instructions:<span>{drink.strInstructions}</span></p>
         
        </div>
      </div>
    </>
  );
};

export default Modal;
