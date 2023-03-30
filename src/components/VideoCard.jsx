import React from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className="video-card">
        <Link className='links' to={videoId ? `/video/${videoId}`:"/"}>
           <img className='thumbnail-img' src={snippet?.thumbnails?.medium?.url}  alt="card gone" height= "180px"/>
        </Link>
        <div className='thumbnail-text'>
          <span >{parse(snippet?.title?.slice(0, 60)) }</span>
        </div>
          <Link className='links' to={snippet?.channelId ? `/channel/${snippet?.channelId}`:"/"}>
            <span  className='channel-title'>{snippet?.channelTitle}</span>
          </Link>
          
    </div>
  )
}

export default VideoCard