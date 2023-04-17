import { useContext, useReducer } from 'react'
import alertaContext from './alertaContext'
import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from "../../types"
import alertaReducer from './alertaReducer'

const alertaState = (props) => {

    const initialState = {
        alerta: null
    }

    const [ state, dispatch ] = useReducer(alertaReducer, initialState)

  
    //Funciones

    const mostrarAlerta = (msg, categoria) =>{
        dispatch({
            type: MOSTRAR_ALERTA,
            payload:{
                msg,
                categoria
            }
        })


        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
            
        }, 5000);

    }


  return (
    <alertaContext.Provider
        value={{
            alerta: state.alerta,
            mostrarAlerta

        }}
    >
        {props.children}
    </alertaContext.Provider>
  )
}

export default alertaState