import React, { useContext } from "react";
import Task from "./Task";
import styles from "../../CSS/listTasks.module.css";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import { Navigate } from "react-router-dom";


const ListTask = () => {
  const proyectosContext = useContext(proyectoContext);
  const tareasContext = useContext(TareaContext);
  const { proyecto } = proyectosContext;
  const { tareasProyecto } = tareasContext;

  if(!proyecto) return <Navigate to={'/Dashboard'}/>;
  const [proyectoActual] = proyecto;

 

  return (
    <div className={styles.container}>
       <h2>{proyectoActual.name}</h2> 
      <div className={styles.tasks}>
        {tareasProyecto.length === 0 ? (
          <h4>No tasks</h4>
        ) : (
            tareasProyecto.map(task => (
                <Task task={task} key={task._id}/>
            )
        ))}
      </div>
    </div>
  );
};

export default ListTask;
