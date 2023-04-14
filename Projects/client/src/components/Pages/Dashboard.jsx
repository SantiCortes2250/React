import React, {useContext, useState, useEffect} from 'react'
import Card from '../layout/Card'
import Nav from '../layout/Nav'
import styles from '../../CSS/dashboard.module.css'
import Sidebar from '../layout/Sidebar'
import CardLogout from '../layout/CardLogout'
import proyectoContext from '../../context/proyectos/ProyectoContext'






const Dashboard = () => {

  const proyectosContext = useContext(proyectoContext)


  const { proyectos, obtenerProyectos } = proyectosContext;


  const [bar, setBar] = useState(false)
  const [open, setOpen] = useState(1)

  useEffect(() => {
    obtenerProyectos()

    // eslint-disable-next-line
    
  }, [])


  




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
      <h2 className={styles.title}>Dashboard</h2>

      <div className={styles.cards}>
      {proyectos.length === 0 ?  <h4>No Projects</h4> : (
          proyectos.map(proyecto =>
            <Card
            key={proyecto.id}
            proyecto={proyecto}
            />
          )

      )
     

      }
     
     

      </div>
        
      </div>

    </>
   
  )
}

export default Dashboard