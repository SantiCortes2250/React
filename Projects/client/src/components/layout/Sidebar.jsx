import React,{useContext, useState, useEffect} from 'react'
import NewProject from './NewProject'
import styles from '../../CSS/slidebar.module.css'
import { NavLink } from 'react-router-dom'
import proyectoContext from '../../context/proyectos/ProyectoContext'
import TareaContext from '../../context/tareas/tareaContext'





const Sidebar = ({setBar, bar}) => {

  const proyectosContext = useContext(proyectoContext)
  const tareasContext = useContext(TareaContext)
  const { formulario,  mostrarFormulario, proyectos, obtenerProyectos, obtenerProyecto  } = proyectosContext;
  const {   mostrarTareas  } = tareasContext;

  const [more, setMore] = useState(1)
 

  useEffect(() => {
    obtenerProyectos()
  }, [])


  const HandleClick = id =>{
  

    obtenerProyecto(id)
    mostrarTareas(id)

  }
  
  






  return (
    <div className={bar ? styles.slidebar : styles.slidebaroff}>
        <div className={styles.logo}>
          <img className={styles.imgLogo} src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678939561/Projects/icons/DashPro-movile_cjdo1y.png" alt="" />
          <img className={styles.close} src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678939305/Projects/icons/flecha-i_qhmyxj.png" alt="" onClick={e=> setBar(false)}/>
        </div>
        <div className={styles.enlaces}>
          <NavLink to={'/Dashboard'}><p><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678933181/Projects/icons/home_na0ym5.png" alt="" />Dashboard</p></NavLink>
            <p onClick={e =>setMore(more + 1)}><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678933263/Projects/icons/categories_qwkaah.png" alt="" />Projects <img className={more % 2 == 0 ? styles.more : styles.more1} src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678934611/Projects/icons/expand_lek08a.png" alt="" /></p>
            <div className={more % 2 == 0 ? styles.projects2 : styles.projects}>
              {proyectos.length === 0 ?  <span>No projects</span> :
                  proyectos.map(proyecto => 
                    <NavLink to={'/projects/'} key={proyecto._id} onClick={() => HandleClick(proyecto._id)}><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678935396/Projects/icons/flecha_c65oeq.png" alt="" /> {proyecto.name}</NavLink>
              ) }
             
          
            
            </div>
         
            <p onClick={() =>mostrarFormulario()}><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678936012/Projects/icons/idea_dwe47j.png" alt="" /> New Project<img className={styles.img} src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678933852/Projects/icons/plus_jeqisn.png" alt="" /></p>
            {formulario ?   <NewProject /> : null }
           

        </div>
           
    </div>
  )
}

export default Sidebar