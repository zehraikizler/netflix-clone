import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const Detail = () => {
  let { id } = useParams();
  // console.log(id)
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9fd6e07c1ce219ab081e6f0e0c72beab`).then((response) => {
      setMovie(response.data);
    })
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  }

  return (
    <div className='w-full h-full text-white'>
      <div className='relative w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{ movie?.title }</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 hover:bg-gray-400 text-black hover:text-black-500 border-gray-300 py-2 px-5'>Play</button>
            <button className='border text-white hover:text-gray-300 hover:bg-black-700 border-gray-300 py-2 px-5 ml-4'>Watch</button>
          </div>
          <p className='text-gray-400 text-sm'>Released:{movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Detail