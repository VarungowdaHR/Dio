import { useEffect, useRef } from "react";

const useInfiniteScroll = (setpage, isLoading) => {
    const scrollRef = useRef(null);
    const scrollRoot= useRef(null);
    const handleScroll=(entries)=>{
        const [entry]=entries;
        if(entry.isIntersecting){
           setpage(page=>page+1);
        }
    }

    const options={
        root:scrollRoot.current,
        rootMargin:'1000px',
        threshold:0
    }

    useEffect(()=>{
        const observer=new IntersectionObserver(handleScroll, options);
        if(!isLoading && scrollRef.current){
            observer.observe(scrollRef.current);
        }
        return ()=>{
            if(scrollRef.current){
                observer.unobserve(scrollRef.current);
            }
        }
    }, [scrollRef, isLoading])

    return {scrollRef, scrollRoot};
}

export default useInfiniteScroll