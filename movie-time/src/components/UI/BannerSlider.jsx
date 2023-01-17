import React from 'react'
import { Imagenes } from './Imagenes';


export const BannerSlider = ({item}) => {

    const {title, backdrop_path} = item;


    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

    

  return (
    <div className='container_banner_movie'>
        <Imagenes url={`${URL_IMAGE + backdrop_path}`}/>
        
        <div className="container_info_movie">
            
            <h1>{title}</h1>
            <div className="container_stars_years_movie">

            </div>
            <div className="description_movie">
               
            </div>
            <div className="info_movie">
                <p></p>
                <p></p>
                
            </div>

        </div>


    </div>
  )
}
