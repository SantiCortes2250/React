import styled from '@emotion/styled';
import React from 'react'



const ContainerSentence = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:700px;
    height: 300px; 
    overflow: hidden;
    margin-left: 20px;
    margin-right: 20px;
    


    
  
    
    @media (min-width: 992px) {
        margin-top: 15rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;


const Sentence = ({sentence}) => {
  return (
    <ContainerSentence>
        <h1>{sentence.quote} </h1>
        <p>- {sentence.author} </p>
    </ContainerSentence>
  )
}

export default Sentence