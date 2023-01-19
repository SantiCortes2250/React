import React from 'react'
import { Header } from '../Layouts/Header'
import { Footer } from '../Layouts/Footer'
import { MainMovies } from '../Layouts/MainMovies'


export const Movies = () => {
  return (
    <div>
        <Header/>
        <MainMovies/>
        <Footer/>
    </div>
  )
}
