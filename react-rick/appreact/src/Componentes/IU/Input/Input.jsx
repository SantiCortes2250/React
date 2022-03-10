import React from 'react'

export const Input = ({event , id}) => {
  return (
    <div>
        <input type="text" id={id} onKeyDown={event} placeholder= 'Ingrese el nombre del Personaje'/>
    </div>
  )
}
