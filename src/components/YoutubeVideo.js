import React from 'react'
import YouTube from 'react-youtube';

const YoutubeVideo = ({ url }) => {
  const opts = {
    height: '195',
    width: '320',
    playerVars: {
      autoplay: 0,
      controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0, 
    },
  };

  return (
    
          <YouTube videoId={url} opts={opts}></YouTube>
          
    )
}

export default YoutubeVideo
