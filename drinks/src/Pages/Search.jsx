import React from 'react'
import Drinks from '../Components/Drinks'
import SearchProvider from '../context/SearchContext';



const Search = () => {
  return (
    <>
       <SearchProvider>
       <Drinks/>

       </SearchProvider>
 


    </>
  
    
  )
}

export default Search