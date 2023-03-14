import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../CSS/login.module.css'

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
    <div className={styles.login}>
      <div className={styles.form}>
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
            <label className={styles.label} htmlFor='input'>Email*</label>
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
            <label className={styles.label} htmlFor='input'>Name*</label>
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
          New Account
        </NavLink></p>
    </div>
  )
}

export default NewAccount