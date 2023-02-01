import React from 'react'
import styled from '@emotion/styled';
import {primerMayuscula} from '../Helpers'

const ContainerResumen = styled.div`
    padding: 1rem;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({date}) => {

    const {marca, year, plan} = date

    if(marca === '' || year === '' || plan === '') return null;
    
  return (
    <ContainerResumen>
     <h2>Resumen de cotizacion</h2>
        <ul>
        <li>Marca: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Year: {year}</li>
        </ul>
    </ContainerResumen>
  )
}

export default Resumen