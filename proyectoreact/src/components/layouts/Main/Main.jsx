import React from 'react'
import { Imagen } from '../../UI/ImageMain/Imagen'
import imagen1 from "../../../assets/Images/imagen1.jpeg"




export const Main = () => {
  return (
    <div className='img-main'>
        <Imagen url={imagen1}/>
    </div>
  )
}

