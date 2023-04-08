import { 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS
 } from '../../types'


export default (state, action) =>{
    switch(action.types){
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload

            }
        case AGREGAR_PROYECTOS:
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload]
                
            }
        default:
        return state
    }
}