import React, {useState} from 'react'
import styles from '../../CSS/newTask.module.css'

const NewTask = () => {

    const [task, setTask] = useState({
        name: ''
    })

    const {name} = task;

    const HandleChange = (e) =>{
        setTask({
            ...name,
            [e.target.name] : e.target.value
        })

    }

    const HandleSubmit = (e) =>{
        e.preventDefault()

    }


  return (
    <div className={styles.container}>
        <form
        onSubmit={HandleSubmit}>
            <input 
            type="text"
            className='name-task' 
            placeholder='Name Task...'
            value={name}
            name='name'
            onChange={HandleChange}/>
            <button>New Task</button>
        </form>
    </div>
  )
}

export default NewTask