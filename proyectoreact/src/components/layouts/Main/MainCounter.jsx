import React,{useState} from 'react'
import { Botones } from '../../UI/Botones/Botones'


export const MainCounter = () => {

    const useCount = () =>{

    const [counter,setCounter] = useState(0) 

        const sumar = ()=>setCounter(counter + 1)
        const reset = ()=>setCounter(0)
        const restar = ()=>setCounter(counter - 1)

        return{
            counter,
            sumar,
            reset,
            restar

        }
        
}

   const {counter, sumar, reset ,restar} = useCount()

  return (
    <div className='main-img'>
        <div className="container1">
        <h1 className='h1-counter'>{counter}</h1>
        </div>
        <hr />
        <div className="container2">
        <Botones event={sumar} BtnNombre = "+"/>
        <Botones event={reset} BtnNombre = "reset"/>
        <Botones event={restar} BtnNombre = "-"/>
        </div>
    </div>
  )

}
