import React, {useContext} from 'react'
import { searchContext } from '../context/SearchContext'



const Drinks = () => {

    const { search } = useContext(searchContext)

  return (
    <div>
        {search.map(drink => (
            <div>
                <p>{drink.strDrink}</p>
            </div>
        ))}
    </div>
  )
}

export default Drinks