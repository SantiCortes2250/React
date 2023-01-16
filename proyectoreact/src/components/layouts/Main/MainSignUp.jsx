import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import imgSignUp from '../../../assets/Images/signUp.png'
import { Botones } from '../../UI/Botones/Botones'
import axios from 'axios'

export const MainSignUp = () => {

  const[state, setState] = useState({
    form:{
      "username":"",
      "password":"",
      "name":"",
    },
    error:false,
    errorMsg:""
  })


  const recharge=(e)=>{
    e.preventDefault()
  }

  const change = async (e) =>{
    await setState({
      form:{
        ...state.form,
        [e.target.name]: e.target.value
      }


    })
  }

  const boton = ()=>{
    let url = "https://backend-edw.herokuapp.com/usuario"

    axios.post(url, state.form)

    .then(res => {
      console.log(res)

      if(res.data.status === "ok"){
        console.log("Registrado correctamente")

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
        <form className='form-2' onSubmit={recharge}>
            <div id="botones-form">
              <Botones BtnNombre="Sign Up" id="SignUp"/>
              <NavLink to="/Contact"><Botones BtnNombre="Login" id="login"/></NavLink>
            </div>
            <h3>Sign Up for Free</h3>
            <div id="imgLogin">
              <img src={imgSignUp} alt="" />
            </div>
            <input type="text" name='name' id='nom' placeholder='Name*' onChange={change}/>
            <input type="text" name='username' id='user_name' placeholder='User_Name*' onChange={change}/>
            <input type="password" name='password' id='password' placeholder='password*' onChange={change}/>
            <input type="submit" value="Send" id='btnInput' onClick={boton}/>
        </form>
    </div>
  )
}
