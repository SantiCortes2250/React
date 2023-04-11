import React, { useReducer } from 'react'
import TareaContext from './tareaContext'
import tareaReducer from './tareaReducer'
import { v4 as uuidv4 } from 'uuid';
import { 
    MOSTRAR_TAREAS,
    AGREGAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
 } from '../../types'


const TareaState = props => {


   

    const initialState = {
        tareas: [
            {id: 1, name: 'components in angular', idProyecto: 2},
            {id: 2, name: 'components in php', idProyecto: 3},
            {id: 3, name: 'components in python', idProyecto: 4},
            {id: 4, name: 'components in react', idProyecto: 1},
            {id: 5, name: 'components in angular', idProyecto: 2},
            {id: 6, name: 'components in php', idProyecto: 3},
            {id: 7, name: 'components in python', idProyecto: 4},
            {id: 8, name: 'components in react', idProyecto: 1},
            {id: 9, name: 'components in angular', idProyecto: 2},
            {id: 10, name: 'components in php', idProyecto: 3},
            {id: 11, name: 'components in python', idProyecto: 4},
            {id: 12, name: 'components in react', idProyecto: 1},
        ],
        tareasProyecto: null,
        tareaSeleccionada: null
    }

    const [state, dispatch] = useReducer(tareaReducer, initialState);


    const mostrarTareas = idProyecto =>{
        dispatch({
            type: MOSTRAR_TAREAS,
            payload: idProyecto
            
        })
    }

    const agregarTarea = (tarea) =>{
      
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
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
            tareas: state.tareas,
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