import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';

const Videos = ({videos, isLoading}) => {
  if(!videos) return;
  return(
    <div className="videos-container">
      {videos.map((item, i)=>(
      <VideoCard video={item}  key={i} />
    ))}
    </div>
  )
}

export default Videos