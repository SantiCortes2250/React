import React from 'react'
import useSelect from '../Hooks/useSelect'
import styles from './Form.module.css'

const Form = ({setCategory}) => {

  const options = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Business'},
    {value: 'entertainment', label: 'Entertaiment'},
    {value: 'health', label: 'Health'},
    {value: 'science', label: 'Science'},
    {value: 'sports', label: 'Sports'},
    {value: 'technology', label: 'Technology'}
  ]


  const [state, SelectNoticies] = useSelect('general', options)


  const HandleSubmit = (e) =>{
    e.preventDefault()

    setCategory(state)

  }

  return (
    <div className={`${styles.buscaodr} row`}>
        <div className="col s12 m8 offset-m2">
            <form
             onSubmit={HandleSubmit}
            >
                <h2 className={styles.heading}>Categories</h2>
                <SelectNoticies/>
                <div className="input-field col s12">
                    <input
                        type='submit'
                        className={`${styles['btn-block']} btn-large amber darken-2`}
                        value='Search'
                     />
                </div>
            </form>
        </div>
        

    </div>
  )
}

export default Form