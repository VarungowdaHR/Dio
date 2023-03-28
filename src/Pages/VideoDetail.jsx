import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import Videos from '../components/Videos';
import useDate from '../hooks/useDate';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Comments from '../utils/Comments';
import "../utils/css/video.css"
import fetchVideos from '../utils/fetchVideos';

const VideoDetail = () => {
  const [videos, setvideos] = useState([]);
  const [currentVideo, setcurrentVideo] = useState(null);
  const [page, setpage] = useState(1);
  const [isLoading, setisLoading] = useState(true)

  const {id}=useParams();
  const BASE_URL="https://www.youtube.com/watch";
  const {curYear, curMonth, curDay}=useDate(currentVideo?.snippet?.publishedAt );
  const {scrollRef} = useInfiniteScroll(setpage, isLoading);

  useEffect(()=>{
    setisLoading(true);
    const fetch= async ()=> {
      await fetchVideos(`videos?part=snippet%2Cstatistics&id=${id}`)
      .then((res)=> setcurrentVideo(res.items[0]));
      await fetchVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((res)=>{ 
        setvideos(res.items);
        setisLoading(false);
      }).catch(()=>{
        setisLoading(true);
      })
    }

    fetch();
  },[id]);
  
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
              <div>
                <h3 id='title'>
                  <span>{currentVideo?.snippet?.localized?.title || "title not avilable"}</span>
                </h3>
              </div>
              <div id='view-count'>
                  <span>{parseInt(currentVideo?.statistics?.viewCount).toLocaleString()} Views</span>
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


          <div className='hr'>
            <h2>Comments</h2>
          </div>
          <div>
            <Comments id={id} />
          </div>
      </div>
      <div className="related-videos">
        <div>
          <Videos videos={videos} />
        </div>
        <div ref={scrollRef}></div>
        
      </div>
    </div>
  )
}

export default VideoDetail