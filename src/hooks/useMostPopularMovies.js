import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMostPopularMovies } from '../utils/moviesSlice'

const useMostPopularMovies = () => {
    const dispatch = useDispatch();

  const getMostPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    console.log('json', json.results);
    dispatch(addMostPopularMovies(json.results))
  };
  useEffect(() => {
    getMostPopularMovies();
  }, [])
}

export default useMostPopularMovies;