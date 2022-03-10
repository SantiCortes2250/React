import React,{useState, useEffect} from 'react'
import { Botones } from '../../UI/Botones/Botones'
import imagen3 from '../../../assets/Images/imagen3.jpeg'
import { Imagen } from '../../UI/ImageMain/Imagen'



export const MainCounterimage = () => {
    const useCount = () =>{

        const [counter,setCounter] = useState(10) 
    
            const mas = ()=>setCounter(counter + 10)
            const reset = ()=>setCounter(0)
            const menos = ()=>setCounter(counter - 10)
    
            return{
                counter,
                mas,
                reset,
                menos
    
            }
            
    }

    

    
       const {counter, mas, reset , menos} = useCount()

    useEffect(()=>{
        const image3 = document.getElementById('imagen')

        if(counter >= 100){
            image3.classList.add('activo')
            image3.classList.remove('inactivo')
        }
        else{
            image3.classList.add('inactivo')
            image3.classList.remove('activo')
        }

    },[counter])
    
      return (
        <div>
            <Imagen clase = "inactivo" id="imagen" url={imagen3}/>
            <div className='BtnCounter'>
            <div className="container1">
            <h1 className='h1-counter'>{counter}</h1>
            </div>
            <hr />
            <div className="container2">
            <Botones event={mas} BtnNombre = "+"/>
            <Botones event={reset} BtnNombre = "reset"/>
            <Botones event={menos} BtnNombre = "-"/>
            </div>
        </div>

        </div>
      )
}
