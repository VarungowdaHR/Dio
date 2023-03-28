import React from 'react'

const channelCard = ({channelDetail}) => {
  return (
    <div className="video-card">
        <Link className='links' to={snippet?.channelId ? `/channel/${snippet?.channelId}`:"/"}>
           <img className='thumbnail-img' src={snippet?.thumbnails?.medium?.url}  alt="card gone" />
        </Link>
          <Link className='links' to={snippet?.channelId ? `/channel/${snippet?.channelId}`:"/"}>
            <span  className='channel-title'>{snippet?.channelTitle || "------"}</span>
          </Link>
    </div>
  )
}

export default channelCard