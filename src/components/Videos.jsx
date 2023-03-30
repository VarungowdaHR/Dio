import VideoCard from './VideoCard';
import React from 'react';

const Videos = ({videos, isLoading}) => {
  if(!videos) return;
  return(
    <div className="videos-container">
      {videos.map((item, i)=>(
          <React.Fragment key={i}>
            {item?.id?.videoId && <VideoCard video={item} />}
          </React.Fragment>
        )
    )}
    </div>
  )
}

export default Videos