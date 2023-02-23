import axios from "axios";
import React, {createContext, useState, useEffect} from "react";
export const RecipesContext = createContext()


const RecipesProvider = (props) =>{

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState({
        ingredient: '',
        category: ''
    })

    const [submit, setSubmit] = useState(false)

    const {ingredient, category} = search


    useEffect(() => {

        if(submit){
            const callApi = async ( ) =>{

                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
    
                const {data} = await axios.get(url)
    
                setRecipes(data.drinks)
            }
            callApi()
            
        }
        
      
    }, [search])
    

    return(
        <RecipesContext.Provider
            value={{
                recipes,
                setSearch,
                setSubmit

            }}        
        >
            {props.children}
        </RecipesContext.Provider>
    )

}


export default RecipesProvider