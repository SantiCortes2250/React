import React, { useState, useEffect } from 'react'
import axios from "axios";


const Popular = () => {

    
    const [drinks, setDrinks] = useState([])
    console.log(drinks)

    useEffect(() => {

        const callApi = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

            const {data} = await axios.get(url)
            setDrinks(data.drinks)

        }

        callApi()
      
    }, [])
    
  return (
    <div>Popular</div>
  )
}

export default Popular