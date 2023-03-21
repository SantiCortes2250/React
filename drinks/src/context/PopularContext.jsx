import axios from "axios";
import React, {useState, useEffect, createContext} from "react";


export const DrinksContext = createContext()

const PopularProvider = (props) => {

    const [drinks, setDrinks] = useState([])


    useEffect(() => {

        const callApi = async () =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`

            const {data} = await axios.get(url)

            setDrinks(data.drinks)
        }

        callApi()
      
    }, [])
    


  return (
    <DrinksContext.Provider
        value={{
            drinks
        }}>
            {props.children}
    </DrinksContext.Provider>
  )
}

export default PopularProvider
