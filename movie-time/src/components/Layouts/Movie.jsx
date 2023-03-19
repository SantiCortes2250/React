import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { getMovie } from '../../api'

const Movie = () => {

    const {name} = useParams()
    const [movie, setmovie] = useState({})
    console.log(movie)
   
    


 
   useEffect(() => {
    const getData = async() =>{
        const {data} = await getMovie(name)
        setmovie(data.results[0])
    }
    getData()
   
   }, [])


  return (

    <div>
         <h2>{movie.title}</h2>
         <h4>Language:<p>{movie.original_language}</p></h4>
         <h4>Average:<p>{movie.vote_average}</p></h4>
         <h4>Date:<p>{movie.release_date}</p></h4>
         <p>{movie.overview}</p>


    </div>
   
  )
}

export default Movie