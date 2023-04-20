import React, {useReducer} from 'react'
import AuthReducer from './AuthReducer'
import authContext from './AuthContext'
import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
 } from '../../types'
import clienteAxios from '../../components/config/axios'
import tokenAuth from '../../components/config/token'

const AuthState = (props) => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje:null

    }


    const [state, dispatch] = useReducer(AuthReducer, initialState)

    //funciones

    const registrarUsuario = async (datos) =>{
        try {
            const res = await clienteAxios.post('/api/users', datos)
           

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: res.data
            })
            
            //Obtener usuario
            usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data.msg)

            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })
            
        }
    }

    //Retorna el usuario autenticado

    const usuarioAutenticado = async () =>{
        const token = localStorage.getItem('token');
      
        if(token){
            tokenAuth(token)
        }

        try {
            const res = await clienteAxios.get('/api/auth')
            console.log(res.data)
            
            dispatch({
                 type: OBTENER_USUARIO,
                 payload: res.data.user
             })
            
        } catch (error) {
            console.log(error)
            dispatch({
                type:LOGIN_ERROR
           
            })
        }
    }




  return (
    <authContext.Provider
        value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            registrarUsuario

        }}
    >
        {props.children}
    </authContext.Provider>
  )
}

export default AuthState