import React from 'react'

const Weather = ({result}) => {

    const {name, main} = result;

    if(!name) return null;

    const kelvin = 273.15;
  return (
    <div>
        <h2>{name}</h2>
        <h4>Temp</h4>
        <p>{ parseFloat( main.temp - kelvin, 10).toFixed(2) }<span> &#x2103;</span></p>
        <h4>Temp max</h4>
        <p>{ parseFloat( main.temp_max - kelvin, 10).toFixed(2) }<span> &#x2103;</span></p>
        <h4>Temp min</h4>
        <p>{ parseFloat( main.temp_min - kelvin, 10).toFixed(2) }<span> &#x2103;</span></p>
    </div>
  )
}

export default Weather