import React from 'react'
import styles from '../../CSS/newproject.module.css'


const NewProject = ({more}) => {
  return (
    <div className={more % 2 == 0 ? styles.on : styles.off}>
        <form>
            <input 
            type="text"
            className='name-project' 
            placeholder='Name Project'
            name='name'/>
            <button>create project</button>
        </form>
    </div>
  )
}

export default NewProject