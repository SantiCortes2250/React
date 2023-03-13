import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:""
  })



  const HandleChange = (e) =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }

  const HandleSubmit = (e) =>{
    e.preventDefault()
  }


  const {email, password} = user



  
  return (
    <div>
      <div>
        <h1>LOG IN</h1>
        <form
        onSubmit={HandleSubmit}
        >
          <div>
            <label>Email</label>
            <input 
            type="email"
            name='email'
            id='email'
            value={email}
            onChange={HandleChange}
             />
          </div>
          <div>
            <label>Password</label>
            <input 
            type="password"
            name='password'
            id='password'
            value={password}
            onChange={HandleChange}
             />
          </div>
          <button>Log in</button>
        </form>
        <NavLink to={'/new-account'}>
          New Account
        </NavLink>
      </div>
    </div>
  )
}

export default Login