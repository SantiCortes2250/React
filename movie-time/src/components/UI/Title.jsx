import React from 'react'
import { MdLocalMovies } from 'react-icons/md'

const Title = ({title}) => {
  return (
    <div className="container_title_movies">
        <MdLocalMovies className='icon_container_movie_title' />
        <p className='p_container_movie_ti'>{title}</p>
        <p className='p2_container_movie_title'>Movies</p>
    </div>
  )
}

export default Title