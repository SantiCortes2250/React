import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { getMovie, getVideoMovie } from '../../api';
import { Cards_movie } from '../UI/Cards_movie';
import { VideoMovie } from '../UI/VideoMovie';
import YouTube from 'react-youtube'


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
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }

    setPlaying(true)





  }




  useEffect(() => {
    searchMovie()
  }, [movies]);



  return (
    <>
      {playing ? (
        <div className='youtube-container' onClick={() => setPlaying(false)}>
          <YouTube
            videoId={trailer.key}
            className="reproductor container"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                controls: 0,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
              },
            }}
          />
          <h1 onClick={() => setPlaying(false)} className="btn_trailer_movie">
            x
          </h1>
        </div>
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
