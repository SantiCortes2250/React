import React from 'react'
import Task from './Task'
import styles from '../../CSS/listTasks.module.css'


const ListTask = () => {

  const Tasks = [
    {name: 'components in react', status: false},
    {name: 'components in react', status: false},
    {name: 'components in react', status: false},
    {name: 'components in react', status: false},
  ]

  return (
    <div className={styles.container}>
      <h2>Create React Components</h2>
      <div className={styles.tasks}>
        {Tasks.length === 0 
        ? (<h4>No hay Tareas</h4>) 
        : 
        Tasks.map(task => (
          <Task
          task={task}
          />
        ))
       }
      </div>
    </div>
  )
}

export default ListTask