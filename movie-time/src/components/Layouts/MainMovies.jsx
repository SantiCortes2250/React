import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { getMovie, getVideoMovie } from '../../api';
import { Cards_movie } from '../UI/Cards_movie';
import { VideoMovie } from '../UI/VideoMovie';


export const MainMovies = () => {

  const { name } = useParams();

  const [movies, setMovies] = useState([])
  const [trailer, setTrailer] = useState(null)
  const [playing, setPlaying] = useState(false)




  const searchMovie = async () => {
    try {
      const { data } = await getMovie(name)
      setMovies(data.results)

      if (data.results.length) {
        await getVideoMovie(data.results[0].id);
      }

    } catch (error) {
      console.log(error)

    }

  }

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
    searchMovie()
  }, [movies]);



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
      <div className='main_movies_cards'>
        {movies.length === 0 ?
          (<div className='message_result'>
            <h2>No results</h2>
          </div>) : (
            <>
              <div className='message_result'>
                <h2>Results for "{name}"</h2>
              </div>


              <div className="container_cards_movies">

                {movies.map((item) => (
                  <Cards_movie
                    onSendData={handleChildData}
                    key={item.id}
                    item={item}


                  />
                ))}
              </div>
            </>
          )
        }


      </div>
    </>


  )
}
