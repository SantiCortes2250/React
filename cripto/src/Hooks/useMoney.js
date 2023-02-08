import React, {useState} from 'react'

const useMoney = () => {
    //state de nuestro custom hook
    const [state, updateState] = useState('')

  const selectMoney = () =>(
    <>
    <label>Money</label>
    <select>
        <option value="MXN">Mexican</option>
    </select>
    </>
  )

    //Retornar state, interfaz y la funcion que modifica el state
  return [state, selectMoney, updateState]


    
  
}

export default useMoney