import React from 'react'
import Button from './Button'
import styles from '../CSS/about.module.css'


const About = () => {
  return (
    <div className={styles.container}>
        <h2>About Cocktails</h2>
        <p>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.
        Odit cum quae, consequuntur laborum saepe
        inventore sapiente quam sint porro earum magni?
        Harum repellat accusantium fugit ipsum enim odit, 
        delectus facere?</p>
        <Button title='More Info'/>
    </div>
  )
}

export default About