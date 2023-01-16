import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import imglogin from '../../../assets/Images/login.png'
import { Botones } from '../../UI/Botones/Botones'
import axios from 'axios'



export const MainForm = () => {

 
  const [state, setState] = useState({
    form:{
      "username":"",
      "password":"",
    },
    error:false,
    errorMsg:""
  })


  const recharge=(e)=>{
    e.preventDefault()
  }


  const change = async (e)=>{
   
    await setState({
   
      form:{
        
        ...state.form,
     
        [e.target.name]: e.target.value
      }
    })
  }

  
  const boton =()=>{
    
    let url="https://backend-edw.herokuapp.com/login"
 
    axios.post(url, state.form)
 
    .then(res => {
      
      console.log(res)
      
      if(res.data.status === "ok"){
        console.log("Logueado Correctamente")
      
      }else{
        setState({
          error:true,
          errorMsg:res.data.Message

        })

      }

    }).catch(error =>{
      console.log(error)
      setState({
        error:true,
        errorMsg:"Error API"
      })
    })

  }

  
  return (
    <div className='img-main'>
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
