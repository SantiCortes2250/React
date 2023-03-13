import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const NewAccount = () => {
  const [newUser, setnewUser] = useState({
    name: "",
    email:"",
    password:"",
    confirmP: ""
  })



  const HandleChange = (e) =>{
    setnewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })

  }

  const HandleSubmit = (e) =>{
    e.preventDefault()

    if(name.trim === "" || email.trim() === "" || password.trim() === "" || confirmP.trim()){
      alert('all inputs is requeries')
    }

    
  }


  const {name, email, password, confirmP} = newUser



  
  return (
    <div>
      <div>
        <h1>CREATE ACCOUNT</h1>
        <form
        onSubmit={HandleSubmit}
        >
          <div>
            <label>Name</label>
            <input 
            type="text"
            name='name'
            id='name'
            value={name}
            onChange={HandleChange}
             />
          </div>
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
          <div>
            <label>Confirm Password </label>
            <input 
            type="password"
            name='confirmP'
            id='confirmP'
            value={confirmP}
            onChange={HandleChange}
             />
          </div>
          <button>Register</button>
        </form>
        <NavLink to={'/new-account'}>
          Log in
        </NavLink>
      </div>
    </div>
  )
}

export default NewAccount