import React, { useContext } from "react";
import { searchContext } from "../context/SearchContext";
import { ModalContext } from "../context/ModalContext";

import styles from "../CSS/drinks.module.css";

const Drinks = () => {
  const { search } = useContext(searchContext);
  const { setIdrecipe, setOpen } = useContext(ModalContext)

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {search.map((drink) => (
          <div className={styles.card} key={drink.idDrink}>
            <img
              src={drink.strDrinkThumb}
              alt={`Image de ${drink.strDrink}`}
            />
            <div className={styles.btn}>
              <button
              onClick={() => {
                setIdrecipe(drink.idDrink)
                setOpen(true)
                }}>More Info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
