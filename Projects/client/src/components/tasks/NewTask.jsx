import React, { useContext, useState, useEffect } from "react";
import styles from "../../CSS/newTask.module.css";
import TareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const NewTask = () => {
  const tareasContext = useContext(TareaContext);
  const { tareaSeleccionada, agregarTarea, mostrarTareas, actualizarTarea  } = tareasContext;
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const [proyectoActual] = proyecto;

  useEffect(() => {
    if (tareaSeleccionada !== null) {
      setTask(tareaSeleccionada);
    } else {
      setTask({
        name: "",
      });
    }
  }, [tareaSeleccionada]);

  const [task, setTask] = useState({
    name: "",
  });

  const { name } = task;

  const HandleChange = (e) => {
    setTask({
      ...name,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      return;
    }

    //Si es una tarea nueva o tarea para editar
    if (tareaSeleccionada === null) {
      // agregar la nueva tarea al state de tareas
      task.idProyecto = proyectoActual.id;
      agregarTarea(task);

   
    }else{
        actualizarTarea(task);
        
    }
    //obtener y filtrar las tareas del proyecto actual
    mostrarTareas(proyectoActual.id);

    //reinicar el form
    setTask({
      name: "",
    });
  };



  return (
    <div className={styles.container}>
      <form onSubmit={HandleSubmit}>
        <input
          required
          type="text"
          className="name-task"
          placeholder="Name Task..."
          value={name}
          name="name"
          onChange={HandleChange}
        />
        <button>{tareaSeleccionada ? "Edit Task" : "New Task"}</button>
      </form>
    </div>
  );
};

export default NewTask;
