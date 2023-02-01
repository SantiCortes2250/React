import styled from '@emotion/styled'
import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'



const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding:1rem; 
    text-aling: center;
    
`

const ResultCotiuzacion = styled.div`
    text-aling: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`

const TextCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;

`

const Result = ({cotizacion}) => {

    return(
        (cotizacion === 0) ? 
        <Message>Elige marca, año y tipo de seguro</Message> : 
        (
            <ResultCotiuzacion>
                <TransitionGroup
                    component="p"
                    className="resultado"
                    >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{ enter: 500, exit: 500}}
                    >
                        <TextCotizacion>El total es: {cotizacion}</TextCotizacion>
                    </CSSTransition>
                </TransitionGroup>
                
                
            </ResultCotiuzacion>
        )
    )
}

export default Result