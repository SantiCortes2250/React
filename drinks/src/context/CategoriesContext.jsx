import axios from "axios";
import React, { createContext, useState, useEffect } from "react";



//create context
export const CategoriesContext = createContext();

//Provider, functions and states

const CategoriesProvider = (props) =>{

    const [categories, setCategories] = useState([])


    //call to api

    useEffect(() => {

        
        const callApi = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const {data} = await axios.get(url)
            setCategories(data.drinks)

        }

        callApi()
      
    
     
    }, [])
    


    return(
        <CategoriesContext.Provider
        value={{
            categories

        }}>
            {props.children}
        </CategoriesContext.Provider>
    )
    
}

export default CategoriesProvider