import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle'

const Maincontainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    console.log('movies', movies);

    if(!movies) return;
    const mainMovie = movies[0];
    console.log('mainMovie', mainMovie);
    const {original_title, overview, id} = mainMovie
  return (
    <div className='relative'>
        
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
        
    </div>
  )
}

export default Maincontainer