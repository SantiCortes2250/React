import React from "react";
import { Imagenes } from "./Imagenes";
import { AiFillPlayCircle } from "react-icons/ai";

export const BannerSlider = ({ item, onSendData }) => {
  const { id, title, backdrop_path, overview } = item;

 
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div className="container_banner_movie">
        <Imagenes url={`${URL_IMAGE + backdrop_path}`}></Imagenes>
        <div className="container_info_movie">
          <h1>{title}</h1>
          <div className="container_stars_years_movie"></div>
          <div className="description_movie">
            <p>{overview}</p>
          </div>
          <div className="info_movie">
            <p></p>
          </div>
          <button
            className="btn_watch_movie"
            onClick={() => {
              onSendData(id);
            }}
          >
            <AiFillPlayCircle className="icon_watch" />
            <span>Watch Trailer</span>
          </button>
        </div>
      </div>
    </>
  );
};
