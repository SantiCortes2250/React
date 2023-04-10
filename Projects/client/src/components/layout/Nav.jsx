import React, {useState, useContext} from 'react'
import styles from "../../CSS/nav.module.css"
import proyectoContext from '../../context/proyectos/ProyectoContext'

const Nav = ({open, setOpen, setBar}) => {

  const proyectosContext = useContext(proyectoContext)

  const {proyectos} = proyectosContext;

  




  return (
    <div className={styles.nav}>
        <div className={styles.slidebar} onClick={e=> setBar(true)}>
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678746605/Projects/icons/menu-hamburguesa_kii38c.png" alt="" />
            
        </div>
        <div className={styles.projects}>
          <div className={styles.count}>{proyectos.length}</div>
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678746830/Projects/icons/bulb_xmgdg2.png" alt="" />
          

        </div>
        <div className={styles.profile}
          onClick={() =>setOpen(open + 1)}>
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678747316/Projects/icons/usuario_pkvbnb.png" alt="" />
           

        </div>

    </div>
  )
}

export default Nav