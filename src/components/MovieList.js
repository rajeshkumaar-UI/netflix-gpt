import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    console.log('title', title);
    console.log('movies', movies);
  return (
    <div>
        <div className=''>
            <h1 className='text-2xl p-3 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                
            </div>
        </div>
    </div>
  )
}

export default MovieList