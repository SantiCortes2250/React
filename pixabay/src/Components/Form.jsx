import React, {useState} from 'react'
import Error from './Error'
import styles from '../CSS/form.module.css'

const Form = ({word}) => {

  const [search, setsearch] = useState('')
  const [error, seterror] = useState(false)

  const HandleSubmit = (e) =>{
    e.preventDefault()


    if(search.trim() === ''){
      seterror(true)
      return

    }

    seterror(false)

    word(search)





  }

  return (
    <form
    onSubmit={HandleSubmit}>
        
      
        <div className={styles.search}>
            <input 
            type="text"
            onChange={e => setsearch(e.target.value)}
            className={styles.search__input}
            placeholder='Search Images, Ex: Food'
             />
             <button
             className={styles.search__button}>
            

             </button>
        </div>
        { error ? <Error message='Enter a value'/> : null}
        
    </form>
  )
}

export default Form