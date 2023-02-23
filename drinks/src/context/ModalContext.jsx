import axios from "axios";
import React, {createContext, useEffect, useState} from "react";


export const ModalContext = createContext()

const ModalProvider = (props) => {


    const [drink, setDrink] = useState({})
    const [idrecipe, setIdrecipe] = useState(null)

    useEffect(() => {

        const callApi = async() =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`

            const {data} = await axios.get(url)

            setDrink(data.drinks[0])

        }

        callApi()


    }, [idrecipe])
    
  return (
    <ModalContext.Provider
        value={{
            setIdrecipe

        }}
    
    >
        {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider