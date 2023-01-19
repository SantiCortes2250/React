import React, {useState, useEffect} from 'react'
import logo from '../../assets/logo.png'
import { Imagenes } from '../UI/Imagenes'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from 'react-icons/ai'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { getMovie } from '../../api';
import { NavLink } from 'react-router-dom';



export const Header = () => {

    const [search, setSearch] = useState('')


  return (
    <div className='header_movie'>
        <div className="logo_movie">
        <NavLink to={"/"}><Imagenes url={logo} id="img_logo_movie"/></NavLink>
        </div>
        <div className="nav_bar_movie">
            <form>
                <input 
                type="text" placeholder='Search'
                onChange={(e)=>setSearch(e.target.value)}/>
                <NavLink to={"/Movies/"+ search}><button>Search</button></NavLink>
            </form>

        </div>
        <div className="social_movie">
            <BsFacebook id="facebook"/>
            <AiFillTwitterCircle id="twitter"/>
            <TiSocialYoutubeCircular id="youtube"/>

        </div>
    </div>
  )
}
