import React, { useContext } from "react";
import Task from "./Task";
import styles from "../../CSS/listTasks.module.css";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListTask = () => {
  const proyectosContext = useContext(proyectoContext);
  const tareasContext = useContext(TareaContext);
  const { proyecto } = proyectosContext;
  const { tareasProyecto } = tareasContext;

  const [proyectoActual] = proyecto;

  return (
    <div className={styles.container}>
       <h2>{proyectoActual.name}</h2> 
      <div className={styles.tasks}>
        {tareasProyecto.length === 0 ? (
          <h4>No hay Tareas</h4>
        ) : (
          <TransitionGroup>
            {tareasProyecto.map((task, index) => (
              <CSSTransition
               key={index}
               timeout={1000}
               classNames="tarea"


              >
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </div>
    </div>
  );
};

export default ListTask;
