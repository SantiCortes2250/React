import React from 'react'
import logo from '../../assets/logo.png'
import { Imagenes } from '../UI/Imagenes'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from 'react-icons/ai'
import { TiSocialYoutubeCircular } from 'react-icons/ti'



export const Header = () => {
  return (
    <div className='header_movie'>
        <div className="logo_movie">
            <Imagenes url={logo} id="img_logo_movie"/>
        </div>
        <div className="nav_bar_movie">
            <form>
                <input type="text" placeholder='Search'/>
                <button>Search</button>
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
