import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import imglogin from '../../../assets/Images/login.png'
import { Botones } from '../../UI/Botones/Botones'
import axios from 'axios'



export const MainForm = () => {

  /*Dentro del useState esta e contenido inicial que despues sera modificado por medio del setState*/
  const [state, setState] = useState({
    form:{
      "username":"",
      "password":"",
    },
    error:false,
    errorMsg:""
  })

  /*Este evevto previene que el formulario recargue la pagina*/
  const recharge=(e)=>{
    e.preventDefault()
  }

  /*async se refiere a que no vamos a esperar a que la pagina 
  se recargue para poder obtener el valor, siempre lo va hacer despues 
  de que se preciones la tecla, se le da como una prioridad*/
  const change = async (e)=>{
    /*Mediante el await le decimos que espere un objeto que es el form*/
    /*El setState lo que hace es asignar un valor a una varable del estado*/
    /*Espera la promesa*/
    await setState({
      /*A la variable form del estado, vamos a agendarle el valor*/
      /*form es un objeto*/
      form:{
        /*Spread Operator*/
        /*Esta funciona como un forEach, el ...state.form trae uno por uno vacio y el e.target.name lo llena*/
        ...state.form,
        /*Cambiamos el valor del input mediante el e.target.name que trae toda lainformacion*/
        [e.target.name]: e.target.value
      }
    })
  }

  /*Creamos el manejador del boton*/
  /*Instalamos la libreria axios e importamos*/
  /*Axios es un cliente HTTP basado en promesas, parecido al fetch*/
  const boton =()=>{
    /*Creamos una variable y traemos la URL*/
    let url="https://backend-edw.herokuapp.com/login"
    /*mediante el axios.post enviamos la url del api y el objeto que contiene el username y el password*/
    axios.post(url, state.form)
    /*Retornamos una promesa*/
    .then(res => {
      /*creamos una variable res y hacemos una funcion de flecha, ponemos un console log para ver que nos devuelve*/
      console.log(res)
      /*Si la respuesta fue valida que nos devulva un mensaje en la consola de que se ha logueado*/
      if(res.data.status === "ok"){
        console.log("Logueado Correctamente")
      /*De lo contrario que muestre un mensaje de error en caso de que no se pueda registrar*/
      }else{
        setState({
          error:true,
          errorMsg:res.data.Message

        })

      }
      /*Capturamos el error en caso de que no se pueda conectar con el API*/
    }).catch(error =>{
      console.log(error)
      setState({
        error:true,
        errorMsg:"Error API"
      })
    })

  }

  /*Capturamos el evento recharge mediante un onSubmit para que no se recargue la pagina cada vez que se manden los datos del formulario*/
  return (
    <div className='container-form'>
        <form className='form' onSubmit={recharge}>
            <div id="botones-form">
              <Botones BtnNombre="Login"/>
              <NavLink to="/SignUp"><Botones BtnNombre="Sign Up"/></NavLink>
            </div>
            <h3>Welcome Back!</h3>
            <div id="imgLogin">
              <img src={imglogin} alt="" />
            </div>
            {state.error === true &&
            <div className="alerta">
              <p>{state.errorMsg}</p>
            </div>
        }
            <div className="formulario">
    
                <input type="text" id='email' placeholder='Username*' name='username' onChange={change}/>
                <input type="password" id='password' placeholder='Password*' name='password' onChange={change}/>
            </div>
            <input type="submit" value="Login" id='btnInput' onClick={boton}/>
        </form>
    </div>
    
  )
}
