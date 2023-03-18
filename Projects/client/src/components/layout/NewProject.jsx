import React, {useState} from 'react'
import styles from '../../CSS/newproject.module.css'


const NewProject = ({more}) => {


  const [proyecto, setProyecto] = useState({
    id: '',
    name:''
  })


  const { name } = proyecto;

  const HandleChange = (e) =>{
    setProyecto({
      ...proyecto,
      [e.target.name] : e.target.value
    }) 


  }

  const HandleSubmit = (e) =>{
      e.preventDefault()

      
  }
  return (
    <div className={more % 2 == 0 ? styles.on : styles.off}>
        <form
        onSubmit={HandleSubmit}>
            <input 
            type="text"
            className='name-project' 
            placeholder='Name Project'
            value={name}
            name='name'
            onChange={HandleChange}/>
            <button>create project</button>
        </form>
    </div>
  )
}

export default NewProject