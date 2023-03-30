import axios from 'axios'
import React, {useState, useEffect, createContext} from 'react'
import { useParams } from 'react-router';


export const searchContext =  createContext() 


const SearchProvider = (props) => {
    const { name } = useParams();

    const [search, setSearch] = useState([]);



    useEffect(() => {

      
            const getApi = async() =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    
                const {data} = await axios.get(url)
                setSearch(data.drinks)
    
    
            }
    
            getApi()

     
       


      
    }, [search])
    


  return (
    <searchContext.Provider
    value={{
     
        search
    }}
    >
    {props.children}

    </searchContext.Provider>
  )
}

export default SearchProvider