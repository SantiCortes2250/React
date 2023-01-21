import React, {useState, useEffect} from 'react'
import { Imagenes } from './Imagenes';
import {AiFillPlayCircle} from 'react-icons/ai'
import { getVideoMovie } from '../../api';
import YouTube from 'react-youtube';
import { VideoMovie } from './VideoMovie';


export const BannerSlider = ({item}) => {

    const {id, title, backdrop_path, overview} = item
    const [trailer, setTrailer] = useState(null)
    const [playing, setplaying] = useState()
  



    const searchMovie = async (id) =>{
      const {data} = await getVideoMovie(id)
      
      if(data.videos && data.videos.results){
        const trailer = data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : data.videos.results[0])
      }

  
  
    }

    
   

    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

    

  return (
    <>
    <VideoMovie
      trailer={trailer}
    />
    
      
      

    
    <div className='container_banner_movie'>
        <Imagenes url={`${URL_IMAGE + backdrop_path}`}>
        </Imagenes>
        <div className="container_info_movie">
            <h1>{title}</h1>
            <div className="container_stars_years_movie">
            </div>
            <div className="description_movie">
              <p>{overview}</p>
            </div>
            <div className="info_movie">
                
                
                <p></p>
            </div>
            <button className='btn_watch_movie' onClick={()=>{searchMovie(id)}}>
              <AiFillPlayCircle className='icon_watch'/>
              <span>Watch Trailer</span>
            </button>
        </div>
    </div>
    </>
    
  )
}
