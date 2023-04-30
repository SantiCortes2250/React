import React, { useContext, useEffect } from 'react'
import styles from '../../CSS/user.module.css'
import authContext from '../../context/autenticacion/AuthContext'


const InfoUser = () => {

  //Extraer la informacion de autenticacion
    const infoContext = useContext(authContext)

    const { usuario, usuarioAutenticado } = infoContext;

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
          <h4>Cant-Pojects:<p>3</p></h4>
          <h4>Cant-Tasks:<p>6</p></h4>
      </div>
        </>
       
  
      )
      


       : null}
        
    </div>
  )
}

export default InfoUser