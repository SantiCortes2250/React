import React, {useState} from 'react'
import Nav from '../layout/Nav'
import styles from '../../CSS/dashboard.module.css'
import Sidebar from '../layout/Sidebar'
import CardLogout from '../layout/CardLogout'
import NewTask from '../tasks/NewTask'
import ListTask from '../tasks/ListTask'


const Projects = () => {

  const [bar, setBar] = useState(false)
  const [open, setOpen] = useState(1)


  return (
    <>
      <CardLogout 
      open={open}/>
      <Nav 
      open={open}
      setOpen={setOpen}
      setBar={setBar}/>
      <Sidebar
      setBar={setBar}
      bar={bar}

      />
      <div className={styles.container}>
        <NewTask/>
        <ListTask/>
        
      </div>

    </>
   
  )
}

export default Projects