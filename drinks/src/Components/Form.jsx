import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../context/CategoriesContext'
import { RecipesContext } from '../context/RecipesContext'

import Error from './Error'

const Form = () => {

    const { categories } = useContext(CategoriesContext)
    const { setSearch, setSubmit } = useContext(RecipesContext)

    const [search, setsearch] = useState({
        name: '',
        category: ''
    })

    const [error, setError] = useState(false)


    const {name, category} = search


    const HandleChange = (e) =>{
        setsearch({
            ...search,
            [e.target.name] : e.target.value
            
        })

    }

    const HandleSubmit = (e) =>{
        e.preventDefault()

        if(name.trim() === '' || category.trim() === ''){
            setError(true)
            return;
        }

        setError(false)
        setSearch({
            ingredient: name,
            category: category
        })
        setSubmit(true)






    }

    
  return (
    <form
    onSubmit={HandleSubmit}
    className=''>
        <fieldset className=''>
            <legend>Search drinks for category or ingredient</legend>

        </fieldset>
        {error ? <Error message='all fields are required'/>: null}
        <div className="row">
            <div className="col-md-4">
                <input 
                type="text"
                className=''
                name='name'
                placeholder='search ingredients' 
                onChange={HandleChange}
                />
                
            </div>
            <div className="col-md-4">
               
                <select
                className=''
                name='category'
                onChange={HandleChange}
                >
                    <option value="">--Select Category--</option>
                    {categories.map(category =>(
                        <option value={category.strCategory}
                        key={category.strCategory}
                        >{category.strCategory}
                        </option>
                    ))}   
                </select>
            </div>
            <div className="">
                <input 
                type="submit"
                className='' 
                value='search drinks'
                />
            </div>
        </div>
    </form>
  )
}

export default Form