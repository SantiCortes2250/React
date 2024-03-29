import React, {useState}from 'react'
import styled from '@emotion/styled';
import { getDiferenceYear, calcularMarca, obtenerPlan} from '../Helpers';
import { isClickableInput } from '@testing-library/user-event/dist/utils';

const Containers = styled.div`
    display: flex;
    margin-bottom: 1rem;
    aling-items: cneter;

`;

const Label = styled.label`
    flex: 0 0 100px;
`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none

`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }


`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-aling: center;
    margin-bottom: 2rem;
`

const Form = ({setResumen, setloading}) => {

  const [date, setdate] = useState({
    marca: '',
    year: '',
    plan: ''

  });


  const [error, setError] = useState(false)

  const {marca, year, plan} = date;


  const getInfo = (e) =>{
    setdate({
      ...date,
      [e.target.name] : e.target.value
    })

  }

  const Handlesubmit = (e) =>{
    e.preventDefault()


    if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
      setError(true)
      return;
    }

    setError(false)

    //una base de 2000

    let result = 2000;

    //obtener diferencia de años

    const diference = getDiferenceYear(year)
     
    //por cada año hay que restar el 3%
    result -= (( diference * 3 ) * result ) / 100
 
    //americano 15%
    //asiatico 5%
    //europeo 30%

    result *= calcularMarca(marca)
    


    //Basico aumenta 20%
    //Completo 50%

    const incrementoPlan = obtenerPlan(plan)
    
    result = parseFloat(incrementoPlan * result).toFixed(2)

    setloading(true)

    setTimeout(() => {

      //Elimina el spinner 
      setloading(false)

      //pasa la informacion al componente pricipal
      setResumen({
        cotizacion: result,
        date
  
      });
    }, 3000);

   

  }





    
  return (
    <form
      onSubmit={Handlesubmit} 
    >
      {error ? <Error>Todos los campos son obligatorios</Error>: null}
      <Containers>
        <Label>Brand</Label>
        <Select
          name="marca"
          value={marca}
          onChange={getInfo}
        >
          <option value="">-- Select --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Containers>
      <Containers>
        <Label>Year</Label>
        <Select
        name="year"
        value={year}
        onChange={getInfo}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Containers>
      <Containers>
        <Label>Type</Label>
        <InputRadio
         type='radio'
         name='plan'
         value='basic'
         checked={plan === "basic"}
         onChange={getInfo}
        />Basic
         <InputRadio
         type='radio'
         name='plan'
         value='complete'
         checked={plan === "complete"}
         onChange={getInfo}
        />Complete
      </Containers>

      <Button type='submit'>quoter</Button>
    </form>
  );
}

export default Form