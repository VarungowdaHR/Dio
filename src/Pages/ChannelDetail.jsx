import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Videos from '../components/Videos';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import '../utils/css/channel.css'
import fetchVideos from '../utils/fetchVideos';
import {Loading} from "../components/Loading"
import Error from '../components/Error';
import profile from '../utils/images/profile.jpg'

const ChannelDetail = () => {
  const [videos, setvideos] = useState([]);
  const [channelData, setchannelData] = useState(null)
  const [isLoading, setisLoading] = useState(true)
  const [page, setpage] = useState(1);
  const [isError, setisError] = useState(false)
  const {id}=useParams();

  const {scrollRef} = useInfiniteScroll(setpage, isLoading);


  useEffect(()=>{
    setisLoading(true);
    fetchVideos(`search?channelId=${id}&part=snippet%2Cid&nextPageToken=${page}&order=date`).then((res)=>{
      setvideos([...videos, ...res.items]);
      setisLoading(false);
      setisError(false)
   }).catch(()=>{
    setisError(true);
   })
  },[id, page]);

  useEffect(()=>{
    fetchVideos(`channels?part=snippet&id=${id}`).then((res)=>{
      setchannelData(res.items[0]);
    }).catch((e)=>{
      // need to handle
    })
  }, [id])


  if(isError) return <Error />

  return (
    <div className="cnl-detail">
      <div className="cnl-header"></div>
        <div className="cnl-data">
          <div className="cnl-thumbnail">
             <img id ='img' src={channelData?.snippet?.thumbnails?.medium?.url || profile } alt="profile" width='200px' height='200px' />
             <div  style={{color:'#fff'}}>
             <span><b>{channelData?.snippet?.title}</b></span>
             </div>
             <div style={{color:'gray'}}>
               <span>{parseInt(channelData?.statistics?.subscriberCount).toLocaleString()} Subscribers</span>
             </div>
            
          </div>
        </div>
        <div className="cnl-videos">
          <div>
            <Videos videos={videos} />
            {isLoading && <Loading />}
          </div>
          <div ref={scrollRef} ></div>
        </div>
    </div>
  )
}

export default ChannelDetail