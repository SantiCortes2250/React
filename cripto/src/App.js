import styled from "@emotion/styled";
import axios from "axios";
import React, {useState, useEffect} from "react";
import Form from "./Components/Form";
import Price from "./Components/Price";
import Spinner from "./Components/Spinner.js/Spinner";
import image from "./main-img.png";



const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
 
    @media (min-width:992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
 
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;

`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #fabb00;
    display: block;
  }
`;

function App() {

  const [money, setMoney] = useState('')
  const [cripto, setCripto] = useState('')
  const [result, setResult] = useState({})
  const [spinner, setSpinner] = useState(false)


  useEffect(() => {
    const getValues = async()=>{
      const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${money}`
      const {data} = await axios.get(url)
      setResult(data.DISPLAY[cripto][money])
      setSpinner(true)
    }
    getValues()

    setTimeout(() => {
      setSpinner(false)
    }, 3000)

    

    
  }, [money, cripto])


  const component = spinner ? <Spinner/> : <Price result={result}/>
  


  return (
    <Container>
      <div>
        <Image
        src={image}
        alt="image cripto"
        />
      </div>
      <div>
        <Heading>Cryptos the instant</Heading>
        <Form
        setMoney={setMoney}
        setCripto={setCripto}
        />
        {component}
      </div>
  </Container>

  );
  
}

export default App;
