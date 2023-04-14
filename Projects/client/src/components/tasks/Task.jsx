import React, {useContext} from "react";
import styles from '../../CSS/task.module.css'
import TareaContext from "../../context/tareas/tareaContext";
import proyectoContext from '../../context/proyectos/ProyectoContext'

const Task = ({task}) => {

  const tareasContext = useContext(TareaContext)
  const { eliminarTarea, mostrarTareas, guardarTareaActual } = tareasContext
  const proyectosContext = useContext(proyectoContext)
  const {proyecto} = proyectosContext;

  const [proyectoActual] = proyecto;


 

    const HandleClick = id =>{
 
        eliminarTarea(id)
        mostrarTareas(proyectoActual.id)
       
  
      
    }


    const HandleUpdate = tarea =>{
      guardarTareaActual(tarea)

    }

    
       
    
     
    
  return (
    <div className={styles.task}>
      <label className={styles.checkBox}>
        <input type="checkbox" onClick={() => HandleClick(task.id)}/>
        <div className={styles.transition}></div>
      </label>
      <p>{task.name}</p>
      <div className={styles.edit} onClick={() => HandleUpdate(task)}>
    
        <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1679115730/Projects/icons/lapiz_aekcnf.png" alt="" />


      </div>
    </div>
  );
};

export default Task;
