import React, { Suspense, useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import Videos from '../components/Videos';
import useDate from '../hooks/useDate';
import "../utils/css/video.css"
import fetchVideos from '../utils/fetchVideos';
import {Loading, LoaderIcon} from '../components/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';

const Comments=React.lazy(()=>import('../utils/Comments'))

const VideoDetail = () => {
  const [videos, setvideos] = useState([]);
  const [currentVideo, setcurrentVideo] = useState(null);
  const [isLoading, setisLoading] = useState(true)
  const [showComment, setshowComment] = useState(false);

  const {id}=useParams();
  const BASE_URL="https://www.youtube.com/watch";
  const {curYear, curMonth, curDay}=useDate(currentVideo?.snippet?.publishedAt );



  useEffect(()=>{
    setisLoading(true);
    const fetch= async ()=> {
      await fetchVideos(`videos?part=snippet%2Cstatistics&id=${id}`)
      .then((res)=> setcurrentVideo(res.items[0]));
      await fetchVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((res)=>{ 
        setvideos(res.items);
        setisLoading(false);
      })
    }

    fetch();
  },[id]);
  
  
  return (
    <div className="video">
      <div className="video-player">
        <div className='video-box'>
            <ReactPlayer
            className='react-player'
            url={`${BASE_URL}?v=${id}`} 
            height="100%"
            width="100%"
            config={{
              youtube: {
                playerVars: {showinfo : 0, modestbranding:1}
              }}}
           
            style={{
              fontSize:'.5rem'
            }}
            playing
            controls/>
        </div>
         

          <div className="about">

            <div className="video-title">
              <div>
                <h3 id='title'>
                  <span>{currentVideo?.snippet?.localized?.title}</span>
                </h3>
              </div>
              <div id='view-count'>
                  <span>{parseInt(currentVideo?.statistics?.viewCount || '00').toLocaleString()} Views</span>
              </div>

            </div>


            <div className="video-details">
                <div className='vid-title'>
                <span>{currentVideo?.snippet?.channelTitle}</span>
                </div>
                <div className='vid-likes'>
                  <div className='vid-title'>
                    
                    <span>Uploaded on
                      <b>
                      {` ${curDay} - ${curMonth} - ${curYear}`}
                      </b>
                    </span>
                  </div>
                  <div className='vid-title'>
                      <span><b>{currentVideo?.statistics?.likeCount}</b> Likes</span>
                  </div>
                </div>
            </div>


          </div>


          <div className='hr'>
              <h2>Comments</h2>
          </div>

          <div>
            <button className='load-more' onClick={()=>setshowComment(!showComment)}>
              <p> click here to
                {!showComment? " load " :" hide "}
                  comments.. &nbsp;
                <FontAwesomeIcon icon={faArrowDown} />
              </p>
            </button>
          </div>
          
          <div>
            
            {showComment &&
            <Suspense fallback={<LoaderIcon />}>
               <Comments id={id} />
            </Suspense>}
          </div>
      </div>



      <div className="related-videos">
        <div>
          <Videos videos={videos} />
          {isLoading && <Loading />}
        </div>
      </div>


    </div>
  )
}

export default VideoDetail