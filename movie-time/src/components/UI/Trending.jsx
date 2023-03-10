import React, { useEffect, useState } from "react";
import { getMovies } from "../../api";
import { Imagenes } from "./Imagenes";
import Slider from "react-slick";
import "../../stylesSlider/slick.css";
import "slick-carousel/slick/slick.css";

const Trending = () => {

    const URL_IMAGE = "https://image.tmdb.org/t/p/original";

    const [movies, setMovies] = useState([]);
  
    const loadMovies = async () => {
      const { data } = await getMovies();
      setMovies(data.results);
    };
  
    useEffect(() => {
      loadMovies();
    }, []);


  return (
    <div className="main_slider_treding">
      <div className="btns_trendi">
        <button>JUST AIRED</button>
        <button>POPULAR MOVIES</button>
        <button>TV SHOWS</button>
        <button>FREE MOVIES</button>
      </div>
      <div className="cards_movies_treding">
          {movies.map((item) => (
            <div key={item.id} className="treding_card">
              <div className="treding_img">
                <Imagenes url={`${URL_IMAGE + item.poster_path}`} />
              </div>
              <div className="tranding_info">
                <h4>{item.title}</h4>
                <div className="p_tranding">
                  <p>{item.overview}</p>
                </div>
                <button>More Info</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Trending