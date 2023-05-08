import React, { useReducer } from 'react'
import TareaContext from './tareaContext'
import tareaReducer from './tareaReducer'
import { 
    MOSTRAR_TAREAS,
    AGREGAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
 } from '../../types'
 import clienteAxios from '../../components/config/axios'




const TareaState = props => {


   

    const initialState = {
        tareasProyecto: [],
        tareaSeleccionada: null
    }

    const [state, dispatch] = useReducer(tareaReducer, initialState);


    const mostrarTareas = async project =>{

       
         dispatch({
         type: MOSTRAR_TAREAS,
            payload: project
            
         })
    }

    const agregarTarea = async (tarea) =>{
        console.log(tarea)
   

        try {
            const res = await clienteAxios.post('/api/tasks', tarea)
            console.log(res)
        
          
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })
            
        } catch (error) {
            console.log(error)
            
        }

       
    }

    const eliminarTarea = id =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id

        })
       


    }

    const guardarTareaActual = tarea =>{
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    const actualizarTarea = tarea =>{
   
       
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }


  return (
    <TareaContext.Provider
        value={{
            tareasProyecto: state.tareasProyecto,
            tareaSeleccionada: state.tareaSeleccionada,
            mostrarTareas,
            agregarTarea,
            eliminarTarea,
            guardarTareaActual,
            actualizarTarea
        }}

    >
        {props.children}

    </TareaContext.Provider>
  )
}

export default TareaState