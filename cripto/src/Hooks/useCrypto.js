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

const useCrypto = (label, stateInitial, options) => {
    //state de nuestro custom hook
    const [crypto, updateCrypto] = useState(stateInitial)

  const SelectCrypto = () =>(
    <>
    <Label>{label}</Label>
    <Select
      onChange={(e)=>{updateCrypto(e.target.value)}}
      value={crypto}
    >
        <option value=''>--Select--</option>
        {options.map(option=>(
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
        ))}
    </Select>
    </>
  )

    //Retornar state, interfaz y la funcion que modifica el state
  return [crypto, SelectCrypto]


    
  
}

export default useCrypto