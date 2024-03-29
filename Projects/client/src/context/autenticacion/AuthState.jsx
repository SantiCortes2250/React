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
        mensaje:null,
        cargando: true

    }


    const [state, dispatch] = useReducer(AuthReducer, initialState)

    //funciones

    //registro de usuario

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


        //inicio de sesion del usuario

        const iniciarSesion = async(datos) =>{
            try {
                const res = await clienteAxios.post('/api/auth/', datos)
             
           
    
                dispatch({
                    type: LOGIN_EXITOSO,
                    payload: res.data
                })
                
                //Obtener usuario
                usuarioAutenticado();
    
                
             
    
    
               
                
            } catch (error) {
                console.log(error.response.data.msg)
                dispatch({
                    type:LOGIN_ERROR,
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
          
            
            dispatch({
                 type: OBTENER_USUARIO,
                 payload: res.data.user
             })
            
        } catch (error) {
           
            dispatch({
                type:LOGIN_ERROR
           
            })
        }
    }

    //cerrar sesion

    const cerrarSesion = () =>{
        dispatch({
            type: CERRAR_SESION,

        })
    }






  return (
    <authContext.Provider
        value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            cargando: state.cargando,
            registrarUsuario,
            iniciarSesion,
            usuarioAutenticado,
            cerrarSesion

        }}
    >
        {props.children}
    </authContext.Provider>
  )
}

export default AuthState