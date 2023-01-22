import React, {useState, useEffect} from 'react'
import { Imagenes } from './Imagenes'
import {AiFillPlayCircle} from 'react-icons/ai'
import { getVideoMovie } from '../../api'



export const Cards_movie = ({item}) => {
  
  

  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
  const [trailer, setTrailer] = useState(null)
  
  
  
  


  const selectMovie = (id) => {
    console.log(id)
   
  };


 

  

  return (
    <div className="cards_movies">
      <div className="container_img_movie">
        <Imagenes url={`${URL_IMAGE + item.poster_path}`} />
      </div> 
      <div className="info_movie_card2"> 
        <div className="btn_wacth2">
          <AiFillPlayCircle className='icon_btn_watch' onClick={()=>{selectMovie(item.id)}} />
        </div>
        <div className="info2">
          <h4>{item.title}</h4>
          <div className="container_p">
            <p>{item.overview}</p>
          </div>
        </div> 
      </div> 
    </div>
  )
}

