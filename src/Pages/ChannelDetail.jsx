import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Videos from '../components/Videos';
import '../utils/css/channel.css'
import fetchVideos from '../utils/fetchVideos';

const ChannelDetail = () => {
  const [videos, setvideos] = useState([]);
  const [channelData, setchannelData] = useState(null)
  const {id}=useParams();
  useEffect(()=>{
    const fetchData = async () => {
      const cnlData = await fetchVideos(`channels?part=snippet&id=${id}`);
      setchannelData(cnlData?.items[0]);
      const videosData = await fetchVideos(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setvideos(videosData?.items);
    }
    fetchData();
  }, [id])
  console.log(videos);
  
  
  return (
    <div className="cnl-detail">
      <div className="cnl-header"></div>
        <div className="cnl-data"></div>
        <div className="cnl-videos">
          <Videos videos={videos} />
        </div>
    </div>
  )
}

export default ChannelDetail