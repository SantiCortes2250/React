import React from 'react'
import styles from '../CSS/recipes.module.css'
import Button from './Button'


const Recipes = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
        <h2>Best Recipes</h2>
        <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.
        Odit cum quae, consequuntur laborum saepe
        inventore sapiente quam sint porro earum magni?
        Harum repellat accusantium fugit ipsum enim odit, 
        delectus facere?</p>
        <Button title='More Info'/>

        </div>
        
    </div>
  )
}

export default Recipes