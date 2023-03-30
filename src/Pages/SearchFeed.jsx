import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Loading} from "../components/Loading";
import Videos from "../components/Videos";
import fetchVideos from "../utils/fetchVideos";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Error from "../components/Error";

const SearchFeed =()=>{
    const [videos, setvideos] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const [page, setpage] = useState(1)
    const [isError, setisError] = useState(false)
    const {id}=useParams();

    const {scrollRef}=useInfiniteScroll(setpage, isLoading);

    useEffect(()=>{
        setvideos([])
        setisLoading(true)
        fetchVideos(`search?part=snippet&q=${id}`)
        .then((res)=>{
            setvideos(res.items);
            setisLoading(false)
        })
    },[id]);

    useEffect(()=>{
        if(page>1){
            setisLoading(true)
            fetchVideos(`search?part=snippet&q=${id}&nextPageToken=${page}`)
            .then((res)=>{
                setvideos([...videos, ...res.items]);
                setisLoading(false)
                setisError(false)
            }).catch(()=>{
                setisError(true)
            })
        }
    },[page])

    if(isError) return <Error />

    return(
        <div>
            <Videos videos={videos} />
            {isLoading? <Loading />:<></>}
            <div ref={scrollRef}></div>
        </div>
    )
}

export default SearchFeed;