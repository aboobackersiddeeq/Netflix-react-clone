import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import YouTube from 'react-youtube'
import './RowPost.css'
import{imageUrl,API_KEY} from '../../constants/constans'
export const RowPost = (props) => {
    const [movies,setPost]=useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(()=>{
       axios.get( props.Url).then((response)=>{
        console.log(response.data)
        setPost(response.data.results)
       }).catch(err=>{
        // alert('Network Error')
       });
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handileMovie=(id)=>{
      console.log(id);
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
        }else{
          console.log('not available');
        }
      })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((movie)=>(
            <img key={movie.id} onClick={()=>handileMovie(movie.id)} className={props.isSmall?'smallPoster':'poster'} alt="poster" src={`${imageUrl+movie.backdrop_path}`} />
          ))}  
           
        {/* <img className='poster' src="https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w" alt="poster"/> <img className='poster' src="https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w" alt="poster"/> */}
        </div>
        {urlId &&< YouTube videoId={urlId.key} opts={opts}  />}
        
    </div>
  )
}
 