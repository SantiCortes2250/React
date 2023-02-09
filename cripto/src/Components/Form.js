import styled from '@emotion/styled'
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import useCrypto from '../Hooks/useCrypto';
import useMoney from '../Hooks/useMoney';
import Error from './Error';




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

const Form = ({setMoney, setCripto}) => {

    const MONEDAS =[ 
      {codigo: 'USD', nombre: 'Dolar'},
      {codigo: 'MXN', nombre: 'Peso Mexicano'},
      {codigo: 'EUR', nombre: 'Euro'},
      {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)
    const [money, SelectMoney] = useMoney('Money', '', MONEDAS);
    const [crypto, SelectCrypto] = useCrypto('Select Crypto', '', cryptos);



    const HandleSubmit = (e) =>{
      e.preventDefault()

      if(money.trim() === '' || crypto.trim() === ''){
        setError(true)
        return;
      }

      setError(false)
      setMoney(money)
      setCripto(crypto)



    }
   
    

    useEffect(() => {
      
      const getData = async () => {
        const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const {data} = await axios.get(URL)
        setCryptos(data.Data)

      }

      getData()
      
    
      
    }, [])
    


  return (
    <form
      onSubmit={HandleSubmit}
    >
      {error ? <Error message='all fields are required'/>: null}
        <SelectMoney />
        <SelectCrypto/>

        <Button
        type='submit'
        value='search'
        />
    </form>
  )
}

export default Form