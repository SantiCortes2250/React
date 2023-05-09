import React, { useContext, useState, useEffect } from "react";
import styles from "../../CSS/newTask.module.css";
import TareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const NewTask = () => {
  const tareasContext = useContext(TareaContext);
  const { tareaSeleccionada, agregarTarea, mostrarTareas, actualizarTarea  } = tareasContext;
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;




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
  if(!proyecto) return null;


  const [proyectoActual] = proyecto;


  const HandleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
    
  };


  const HandleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      return;
    }

    //Si es una tarea nueva o tarea para editar
    if (tareaSeleccionada !== null) {
      actualizarTarea(task);

    
   
    }else{
      // agregar la nueva tarea al state de tareas
      task.project = proyectoActual._id;
      agregarTarea(task);

       
        
    }
    //obtener y filtrar las tareas del proyecto actual
    mostrarTareas(proyectoActual._id);

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
        <button >{tareaSeleccionada ? "Edit Task" : "New Task"}</button>
      </form>
    </div>
  );
};

export default NewTask;
