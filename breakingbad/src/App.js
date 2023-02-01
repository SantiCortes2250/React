import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import Sentence from "./components/Sentence"


const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
` ;

function App() {

  const [sentence, setSentence] = useState({})

  const URL = 'https://api.breakingbadquotes.xyz/v1/quotes'

  const GetSentence = async () =>{
    try {
      const API = await fetch(URL)
      const data = await API.json()
      setSentence(data[0])
    } catch (error) {
      console.error(error)
      
    }
    

  }

  useEffect(() => {
    GetSentence()
    
  }, [])
  


  return (
    <Container>
        <Sentence
          sentence={sentence}
        />
       <Button onClick={GetSentence}>Get sentence</Button>
    </Container>
  );
}

export default App;
