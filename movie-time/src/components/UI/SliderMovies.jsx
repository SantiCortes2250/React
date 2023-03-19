import React, {useEffect, useState} from 'react'
import { getMovies } from '../../api'
import { Imagenes } from './Imagenes'
import Slider from "react-slick";
import "../../stylesSlider/slick.css"; 
import "slick-carousel/slick/slick.css"; 
import {AiFillPlayCircle} from 'react-icons/ai'


export const SliderMovies = () => {

    const settings2 = {
        dots: true,
        infinite: true,
        slidesToShow:4,
        slidesToScroll: 1,
        speed: 700,
        cssEase: "linear",
        initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
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
    
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

    
    const [movies, setMovies] = useState([])

    const loadMovies = async () =>{
        const {data} = await getMovies()
        setMovies(data.results) 
    }

    useEffect(() => {
        loadMovies()
        
    }, [])

    

   

  return (
    <div className='main_slider_movies'>
        <div className="cards_movies_list">
            <Slider {...settings2}>
                {movies.map((item) => (
                <div key={item.id} className="cards_movies">
                    <div className="container_img_movie">
                        <Imagenes url={`${URL_IMAGE + item.poster_path}`} />
                    </div>
                    <div className="info_movie_card">
                        <div className="btn_wacth">
                          <AiFillPlayCircle className='icon_btn_watch'/>
                        </div>
                        <div className="info">
                          <h4>{item.title}</h4>
                          <div className="container_p">
                            <p>{item.overview}</p>

                          </div>
                          
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
        </div>  
    </div>
  )
}
