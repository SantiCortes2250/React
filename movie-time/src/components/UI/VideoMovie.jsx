import React from 'react'
import YouTube from 'react-youtube'

export const VideoMovie = ({trailer, onClick }) => {


  return (
    <div className='youtube-container' onClick={onClick}>
       <h1 onClick={onClick} className="btn_trailer_movie">
        x
      </h1>
      <YouTube
        videoId={trailer.key}
        className="reproductor container"
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 0,
            cc_load_policy: 0,
            fs: 0,
            iv_load_policy: 0,
            modestbranding: 0,
            rel: 0,
            showinfo: 0,
          },
        }}
      />
     
    </div>
  )
}
