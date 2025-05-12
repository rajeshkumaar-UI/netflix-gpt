import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
    const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && movies.mostPopularMovies && (
        <div className='bg-black'>
            <div className='-mt-52 relative z-20'>
                <MovieList title="Now playing" movies={movies.nowPlayingMovies}/>
                <MovieList title="Popular" movies={movies.mostPopularMovies}/>
                <MovieList title="recomanded" movies={movies.nowPlayingMovies}/>
                <MovieList title="Most viewed" movies={movies.nowPlayingMovies}/>
            </div>
        </div>
    )
  );
}

export default Secondarycontainer