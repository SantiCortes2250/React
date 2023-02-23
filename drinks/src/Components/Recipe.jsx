import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'


const Recipe = ({recipe}) => {

    const {setIdrecipe} = useContext(ModalContext)

  return (
    <div className="col-md-4 mb-3">
        <div className="card">
            <h2 className="card-header">{recipe.strDrink}</h2>

            <img src={recipe.strDrinkThumb} alt={`Image de ${recipe.strDrink}`} className="card-img-top" />

            <div className="card-body">
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