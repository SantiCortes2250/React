import React, { useContext, useEffect } from 'react'
import styles from '../../CSS/user.module.css'
import authContext from '../../context/autenticacion/AuthContext'
import proyectoContext from '../../context/proyectos/ProyectoContext'
import TareaContext from '../../context/tareas/tareaContext'




const InfoUser = () => {

  //Extraer la informacion de autenticacion
    const infoContext = useContext(authContext)
    const project = useContext(proyectoContext)

    const tareas = useContext(TareaContext)
    const {tareasProyecto} = tareas
    

    const { usuario, usuarioAutenticado } = infoContext;
    const {proyectos} = project;

    useEffect(() => {
      usuarioAutenticado()
  
    }, [])
    
  

  return (
    <div className={styles.container}>
      {usuario ? (
        <>
         <div className={styles.user}>
          
          <div className={styles.cover}> 
              <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1680320035/Projects/Banners/background_mwfwve.jpg" alt="" />
          </div>
          <div className={styles.profile}> 
          {usuario.imagen ? 
           usuario.imagen : <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678747316/Projects/icons/usuario_pkvbnb.png" alt="" />
          }
              
          </div>
          <h2>{usuario.name}</h2>
      </div>
      <div className={styles.info}>
          <h4>email:<p>{usuario.email}</p></h4>
          <h4>Cant-Projects:<p>{proyectos.length}</p></h4>
      </div>
        </>
       
  
      )
      


       : null}
        
    </div>
  )
}

export default InfoUser