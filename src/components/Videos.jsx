import React, { useEffect, useState } from 'react'
import fetchVideos from '../utils/fetchVideos'
import VideoCard from './VideoCard';

const Videos = ({videos}) => {
  if(videos?.length==0) return;
  console.log(videos[1]);
  return(
    <div className="videos-container">
      {videos.map((item, i)=>(
      <VideoCard video={item}  key={i} />
    ))}
    </div>
  )
}

export default Videos