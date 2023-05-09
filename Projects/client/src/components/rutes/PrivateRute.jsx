
import {  Navigate, Outlet, Route } from "react-router-dom";
import authContext from "../../context/autenticacion/AuthContext";
import { useContext, useEffect } from "react";



const PrivateRoute = () => {

  const AuthContext = useContext(authContext)
  const {autenticado, cargando, usuarioAutenticado} = AuthContext;


  useEffect(() => {
    usuarioAutenticado()

    // eslint-disable-next-line
    
  }, [])
  

  

  if(!autenticado && !cargando){
    return <Navigate to='/'/>

  }

  return (
    <Outlet/>
  )
  
};

export default PrivateRoute;
