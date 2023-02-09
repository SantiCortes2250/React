import React from 'react'
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const InfoPrice = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Price = ({result}) => {

    if(Object.keys(result).length === 0) return null;

  return (
    <ResultDiv>
        <InfoPrice>El precio es: <span>{result.PRICE}</span></InfoPrice>
        <Info>El precio mas alto del dia: <span>{result.HIGHDAY}</span></Info>
        <Info>El precio mas bajo del dia: <span>{result.LOWDAY}</span></Info>
        <Info>Variacion ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Info>
        <Info>Ultima Atualizacion: <span>{result.LASTUPDATE}</span></Info>
    </ResultDiv>
  )
}

export default Price