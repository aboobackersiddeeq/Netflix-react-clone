import React, { useEffect, useState } from "react";
import{API_KEY,imageUrl} from '../../constants/constans'
import axios from "../../Axios"; 
import "./Banner.css";
 
const Banner = () => {
  const [movie,setMovie]=useState('')
  useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[3]);
        var randomnumber = Math.floor(Math.random() * (20 - 0+ 1)) + 0;
        setMovie(response.data.results[randomnumber])
      })
  },[])
  return (

    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}} className="banner">
      <div className="content">
        <h1 className="title">{movie.title} </h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
        {movie.overview}
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  );
};

export default Banner;
