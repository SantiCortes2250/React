import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'


const Recipe = ({recipe}) => {

    const {setIdrecipe} = useContext(ModalContext)

  return (
    <div className="">
        <div className="">
            <h2 className="">{recipe.strDrink}</h2>

            <img src={recipe.strDrinkThumb} alt={`Image de ${recipe.strDrink}`} className="" />

            <div className="">
                <button
                    type='button'
                    className='btn btn-block btn-primary'
                    onClick={() => setIdrecipe(recipe.idDrink)}
                >
                    View Recipe
                </button>
            </div>
        </div>
    </div>
  )
}

export default Recipe