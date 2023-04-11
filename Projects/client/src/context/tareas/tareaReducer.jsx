import {
     MOSTRAR_TAREAS,
     AGREGAR_TAREA,
     ELIMINAR_TAREA,
     TAREA_ACTUAL,
     ACTUALIZAR_TAREA
 } from "../../types";




export default (state, action) =>{
    switch(action.type){
        case MOSTRAR_TAREAS:
            return{
                ...state,
                tareasProyecto: state.tareas.filter(tarea => tarea.idProyecto === action.payload)
            };
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas: [action.payload, ...state.tareas]
            }
        case ELIMINAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaSeleccionada: action.payload
            }
        case ACTUALIZAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)

            }


        default:
            return state;
    }
}