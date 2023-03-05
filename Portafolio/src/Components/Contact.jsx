import React from 'react'
import info from '../../info.json'
import style from '../CSS/contact.module.css'

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <h2>Message Me</h2>
        <form>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Mesaje'/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'/>
        <button>Send Message</button>
        </form>
      </div>
      <div className={style.containerInfo}>
        <h2>Contact Info</h2>
        <p>¡feel free to contact me!</p>
        <div className={style.contact}>
        <div className={style.icons}>
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677643541/Projects/icons/user_xiuj6a.png" alt="" />
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677643542/Projects/icons/location_vob9a1.png" alt="" />
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677643542/Projects/icons/phone_qhkhhh.png" alt="" />
          <img src="https://res.cloudinary.com/dhbi86hxn/image/upload/v1677643541/Projects/icons/mail_namp01.png" alt="" />
        </div>
        <div className={style.info}>
          <h4>Name</h4>
          <p>{info.name}</p>
          <h4>Location</h4>
          <p>{info.From}</p>
          <h4>Call Me</h4>
          <p>{info.Phone}</p>
          <h4>Email Me</h4>
          <p>{info.Email}</p>
        </div>
          
        </div>
        


      </div>
    </div>
  )
}

export default Contact