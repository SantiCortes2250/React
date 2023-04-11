import React, {useContext} from 'react'
import styles from '../../CSS/card.module.css'
import proyectoContext from '../../context/proyectos/ProyectoContext'
import { NavLink } from 'react-router-dom'
import TareaContext from '../../context/tareas/tareaContext'



const Card = ({proyecto}) => {

  const proyectosContext = useContext(proyectoContext)
  const tareasContext = useContext(TareaContext)
  const { obtenerProyecto, eliminarProyecto } = proyectosContext
  const {  mostrarTareas } = tareasContext;

  const HandleClick = id =>{
    obtenerProyecto(id)
    mostrarTareas(id)

  


  }


  return (
    <NavLink to={'/projects'} className={styles.nav}>
      <div className={styles.card} onClick={() => HandleClick(proyecto.id)}>
        <div className={styles.info}>
        <h2>{proyecto.name}</h2>
        </div>
        <NavLink to={'#'}>
        <div className={styles.action} >
          <button onClick={() => eliminarProyecto(proyecto.id)}>Delete</button>
        </div>

        </NavLink>
        
    </div>
    

    </NavLink>
      
  )
}

export default Card