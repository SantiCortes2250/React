import { 
    MOSTRAR_FORMULARIO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS,
    OBTENER_PROYECTO,
    ELIMINAR_PROYECTO
 } from '../../types'


export default (state, action) =>{
    switch(action.type){
        case MOSTRAR_FORMULARIO:
            return{
                ...state,
                formulario : true

            }
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload

            }
        case AGREGAR_PROYECTOS:
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false
                
            }
        case OBTENER_PROYECTO:
            return{
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
                
            }
        case ELIMINAR_PROYECTO:
            return{
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload)
            } 
        default:
        return state
    }
}