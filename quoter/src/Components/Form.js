import React, {useState}from 'react'
import styled from '@emotion/styled';

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

const Form = () => {

    
  return (
    <form>
      <Containers>
        <Label>Brand</Label>
        <Select>
          <option value="">-- Select --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Containers>
      <Containers>
        <Label>Year</Label>
        <Select>
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
        />Basic
         <InputRadio
         type='radio'
         name='plan'
         value='complete'
        />Complete
      </Containers>

      <Button type='button'>quoter</Button>
    </form>
  );
}

export default Form