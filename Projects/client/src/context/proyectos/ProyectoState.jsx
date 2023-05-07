import React, { useReducer } from 'react'
import proyectoContext from './ProyectoContext'
import proyectoReducer from './ProyectoReducer'

import { 
    MOSTRAR_FORMULARIO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS,
    OBTENER_PROYECTO,
    ELIMINAR_PROYECTO
 } from '../../types'
import clienteAxios from '../../components/config/axios'



const ProyectoState = props =>{

    

    

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

    const obtenerProyectos = async() =>{

        try {
            const res = await clienteAxios.get('/api/projects')


            dispatch({
                type: OBTENER_PROYECTOS,
                payload: res.data.projects
    
            })

            
        } catch (error) {
            console.log(error)
            
        }
     
    }


    const agregarProyecto = async proyecto =>{

        try {
            const res = await clienteAxios.post('/api/projects', proyecto)
           


            dispatch({
                type: AGREGAR_PROYECTOS,
                payload: res.data

            })


        }catch(error){
            console.log(error)
        }
    }


    const obtenerProyecto = idProyecto =>{
        dispatch({
            type: OBTENER_PROYECTO,
            payload: idProyecto
        })

    }


    const eliminarProyecto = async idProyecto =>{

        try {

            await clienteAxios.delete(`/api/projects/${idProyecto}`)
           

             dispatch({
                 type: ELIMINAR_PROYECTO,
                 payload: idProyecto
            })
            
        } catch (error) {
            console.log(error)
            
        }
       
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


