import React, {useState} from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useMoney = (label, stateInitial, options) => {
    //state de nuestro custom hook
    const [state, updateState] = useState(stateInitial)

  const selectMoney = () =>(
    <>
    <Label>{label}</Label>
    <Select
      onChange={(e)=>{updateState(e.target.value)}}
      value={state}
    >
        <option value=''>--Select--</option>
        {options.map(option=>(
          <option key={option.codigo} value={option.codigo}>{option.nombre}</option>
        ))}
    </Select>
    </>
  )

    //Retornar state, interfaz y la funcion que modifica el state
  return [state, selectMoney]


    
  
}

export default useMoney