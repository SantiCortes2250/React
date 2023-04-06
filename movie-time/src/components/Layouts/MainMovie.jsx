import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { getMovie } from '../../api'
import { Imagenes } from '../UI/Imagenes'
import { AiFillPlayCircle } from "react-icons/ai";
import { getVideoMovie } from '../../api';
import { VideoMovie } from '../UI/VideoMovie';

const MainMovie = () => {

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

    const {name} = useParams()
    const [movie, setmovie] = useState({})
    const [trailer, setTrailer] = useState(null)
    const [playing, setPlaying] = useState(false)

  
    const handleChildData = async (id) => {
      const { data } = await getVideoMovie(id)
  
      if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : '');
      }
  
      
  
  
  
  
     
  
      setPlaying(true)
    }
  
    const handlePlaying = () =>{
      setPlaying(false)
    }
   
    


 
   useEffect(() => {
    const getData = async() =>{
        const {data} = await getMovie(name)
        setmovie(data.results[0])
    }
    getData()
   
   }, [])


  return (
    <>
     {playing ? (
        <VideoMovie
        trailer={trailer}
        onClick={handlePlaying}
        />
        
      ) :
      (
        ""
      )
      }
     <div className='container_movie'>
        <div className="img_movie">
        <Imagenes url={`${URL_IMAGE + movie.poster_path}`} />

        </div>
        <div className="info_movies">
            
         <h2>{movie.title}</h2>
         <h4>Language:<p>{movie.original_language}</p></h4>
         <h4>Average:<p>{movie.vote_average}</p></h4>
         <h4>Date:<p>{movie.release_date}</p></h4>
         <p>{movie.overview}</p>

        </div>
        <button
            className="btn_watch_movie"
            onClick={() => {
              handleChildData(movie.id);
            }}
          >
            <AiFillPlayCircle className="icon_watch" />
            <span>Watch Trailer</span>
        </button>
        


    </div>
    </>

   
   
  )
}

export default MainMovie