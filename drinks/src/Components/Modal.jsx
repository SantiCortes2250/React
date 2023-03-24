import { style } from '@mui/system'
import React, {useContext} from 'react'
import { ModalContext } from '../context/ModalContext'
import styles from '../CSS/modal.module.css'

const Modal = () => {

  const {drink, open, setOpen} = useContext(ModalContext)
  return (
    <div className={open ? styles.open : styles.close} onClick={e=> setOpen(false)}>
      <div className={styles.modal} >
        <div className={styles.img}>
          <img src={drink.strDrinkThumb} alt="" />
        </div>
        <div className={styles.info}>
          <h2>{drink.strDrink}</h2>
          <p>
            Category:<span>{drink.strCategory}</span>
            Instructions:<span>{drink.strInstructions}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal