import React, {  useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import "../utils/css/feed.css"
import fetchVideos from '../utils/fetchVideos'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import Loading from '../components/Loading'
import { Suspense } from 'react'

const Videos = React.lazy(() => import('../components/Videos'));

const Feed = () => {

  const [videos, setvideos] = useState([]);
  const [currentItem, setcurrentItem] = useState('New')
  const [page, setpage] = useState(1);
  const [isLoading, setisLoading] = useState(true)

  const {scrollRef, scrollRoot} =useInfiniteScroll(setpage, isLoading);


  useEffect(()=>{
    setisLoading(true);
    fetchVideos(`search?part=snippet&q=${currentItem}&nextPageToken=${page}`)
    .then((data) => {
      setvideos([...videos, ...data.items])
      setisLoading(false);
    })
    .catch((err)=>{
      console.log("api fails to fetch");
      // setisLoading(false);
    });
  }, [currentItem, page])

  return (
    <>
    <div className="main-feed">
      <div className="main-feed-sidebar">
        <SideBar currentItem={currentItem} setcurrentItem={setcurrentItem} setVideos={setvideos} />
      </div>
      <div ref={scrollRoot} className="main-video-container scroll-track">
        <div style={{width:'100%'}}>
          <Suspense fallback={<Loading />}>
            <Videos videos={videos} isLoading={isLoading}/>
          </Suspense>
          {/* {isLoading && <Loading />} */}
        </div>
         {/* <div ref={scrollRef}></div> */}
      </div>
    </div>
    
    </>
  )
}

export default Feed