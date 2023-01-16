import React from 'react'
import emailjs from '@emailjs/browser'

export const MainContactanos = () => {


  const sendEmail = (event) =>{
    event.preventDefault();

    emailjs.sendForm('service_1pyi8yb','template_8srgsan',event.target,'DGzCKfhZUeoLYgmzc')
    .then(res => console.log(res))
    .catch(error => console.log(error))

  }
  return (
    <div className='img-main'>
        <form className='form-3' onSubmit={sendEmail}>
            <h3>Contact</h3>
            <input type="text" name='user_name' id='nom' placeholder='Name*'/>
            <input type="text" name='user_email' id='email' placeholder='Email Address*'/>
            <textarea name="user_message" id="textarea" cols="30" rows="10" placeholder='Message'></textarea>
            <input type="submit" value="Send" id='btnInput'/>
        </form>
    </div>
  )
}