import React, { useEffect, useState } from "react";
import { getTrending, getMovie } from "../../api";
import { Imagenes } from "./Imagenes";
import { NavLink } from 'react-router-dom';

const Trending = () => {

    const URL_IMAGE = "https://image.tmdb.org/t/p/original";

    const [movies, setMovies] = useState([]);
    console.log(movies)

    const [type, setType] = useState('movie')
    const [name, setName] = useState('popular')
  

   

   
  
    const loadMovies = async () => {
      const { data } = await getTrending(type, name);
      
      setMovies(data.results);
    };

   
  
    useEffect(() => {
      loadMovies();
   
    
    }, [type, name]);


  

  return (
    <div className="main_slider_treding">
      <div className="btns_trendi">
        <button
        onClick={()=> {
          setType('movie')
          setName('popular')

        }}
        >JUST AIRED</button>
        <button
         onClick={()=> {
          setType('movie')
          setName('top_rated')

        }}

        >POPULAR MOVIES</button>
        <button
        onClick={()=> {
          setType('tv')
          setName('popular')

        }}

        >TV SHOWS</button>
        <button
        onClick={()=> {
          setType('movie')
          setName('now_playing')

        }}

        >FREE MOVIES</button>
      </div>
      <div className="cards_movies_treding">
          {movies.map((item) => (
            <div key={item.id} className="treding_card">
              <div className="treding_img">
                <Imagenes url={`${URL_IMAGE + item.poster_path}`} />
              </div>
      
              <div className="tranding_info">
                {type !== 'tv' ? <h4>{item.title}</h4> :<h4>{item.name}</h4>}
                
                <div className="p_tranding">
                  <p>{item.overview}</p>
                </div>

                {type !== 'tv' ? 
                <NavLink to={"/search/" + 'movie/'+ item.title}>
                <button>
                    More Info
                  </button>
                </NavLink> :

                <NavLink to={"/search/" +  'tv/'+ item.name}>
                <button>
                    More Info
                  </button>
                </NavLink> 
                }


           
                
                
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Trending