import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className="video-card">
        <Link className='links' to={videoId ? `/video/${videoId}`:"/"}>
           <img className='thumbnail-img' src={snippet?.thumbnails?.medium?.url}  alt="card gone" />
        </Link>
        <div className='thumbnail-text'>
          <span >{snippet?.title?.slice(0, 60)}</span>
        </div>
          <Link className='links' to={snippet?.channelId ? `/channel/${snippet?.channelId}`:"/"}>
            <span  className='channel-title'>{snippet?.channelTitle || "------"}</span>
          </Link>
          
    </div>
  )
}

export default VideoCard