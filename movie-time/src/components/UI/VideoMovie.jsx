import React from 'react'
import YouTube from 'react-youtube';

export const VideoMovie = ({trailer}) => {
  console.log(trailer)
  
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          
          autoplay: 1,
        },
      };

    function _onReady(event) {
        
        event.target.pauseVideo();
      }

  return (
    <div className="container_video_movie">
         <YouTube videoId={''} opts={opts} onReady={_onReady} className='video_movie'/>

    </div>
 
  )

  
}
