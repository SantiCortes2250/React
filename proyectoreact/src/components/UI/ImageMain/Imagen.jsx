import React from 'react'

export const Imagen = ({url, id , clase}) => {
  return (
    <div>
        <img id={id} src= {url} alt="" className={clase}/>
    </div>
  )
}
