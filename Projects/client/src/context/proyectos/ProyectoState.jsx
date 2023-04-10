import React, { useReducer } from 'react'
import proyectoContext from './ProyectoContext'
import proyectoReducer from './ProyectoReducer'
import { v4 as uuidv4 } from 'uuid';

import { 
    MOSTRAR_FORMULARIO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS,
    OBTENER_PROYECTO,
    ELIMINAR_PROYECTO
 } from '../../types'



const ProyectoState = props =>{

    
    const proyectos  = [
        {id: 1, name: 'Tienda Virtual'},
        {id: 2, name: 'Tienda Online'},
        {id: 3, name: 'Ecommerce'},
        {id: 4, name: 'Movies'}
    ]
    

    const initialState = {
        proyectos  : [],
        formulario : false,
        proyecto : null
        
       
        
    }

    //Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState)


    //Serie de funciones para el CRUD

    const mostrarFormulario =  () =>{
        dispatch({
            type: MOSTRAR_FORMULARIO
        })
    }

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


    const obtenerProyecto = idProyecto =>{
        dispatch({
            type: OBTENER_PROYECTO,
            payload: idProyecto
        })

    }


    const eliminarProyecto = idProyecto =>{
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: idProyecto
        })
    }


    return (
        <proyectoContext.Provider    
        value={{
            formulario: state.formulario,
            proyectos: state.proyectos,
            proyecto: state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            obtenerProyecto,
            eliminarProyecto
           
        }}
        
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;


