import React, {useContext, useState} from 'react'
import styles from '../../CSS/newproject.module.css'
import proyectoContext from '../../context/proyectos/ProyectoContext'



const NewProject = ({more}) => {

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