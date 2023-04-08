import React, { useReducer } from 'react'
import proyectoContext from './ProyectoContext'
import proyectoReducer from './ProyectoReducer'
import { v4 as uuidv4 } from 'uuid';

import { 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS
 } from '../../types'



const ProyectoState = props =>{

    const proyectos  = [
        {id: 1, name: 'Tienda Virtual'},
        {id: 2, name: 'Tienda Online'},
        {id: 3, name: 'Ecommerce'},
        {id: 4, name: 'Movies'}
    ]

  
    

    const initialState = {
        proyectos : []
       
        
    }

    //Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState)


    //Serie de funciones para el CRUD

    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos

        })
    }


    const agregarProyecto = proyecto =>{
        proyecto.id = uuidv4();


        //insertar proyecto en el state
      

        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto
        })
    }


    return (
        <proyectoContext.Provider    
        value={{
            proyectos: state.proyectos,
            obtenerProyectos,
            agregarProyecto
           
        }}
        
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;


