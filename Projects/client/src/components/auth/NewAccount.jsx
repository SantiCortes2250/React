import React, {useContext, useState, useEffect} from 'react'
import { NavLink, } from 'react-router-dom'
import styles from '../../CSS/login.module.css'
import alertaContext from '../../context/alertas/alertaContext'
import authContext from '../../context/autenticacion/AuthContext'
import { useNavigate } from "react-router-dom";



const NewAccount = (props) => {

  //useNavigate para redireccionar 
  const navigate = useNavigate();

  //Extraer los valores

  const alertasContext = useContext(alertaContext)
  const AuthContext = useContext(authContext)

  const {alerta, mostrarAlerta} = alertasContext;
  const {  mensaje, autenticado, registrarUsuario } = AuthContext;

  //En caso de que el usuario se haya autenticado o registrado o sea un registro
  useEffect(() => {
    if(autenticado){
      navigate('/dashboard');
    }

    if(mensaje){
      mostrarAlerta(mensaje)


    }
   
  }, [mensaje, autenticado, props.history])
  




  const [newUser, setnewUser] = useState({
    name: "",
    email:"",
    password:"",
    confirmP: ""
  })

  
  const {name, email, password, confirmP} = newUser




  const HandleChange = (e) =>{
    setnewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })

  }

  const HandleSubmit = (e) =>{
    e.preventDefault()

    if(name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmP.trim() === ""){
      mostrarAlerta('all inputs is requeries', 'alertaError')
      return;
    }

    //password minimo de 6 caracteres
    if(password.length < 6){
      mostrarAlerta('Password require minimum 6 characters', 'alertaError')
      return;

    }


    //Los dos password son iguales
    if(password !== confirmP){
      mostrarAlerta('Passwords are not the same', 'alertaError')
      return;

    }

    //pasarlo al action

    registrarUsuario({
      name,
      email,
      password
    })

    




    
  }




  
  return (
    <div className={styles.login}>
      <div className={styles.form}>
        { alerta ? (<div className={`${alerta.categoria}`}>{alerta.msg}</div>) : null}
        <div className={styles.title}>
          <p>Create Account</p>
        </div>
        <form
        onSubmit={HandleSubmit}
        >
          <div className={styles.container}>
            <input 
      
            name='name'
            id='name'
            value={name}
            onChange={HandleChange}
             />
            <label className={styles.label} htmlFor='input'>Name*</label>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.container}>
            <input 
            type="email"
            name='email'
            id='email'
            value={email}
            onChange={HandleChange}
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
            <label className={styles.label} htmlFor='input'>Password*</label>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.container}>
            <input 
            type="password"
            name='confirmP'
            id='confirmP'
            value={confirmP}
            onChange={HandleChange}
             />
            <label className={styles.label} htmlFor='input'>Repeat Password*</label>
            <div className={styles.underline}></div>
          </div>
          <button className={styles.btn}>Register Now</button>
        </form>
      </div>
      <p className={styles.p}>Already have an account? <NavLink to={'/'}>
          Log in
        </NavLink></p>
    </div>
  )
}

export default NewAccount