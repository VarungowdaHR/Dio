import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "../components/Videos";
import fetchVideos from "../utils/fetchVideos";

const SearchFeed =()=>{
    const [videos, setvideos] = useState([]);
    const {id}=useParams();
    useEffect(()=>{
        fetchVideos(`search?part=snippet&q=${id}`)
        .then((res)=>setvideos(res.items))
    },[id])
    return(
        <div>
            <Videos videos={videos} />
        </div>
    )
}

export default SearchFeed;