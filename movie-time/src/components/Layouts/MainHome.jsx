import React, { useEffect, useState } from 'react'
import { getUp, getVideoMovie } from '../../api'
import { BannerSlider } from '../UI/BannerSlider'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../stylesSlider/slick2.css";
import { SliderMovies } from '../UI/SliderMovies';
import { VideoMovie } from '../UI/VideoMovie';
import UpcomingMovies from '../UI/UpcomingMovies';
import Trending from '../UI/Trending';
import Title from '../UI/Title';





export const MainHome = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
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
  const [trailer, setTrailer] = useState(null)
  const [playing, setPlaying] = useState(false)

  const loadMovies = async () => {
    const { data } = await getUp()
    setMovies(data.results)
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

  const handlePlaying = () =>{
    setPlaying(false)
  }

  useEffect(() => {
    loadMovies()

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
      <div className='main_home_movies'>
        <Slider {...settings}>
          {movies.map((item) => (
            <BannerSlider
              onSendData={handleChildData}
              key={item.id}
              item={item}
            />
          ))}
        </Slider>
        <Title title='Latest'/>
        <SliderMovies
        onSendData={handleChildData}

        />
        <Title title='Upcoming'/>
        <UpcomingMovies/>
        <Title title='Trending'/>
        <Trending/>
      </div>

    </>

  )
}
