import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import Videos from '../components/Videos';
import useDate from '../hooks/useDate';
import Comments from '../utils/Comments';
import "../utils/css/video.css"
import fetchVideos from '../utils/fetchVideos';

const VideoDetail = () => {
  const [videos, setvideos] = useState([]);
  const [currentVideo, setcurrentVideo] = useState(null);
  const {id}=useParams();
  const BASE_URL="https://www.youtube.com/watch";
  const {curYear, curMonth, curDay}=useDate(currentVideo?.snippet?.publishedAt );

  useEffect(()=>{
    const fetch= async ()=> {
      await fetchVideos(`videos?part=snippet%2Cstatistics&id=${id}`)
      .then((res)=> setcurrentVideo(res.items[0]));

      await fetchVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((res)=> setvideos(res.items));
    }
    fetch();
  },[]);
  
  return (
    <div className="video">
      <div className="video-player">
         <ReactPlayer
          className='react-player'
          url={`${BASE_URL}?v=${id}`} 
          width="100%"
          height="100%"
          controls/>
          <div className="about">
            <div className="video-title">
              <div id='title'>
                <h3>
                   <span>{currentVideo?.snippet?.localized?.title || "title not avilable"}</span>
                </h3>
               
              </div>
              <div>
                <small>
                  <span>{parseInt(currentVideo?.statistics?.viewCount).toLocaleString()} Views</span>
                </small>
                
              </div>
            </div>
              <div className="video-details">
                <div className='vid-title'>
                  <span>{`Uploaded on ${curDay} - ${curMonth} - ${curYear}`}</span>
                </div>
                <div className='vid-likes'>
                  <div className='vid-title'>
                    <span>{currentVideo?.snippet?.channelTitle}</span>
                  </div>
                  <div className='vid-title'>
                      <span>{currentVideo?.statistics?.likeCount} Likes</span>
                  </div>
                </div>
            </div>
          </div>
          <div>
            <Comments id={id} />
          </div>
      </div>
      <div className="related-videos">
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default VideoDetail