import React, {useContext, useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../CSS/login.module.css'
import authContext from '../../context/autenticacion/AuthContext'
import alertaContext from '../../context/alertas/alertaContext'
import { useNavigate } from "react-router-dom";




const Login = () => {

   //useNavigate para redireccionar 
   const navigate = useNavigate();

  
  const alertasContext = useContext(alertaContext)
  const auth = useContext(authContext)
  
  const {alerta, mostrarAlerta} = alertasContext;
  const {mensaje, autenticado, iniciarSesion} = auth

  const [user, setUser] = useState({
    email:"",
    password:""
  })

   //En caso de que el usuario inicie sesion
   useEffect(() => {
    if(autenticado){
      navigate('/dashboard');
    }

    if(mensaje){
      mostrarAlerta(mensaje)


    }
   
  }, [mensaje, autenticado])

  


  const {email, password} = user


  const HandleChange = (e) =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }

  const HandleSubmit = (e) =>{
    e.preventDefault()

    if(email.trim() === '' || password.trim() === ''){
      mostrarAlerta('all inputs is requeries', 'alertaError')
      return;

    }

      //pasarlo al action
      iniciarSesion({
        email,
        password
      })
  }






  
  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <div className={styles.title}>
        { alerta ? (<div className={`${alerta.categoria}`}>{alerta.msg}</div>) : null}
          <h1>Hello</h1>
         
          <p>Sign into your Acoount</p>
        </div>
        <form
        onSubmit={HandleSubmit}
        >
          <div className={styles.container}>
            <input 
           
            name='email'
            id='input'
            value={email}
            onChange={HandleChange}
            autoComplete='off'
         
            
             />
            <label className={styles.label} htmlFor='input'>Email*</label>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.container}>
            <input 
            type="password"
            name='password'
            id='password'
            value={password}
            onChange={HandleChange}
           
             />
            <label className={styles.label}  htmlFor='password'>Password*</label>
            <div className={styles.underline}></div>
          </div>
          <button className={styles.btn}>Log in</button>
        </form>
      </div>
      <p className={styles.p}>Don't have an account? <NavLink to={'/new-account'}>
          New Account
        </NavLink></p>
      
    </div>
  )
}

export default Login