import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from "../../utils/axios"
import requests from '../../utils/requests';
const Banner = () => {
    const [movie , setMovie] = useState({})
    useEffect(()=>{
        (async ()=>{
    try {
        const request  = await axios.get(requests.fetchNetflixOriginals)
        setMovie(request.data.results[
            Math.floor(Math.random()*request.data.results.length)
        ]);
        console.log(request);
        
    } catch (error) {
        console.log('error message', error);
        
    }
        })()
    },[])
    function truncate(str, n) {
        return str?.length >n ? str.substr(0,n -1 )+ "..." :str
    }
    return (
      <>
        <div
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie?.backdrop_path}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
     
          <div className="banner-contents">
            <h1 className="banner title">
              {movie?.title || movie?.original_name}
           </h1>
            <div className="banner-buttons">    
              <button className="banner_button play">Play</button>
              <button className="banner_button myList">My List</button> 
            </div>
             <h6 className='banner_description'>{truncate(movie?.overview, 150)}</h6>
                
          </div>
          <div className='banner_fade'/>
        </div>
      </>
    );
}

export default Banner;
