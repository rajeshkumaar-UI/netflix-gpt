import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import useMostPopularMovies from '../hooks/useMostPopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  useMostPopularMovies();

  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  )
}

export default Browse