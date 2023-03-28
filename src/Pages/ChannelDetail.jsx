import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Videos from '../components/Videos';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import '../utils/css/channel.css'
import fetchVideos from '../utils/fetchVideos';

const ChannelDetail = () => {
  const [videos, setvideos] = useState([]);
  const [channelData, setchannelData] = useState(null)
  const [isLoading, setisLoading] = useState(true)
  const [page, setpage] = useState(1);
  const {id}=useParams();

  const {scrollRef} = useInfiniteScroll(setpage, isLoading);


  useEffect(()=>{
    setisLoading(true);
    fetchVideos(`search?channelId=${id}&part=snippet%2Cid&nextPageToken=${page}&order=date`).then((res)=>{
      setvideos([...videos, ...res.items]);
      setisLoading(false);
   }).catch(()=>{
    console.log("failed to fetch channel profile");

   })
  },[id, page]);

  useEffect(()=>{
    fetchVideos(`channels?part=snippet&id=${id}`).then((res)=>{
      setchannelData(res.items[0]);
    }).catch((e)=>{
      console.log("failed to fetch channel videos");
    })
  }, [id])


  return (
    <div className="cnl-detail">
      <div className="cnl-header"></div>
        <div className="cnl-data">
          <div className="cnl-thumbnail">
             <img id ='img' src={channelData?.snippet?.thumbnails?.medium?.url} alt="no paa" width='200px' height='200px' />
             <div>
             <span>{channelData?.snippet?.title}</span>
             </div>
             <div>
               <span>{parseInt(channelData?.statistics?.subscriberCount).toLocaleString()} Subscribers</span>
             </div>
            
          </div>
        </div>
        <div className="cnl-videos">
          <div>
            <Videos videos={videos} />
          </div>
          <div ref={scrollRef} ></div>
        </div>
    </div>
  )
}

export default ChannelDetail