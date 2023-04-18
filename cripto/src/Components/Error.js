import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #fabb00;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    border-radius: 20px;
`;

const Error = ({message}) => {
    return (  
        <MensajeError>{message}</MensajeError>
    );
}
 
export default Error;