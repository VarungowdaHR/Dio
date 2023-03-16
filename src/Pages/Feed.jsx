import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import "../utils/css/feed.css"
import Videos from '../components/Videos'
import fetchVideos from '../utils/fetchVideos'

const Feed = () => {

  const [videos, setvideos] = useState([]);
  const [currentItem, setcurrentItem] = useState('New')

  useEffect(()=>{
    fetchVideos(`search?part=snippet&q=${currentItem}`)
    .then((data) => setvideos(data.items)).catch((err)=>{
      console.log("api fails to fetch");
    });
  }, [currentItem])


  return (
    <div className="main-feed">
      <div className="main-feed-sidebar">
        <SideBar currentItem={currentItem} setcurrentItem={setcurrentItem} />
      </div>
      <div className="main-video-container scroll-track">
        
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default Feed