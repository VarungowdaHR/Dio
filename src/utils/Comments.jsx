import React, { useEffect, useState } from 'react'
import fetchVideos from './fetchVideos';
import parse from 'html-react-parser';

const Comments = ({id}) => {
    const [comments, setcomments] = useState([]);
    useEffect( ()=>{
        fetchVideos(`commentThreads?part=snippet&maxResults=100&videoId=${id}`).then((res)=> setcomments(res?.items));
    },[]);
    console.log(comments);
  return (
    <div>
      {
        comments.map((item, i)=>{
          const temp=item?.snippet?.topLevelComment?.snippet;
          return (
          <div key={i} className='comments'>
            <div className="user-profile">
              <img className='user-img' src={temp?.authorProfileImageUrl} width='25px' height='25px' alt='profile pic' />
              <span>{temp?.authorDisplayName}</span>
            </div>
            <div className='cmt-text'>
              <span>{parse(temp?.textDisplay)}</span>
            </div>
          </div>
  )}) 
        }
    </div>
  )
}

export default Comments