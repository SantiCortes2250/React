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
    confirmP: "",
    image: null
  })

  
  const {name, email, password, confirmP, image} = newUser




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
      password,
      image
    })

    




    
  }




  
  return (
    <div className={styles.login}>
       <div className={styles.containerLogo2}>
      <img className={styles.imgIcon} src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1678939561/Projects/icons/DashPro-movile_cjdo1y.png" alt="" />
      <div className={styles.imgLogo2}><img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1683174110/Projects/icons/correo-electronico_dpklfe.png" alt="" /></div>
      
      </div>
      <div className={styles.form}>
        { alerta ? (<div className={`${alerta.categoria}`}>{alerta.msg}</div>) : null}
        <div className={styles.title}>
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
            autoComplete='off'
            placeholder='Name'
         
             />
            <label className={styles.label} htmlFor='input'><img src='https://res.cloudinary.com/dhbi86hxn/image/upload/v1683171686/Projects/icons/usuario_z3za3c.png'></img></label>
         
          </div>
          <div className={styles.container}>
            <input 
            type="email"
            name='email'
            id='email'
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
          <div className={styles.container}>
            <input 
            type="password"
            name='confirmP'
            id='confirmP'
            value={confirmP}
            onChange={HandleChange}
            placeholder='Repeat Password'
             />
           <label className={styles.label}  htmlFor='password'><img src='https://res.cloudinary.com/dhbi86hxn/image/upload/v1683171306/Projects/icons/bloquear_1_n6cg6y.png'></img></label>
      
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