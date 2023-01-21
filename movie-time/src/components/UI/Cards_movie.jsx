import React from 'react'
import { Imagenes } from './Imagenes'
import {AiFillPlayCircle} from 'react-icons/ai'
import { getVideoMovie } from '../../api'


export const Cards_movie = ({item}) => {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';


  const searchMovie = async (id) =>{
    const {data} = await getVideoMovie(id)
    console.log(data)


  }

 

   
  return (
    <div className="cards_movies">
      <div className="container_img_movie">
        <Imagenes url={`${URL_IMAGE + item.poster_path}`} />
      </div>
      <div className="info_movie_card2">
        <div className="btn_wacth2">
          <AiFillPlayCircle className='icon_btn_watch' onClick={()=>{searchMovie(item.id)}}/>
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


