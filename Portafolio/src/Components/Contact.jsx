import React, {useRef , useState} from 'react'
import info from '../../info.json'
import style from '../CSS/contact.module.css'
import emailjs from '@emailjs/browser'
import Message from './Message'



const Contact = () => {


  const refForm = useRef();

  const [message, setMessage] = useState(false)


  
  

  const HandleSubmit = (e) =>{
    e.preventDefault()

    const serviceId = 'service_x5hc3mk'
    const templateId = 'template_8srgsan'

    const apiKey = 'I-hO-GkNbCMFjZVga'


    emailjs.sendForm(serviceId, templateId, refForm.current , apiKey)
    .then((res) => {
      if(res.text === 'OK'){
        setMessage(true)
        
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('subject').value = ''
        document.getElementById('message').value = ''

      }

      setTimeout(() => {
        setMessage(false)
        
      }, 3000);

     
    })
  
    .catch(error => console.error(error))




  }


  return (
    <>
    <Message
    message={message}
    />  
   

    <div className={style.container}>
      <h2 className={style.section}>
        Get in Touch
        <span className={style.title}> Contact </span>

      </h2>
      <div className={style.forms}>
      <div className={style.form}>
        <h2>Message Me</h2>
        <form
          ref={refForm}
          onSubmit={HandleSubmit}

        >
          <div className={style.email}>
          <input type="text" placeholder='Name' name="name" required id='name' autocomplete="off"/>
          <input type="email" placeholder='Email' name="email" required id='email' autocomplete="off"/>

          </div>
       
        <input type="text" placeholder='Subject' name="subject" id='subject' required autocomplete="off"/>
        <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' required autocomplete="off"/>
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
     
    </div>
    </>
    
  )
}

export default Contact