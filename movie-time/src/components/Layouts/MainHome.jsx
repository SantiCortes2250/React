import React, { useEffect, useState } from 'react'
import { getMovies } from '../../api'
import { BannerSlider } from '../UI/BannerSlider'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../stylesSlider/slick2.css"; 
import { SliderMovies } from '../UI/SliderMovies';
import { MdLocalMovies } from 'react-icons/md'




export const MainHome = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 8000,
        cssEase: "linear",
        initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 748,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    
    
    const [movies, setMovies] = useState([])

    const loadMovies = async () =>{
        const {data} = await getMovies()
        setMovies(data.results) 
    }

    useEffect(() => {
        loadMovies()
        
    }, [])
    
  return (
    <div className='main_home_movies'>
        <Slider {...settings}>
            {movies.map((item) => (
                <BannerSlider
                key= {item.id}
                item = {item}
                />
            ))}
        </Slider>
        <div className="container_title_movies">
              <MdLocalMovies className='icon_container_movie_title'/>
              <p className='p_container_movie_ti'>Latest</p>
              <p className='p2_container_movie_title'>Movies</p>
        </div>
        <SliderMovies/>
    </div>
  )
}
