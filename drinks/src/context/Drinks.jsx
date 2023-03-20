import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const drinks = createContext();

const Drinks = (props) => {

    const [drinks, setDrinks] = useState([])

    useEffect(() => {

        const callApi = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

            const {data} = await axios.get(url)
            setDrinks(data.drinks)

        }

        callApi()
      
    }, [])
    
  return (
    <Drinks.Provider
    value={{
        drinks
    }}
    >
          {props.children}
    </Drinks.Provider>
  )
}

export default Drinks