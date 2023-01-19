import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { getMovie } from '../../api';
import { Cards_movie } from '../UI/Cards_movie';


export const MainMovies = () => {

    const  {nombre}  = useParams();

    const [movies, setMovies] = useState([])

    
    const searchMovie = async () =>{
        const {data} = await getMovie(nombre)
        setMovies(data.results)
    }

    useEffect(() => {
      searchMovie()
    },[movies]);
    

  return (
    <div className='main_movies_cards'>
        
        {movies.length === 0 ? 
        (<div className='message_result'>
          <h2>No results</h2>
        </div>):(
          <>
          <div className='message_result'>
            <h2>Results for "{nombre}"</h2>
          </div>
          <div className="container_cards_movies">
            {movies.map((item)=>(
              <Cards_movie
              key={item.id}
              item={item}
              />
            ))}
          </div>
          </>
        )
        }
        
    </div>
   
  )
}
