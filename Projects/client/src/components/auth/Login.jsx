import React, {useContext, useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../CSS/login.module.css'
import authContext from '../../context/autenticacion/AuthContext'
import alertaContext from '../../context/alertas/alertaContext'
import { useNavigate } from "react-router-dom";
import PrivateRute from '../rutes/PrivateRute'




const Login = () => {

   //useNavigate para redireccionar 
   const navigate = useNavigate();

  
  const alertasContext = useContext(alertaContext)
  const auth = useContext(authContext)
  
  const {alerta, mostrarAlerta} = alertasContext;
  const {mensaje, autenticado, iniciarSesion,  usuarioAutenticado} = auth

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
      <div className={styles.containerLogo}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ff0000" fill-opacity="1" d="M0,256L34.3,229.3C68.6,203,137,149,206,117.3C274.3,85,343,75,411,106.7C480,139,549,213,617,213.3C685.7,213,754,139,823,133.3C891.4,128,960,192,1029,218.7C1097.1,245,1166,235,1234,197.3C1302.9,160,1371,96,1406,64L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
</svg>
      <img className={styles.imgIcon} src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678939561/Projects/icons/DashPro-movile_cjdo1y.png" alt="" />
      <img className={styles.imgLogo} src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1683172938/Projects/icons/trabajo-en-equipo_1_hxpn8g.png" alt="" />
      
      </div>
      <div className={styles.form}>
        <div className={styles.title}>
        { alerta ? (<div className={`${alerta.categoria}`}>{alerta.msg}</div>) : null}
        
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
            placeholder='Email'
         
            
             />
            <label className={styles.label} htmlFor='input'><img src='https://res.cloudinary.com/dhbi86hxn/image/upload/v1683171880/Projects/icons/email_hp5pm3.png'></img></label>
          
          </div>
          <div className={styles.container}>
            <input 
            type="password"
            name='password'
            id='password'
            value={password}
            onChange={HandleChange}
            placeholder='Password'
           
             />
            <label className={styles.label}  htmlFor='password'><img src='https://res.cloudinary.com/dhbi86hxn/image/upload/v1683171306/Projects/icons/bloquear_1_n6cg6y.png'></img></label>
       
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