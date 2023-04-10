import React, {useContext, useState} from 'react'
import styles from '../../CSS/newproject.module.css'
import proyectoContext from '../../context/proyectos/ProyectoContext'



const NewProject = () => {

  //Obtener el state del formulario 

  const proyectosContext = useContext(proyectoContext);

  const { agregarProyecto } = proyectosContext;

  


  const [proyecto, setProyecto] = useState({
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

      if(name.trim() === ''){
        return;
      }

      agregarProyecto(proyecto)

      setProyecto({
        name: ''
      })

      

      
  }
  return (
    <div className={styles.on}>
        <form
        onSubmit={HandleSubmit}
        >
            <input 
            required
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