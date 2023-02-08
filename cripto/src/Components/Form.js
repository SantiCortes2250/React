import styled from '@emotion/styled'
import React from 'react'
import useMoney from '../Hooks/useMoney';



const Button = styled.input`
margin-top: 20px;
font-weight: bold;
font-size: 20px;
padding: 10px;
background-color: #66a2fe;
border: none;
width: 100%;
border-radius: 10px;
color: #FFF;
transition: background-color .3s ease;
&:hover {
    background-color: #326AC0;
    cursor:pointer;
}

`;

const Form = () => {

    const [state, SelectMoney, updateState] = useMoney();


  return (
    <form>
        <SelectMoney />
        <Button
        type='submit'
        value='search'
        />
    </form>
  )
}

export default Form