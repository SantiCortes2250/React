import React from 'react'
import styled from '@emotion/styled';

const ContainerHeader = styled.header`
    display: flex;
    justify-content: center;
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
    
`;

const Text = styled.h1`
  font-size: 2rem;
  margin:0;
  font-family: 'Slabo 27px', serif;
 
  

  
`

const Header = ({title}) => {
  return (
    <ContainerHeader>
        <Text>{title}</Text>
    </ContainerHeader>
  )
}

export default Header