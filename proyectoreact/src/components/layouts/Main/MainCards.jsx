import React,{useState, useEffect} from 'react'
import { Imagen } from '../../UI/ImageMain/Imagen'
import img4 from '../../../assets/Images/imagen4.jpeg'
import img5 from '../../../assets/Images/imagen5.jpeg'
import { Botones } from '../../UI/Botones/Botones'



export const MainCards = () => {
  const useCount = () =>{

    const [counter,setCounter] = useState(0)

      const btnoff = () =>setCounter(counter+1)

      return{
        counter,
        btnoff
      }

  }
  
    const {counter,btnoff} = useCount()

  useEffect(()=>{
    const imagen4 = document.getElementById('image3')
    const imagen5 = document.getElementById('image4')
    const btnCard = document.getElementById('btnCard')


    if(counter % 2 == 0){
      imagen4.classList.add('on')
      imagen5.classList.add('on')
      imagen4.classList.remove('off')
      imagen5.classList.remove('off')

      btnCard.textContent = 'off'



    }
    else{
      imagen4.classList.remove('on')
      imagen5.classList.remove('on')
      imagen4.classList.add('off')
      imagen5.classList.add('off')
      btnCard.textContent = 'on'
    }


  },[counter])




  return (
    <div className='img-main'>
        <div className="contenedor1">
            <p>CARD 1</p>
            <Imagen url={img4} id="image3" url={img4}/>
        </div>
        <div className="contenedor2">
            <p>CARD 2</p>
            <Imagen url={img5} id="image4" url={img5}/>
        </div>
        <div className="boton">
          <Botones clase = "off" event = {btnoff} id= "btnCard" BtnNombre= "off"/>
        </div>
    </div>
  )
}
