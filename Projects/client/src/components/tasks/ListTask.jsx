import React, {useContext} from 'react'
import Task from './Task'
import styles from '../../CSS/listTasks.module.css'
import proyectoContext from '../../context/proyectos/ProyectoContext'



const ListTask = () => {

  const proyectosContext = useContext(proyectoContext)
  const {proyecto} = proyectosContext;

  const [proyectoActual] = proyecto;


  const Tasks = [
    {name: 'components in react', status: false},
    {name: 'components in react', status: false},
    {name: 'components in react', status: false},
    {name: 'components in react', status: false},
  ]

  return (
    <div className={styles.container}>
      <h2>{proyectoActual.name}</h2>
      <div className={styles.tasks}>
        {Tasks.length === 0 
        ? (<h4>No hay Tareas</h4>) 
        : 
        Tasks.map((task, index) => (
          <Task
          key={index}
          task={task}
          />
        ))
       }
      </div>
    
    </div>
  )
}

export default ListTask