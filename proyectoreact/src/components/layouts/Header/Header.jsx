import React from 'react'
import { NavLink } from 'react-router-dom'
import { Botones } from '../../UI/Botones/Botones'


export const Header = () => {
  return (
    <div className='BtnHeader'>
      <NavLink to="/"><Botones BtnNombre="Home"/></NavLink>
      <NavLink to="/AboutUs"><Botones BtnNombre="About Us"/></NavLink>
      <NavLink to="/Contact"><Botones BtnNombre="Contact"/></NavLink>
      <NavLink to="/Counter"><Botones BtnNombre="Counter"/></NavLink>
      <NavLink to="/Counterimage"><Botones BtnNombre="Counterimage"/></NavLink>
      <NavLink to="/Cards"><Botones BtnNombre="Cards"/></NavLink>
      <NavLink to="/Contactanos"><Botones BtnNombre= "Contactanos"/></NavLink>
    </div>
  )
}
