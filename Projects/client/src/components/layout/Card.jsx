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
   
      <div className={styles.card} onClick={() => HandleClick(proyecto._id)}>
         <NavLink to={'/projects'} className={styles.nav}>
         <div className={styles.info}>
        <h2>{proyecto.name}</h2>
        </div>

         </NavLink>
       
       
        <div className={styles.action} >
          <button onClick={() => eliminarProyecto(proyecto._id)}>Delete</button>
        </div>

    
        
    </div>
    

      
  )
}

export default Card