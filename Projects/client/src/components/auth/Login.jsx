import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../CSS/login.module.css'


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
    <div className={styles.login}>
      <div className={styles.form}>
        <div className={styles.title}>
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