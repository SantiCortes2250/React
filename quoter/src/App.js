import React, {useState} from "react";
import Header from "./Components/Header";
import styled from '@emotion/styled';
import Form from "./Components/Form";
import Resumen from "./Components/Resumen";
import Result from "./Components/Result";
import Spinner from "./Components/Spinner/Spinner";





const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [loading, setloading] = useState(false)

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    date:{
      marca: '',
      year: '',
      plan: ''
    }
  })


  const {date, cotizacion} = resumen;
  return (
    <Container>
      <Header 
       title='Insurance quoter'
      />
      <ContainerForm>
        <Form
        setResumen={setResumen}
        setloading={setloading}
        />
        {loading ? <Spinner/> : null}
        <Resumen
        date={date}
        />
        {!loading ? <Result cotizacion={cotizacion}/> :null}
      </ContainerForm>

    </Container>
  
  );
}

export default App;
